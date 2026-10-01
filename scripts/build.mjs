import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = [
  ['src/document.html', 'index.html', 'WH_HOME', 'src/pages/home.html'],
  ['src/preview.html', 'global-preview.html'],
  ['src/wound-care-document.html', 'wound-care/index.html', 'WH_WOUND_CARE', 'src/pages/wound-care.html'],
  ['src/wounds-we-treat-document.html', 'wounds-we-treat/index.html', 'WH_WOUNDS', 'src/pages/wounds-we-treat.html'],
  ['src/about-document.html', 'about/index.html', 'WH_ABOUT', 'src/pages/about.html'],
  ['src/technology-document.html', 'technology/index.html', 'WH_TECHNOLOGY', 'src/pages/technology.html'],
  ['src/contact-document.html', 'contact/index.html', 'WH_CONTACT', 'src/pages/contact.html'],
  ['src/self-referral-document.html', 'self-referral/index.html', 'WH_REFERRAL', 'src/pages/self-referral.html'],
  ['src/patient-referral-document.html', 'patient-referral/index.html', 'WH_REFERRAL', 'src/pages/patient-referral.html'],
];
for (const [template, output, contentToken, contentFile] of pages) {
  let html = await readFile(path.join(root, template), 'utf8');
  for (const [token, file] of [['WH_HEADER', 'components/site-header.html'], ['WH_FOOTER', 'components/site-footer.html']]) {
    html = html.replace(`<!-- ${token} -->`, await readFile(path.join(root, file), 'utf8'));
  }
  if (contentFile) html = html.replace(`<!-- ${contentToken} -->`, await readFile(path.join(root, contentFile), 'utf8'));
  // Shared visual polish follows each page's own stylesheet; source templates stay reusable.
  html = html.replace('</head>', '  <link rel="stylesheet" href="styles/brand-visuals.css">\n  <link rel="stylesheet" href="styles/motion.css">\n  <script src="scripts/motion.js" defer></script>\n</head>');
  // A relative base keeps shared assets project-safe, but bare fragments must stay on their own page.
  if (path.dirname(output) !== '.') {
    const pageHref = `./${path.dirname(output).split(path.sep).join('/')}/`;
    html = html.replace(/href="#([^"]*)"/g, `href="${pageHref}#$1"`);
  }
  await mkdir(path.dirname(path.join(root, output)), { recursive: true });
  await writeFile(path.join(root, output), html);
  console.log(`Built ${output} from editable source and shared global components.`);
}
