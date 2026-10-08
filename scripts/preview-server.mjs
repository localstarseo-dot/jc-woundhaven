import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.WOUNDHAVEN_PORT || 4178);
const routes = {
  '/': 'Wound Haven',
  '/preview/global/': 'Global header &amp; footer preview',
  '/wound-care/': 'Wound Care',
  '/wounds-we-treat/': 'Wounds We Treat',
  '/technology/': 'Technology',
  '/about/': 'About Wound Haven',
  '/contact/': 'Contact Wound Haven',
  '/self-referral/': 'Self Referral Form',
  '/patient-referral/': 'Patient Referral Form',
  '/privacy-policy/': 'Privacy Policy',
  '/terms-of-service/': 'Terms of Service',
};
const builtPages = { '/': 'index.html', '/wound-care/': 'wound-care/index.html', '/wounds-we-treat/': 'wounds-we-treat/index.html', '/about/': 'about/index.html', '/technology/': 'technology/index.html', '/contact/': 'contact/index.html', '/self-referral/': 'self-referral/index.html', '/patient-referral/': 'patient-referral/index.html', '/privacy-policy/': 'privacy-policy/index.html', '/terms-of-service/': 'terms-of-service/index.html' };
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png' };
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (Object.hasOwn(routes, pathname)) {
      let html = await readFile(path.join(root, builtPages[pathname] || 'global-preview.html'), 'utf8');
      html = html.replace('<!-- WH_LOCAL_BASE -->', '<base href="/">');
      if (!Object.hasOwn(builtPages, pathname) && pathname !== '/preview/global/') {
        let content = `<section class="wh-preview-intro wh-container" aria-labelledby="preview-title"><p class="wh-preview-eyebrow"><span></span>Wound Haven · Phase 1 route preview</p><h1 id="preview-title">${routes[pathname]}</h1><p class="wh-preview-description">This route is reserved for Phase 1. Page content will be built next.</p></section>`;
        html = html.replace(/<!-- WH_PREVIEW_CONTENT -->[\s\S]*?<!-- \/WH_PREVIEW_CONTENT -->/, content);
        html = html.replace('<title>Wound Haven | Global Header &amp; Footer Preview</title>', `<title>${routes[pathname]} | Wound Haven · Local route preview</title>`);
        html = html.replace(/<section class="wh-preview-scroll-area"[\s\S]*?<\/section>/, '');
      }
      res.writeHead(200, { 'Content-Type': types['.html'], 'Cache-Control': 'no-store' });
      return res.end(html);
    }
    const resolved = path.resolve(root, `.${pathname}`);
    const relative = path.relative(root, resolved);
    if (relative.startsWith('..') || relative.split(path.sep).some((part) => part.startsWith('.')) || !/^(assets|styles|scripts)\//.test(relative) || /\.mjs$/.test(relative)) {
      res.writeHead(404); return res.end('Not found');
    }
    if (!(await stat(resolved)).isFile()) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(resolved)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(await readFile(resolved));
  } catch (error) {
    res.writeHead(error.code === 'ENOENT' ? 404 : 500);
    res.end('Preview file unavailable');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Wound Haven local preview: http://127.0.0.1:${port}/`));
