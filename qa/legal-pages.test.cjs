const assert = require('node:assert/strict');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { chromium, webkit } = require('playwright');
const expectedCopy = require('./legal-copy.expected.json');
const normalize = value => value.replace(/\s+/g, ' ').trim();

const base = process.env.WOUNDHAVEN_QA_BASE || 'http://127.0.0.1:4178';
const routes = ['/', '/wound-care/', '/wounds-we-treat/', '/about/', '/technology/', '/contact/', '/self-referral/', '/patient-referral/', '/privacy-policy/', '/terms-of-service/', process.env.WOUNDHAVEN_QA_GLOBAL_ROUTE || '/preview/global/'];
const widths = [320, 390, 600, 768, 880, 1151, 1440];
const legal = [['Privacy Policy', '/privacy-policy/'], ['Terms of Service', '/terms-of-service/']];

(async () => {
  for (const [name, engine] of Object.entries({ chromium, webkit })) {
    const browser = await engine.launch();
    try {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await page.route('https://form.jotform.com/**', route => route.abort());
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        for (const route of routes) {
          assert.equal((await page.goto(base + route, { waitUntil: 'load' })).status(), 200);
          assert.equal(await page.locator('.wh-footer-bottom p').innerText(), '© 2026 Wound Haven');
          assert.equal(await page.getByRole('navigation', { name: 'Legal footer links', exact: true }).count(), 1);
          for (const [text, path] of legal) {
            const link = page.locator('.wh-footer-legal').getByRole('link', { name: text, exact: true });
            assert.equal(await link.count(), 1);
            assert.equal(await link.evaluate(element => new URL(element.href).pathname), path);
            assert.ok(await link.evaluate(element => element.getBoundingClientRect().height >= 44));
          }
          assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${name} ${route} ${width}px overflow`);
          if (legal.some(([, path]) => path === route)) {
            assert.equal(await page.locator('main h1').count(), 1);
            assert.ok((await page.title()).includes('Wound Haven'));
            const expected = expectedCopy[route];
            assert.equal(normalize(await page.locator('.wh-legal-date').innerText()), expected.date);
            assert.equal(await page.locator('.wh-legal-date time').getAttribute('datetime'), '2026-10-09');
            assert.equal(await page.locator('main .wh-legal-notice').count(), 0);
            assert.deepEqual((await page.locator('.wh-legal-intro').allInnerTexts()).map(normalize), expected.intro);
            const sections = page.locator('.wh-legal-section');
            assert.deepEqual((await sections.locator('h2').allInnerTexts()).map(normalize), expected.sections.map(section => section.heading));
            assert.deepEqual((await sections.allInnerTexts()).map(normalize), expected.sections.map(section => section.text));
            const content = await page.locator('main').innerText();
            assert.ok(!/\[Insert|Draft for review|Not yet effective/i.test(content));
            assert.ok(content.includes('STOP') && content.includes('HELP'));
            assert.equal(await page.locator('meta[name="robots"]').getAttribute('content'), 'noindex, nofollow');
            assert.equal(await page.locator('main form, main iframe, main input, main textarea').count(), 0);
            assert.equal(await page.locator('.wh-legal-section').count(), expected.sections.length);
            const checks = await page.evaluate(sectionCount => {
              const ids = [...document.querySelectorAll('[id]')].map(element => element.id);
              const links = [...document.querySelectorAll('.wh-legal-contents a')];
              return {
                uniqueIds: new Set(ids).size === ids.length,
                anchors: links.length === sectionCount && links.every(link => {
                  const url = new URL(link.href);
                  return url.pathname === location.pathname && !!document.getElementById(url.hash.slice(1));
                }),
              };
            }, expected.sections.length);
            assert.ok(checks.uniqueIds && checks.anchors, `${name} ${route} broken section navigation`);
            assert.ok(await page.locator('main a[href="mailto:info@woundhaven.com"]').count());
            if (width === 390 || width === 1440) {
              await page.screenshot({ path: `/tmp/woundhaven-${route.split('/')[1]}-${name}-${width}.png` });
            }
          }
        }
      }
      for (const [, route] of legal) {
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.goto(base + route, { waitUntil: 'load' });
        const anchor = page.locator('.wh-legal-contents a').last();
        const hash = new URL(await anchor.evaluate(element => element.href)).hash;
        await anchor.click();
        assert.equal(new URL(page.url()).hash, hash);
        const target = page.locator(hash);
        assert.ok(await target.evaluate(element => document.activeElement === element));
        const position = await target.evaluate(element => ({ top: element.getBoundingClientRect().top, header: document.querySelector('.wh-site-header').getBoundingClientRect().bottom }));
        assert.ok(position.top >= position.header, `${name} ${route}: anchor hidden beneath sticky header`);
        await page.locator('.wh-footer-bottom').scrollIntoViewIfNeeded();
        await page.locator('.wh-footer-brand img').evaluate(image => image.decode());
        await page.screenshot({ path: `/tmp/woundhaven-legal-footer-${name}.png` });
        const other = legal.find(([, path]) => path !== route);
        await page.locator('.wh-footer-legal').getByRole('link', { name: other[0], exact: true }).click();
        await page.waitForURL(base + other[1]);
        assert.equal(await page.locator('main h1').innerText(), other[0]);
      }
      const noScript = await browser.newPage({ javaScriptEnabled: false, viewport: { width: 320, height: 900 } });
      for (const [text, route] of legal) {
        assert.equal((await noScript.goto(base + route, { waitUntil: 'load' })).status(), 200);
        assert.equal(await noScript.locator('main h1').innerText(), text);
        assert.ok(await noScript.locator('.wh-legal-section').last().isVisible());
      }
      await noScript.close();

      // Serve built files through a mocked project prefix without publishing anything.
      const projectBase = 'http://127.0.0.1:4178/jc-woundhaven/';
      const prefixed = await browser.newPage({ viewport: { width: 390, height: 900 }, reducedMotion: 'reduce' });
      prefixed.on('pageerror', error => errors.push(error.message));
      const root = path.resolve(__dirname, '..');
      const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp' };
      await prefixed.route(projectBase + '**', async route => {
        let relative = decodeURIComponent(new URL(route.request().url()).pathname).slice('/jc-woundhaven/'.length);
        if (!relative || relative.endsWith('/')) relative += 'index.html';
        const file = path.resolve(root, relative);
        if (!file.startsWith(root + path.sep)) return route.fulfill({ status: 404 });
        try {
          await route.fulfill({ status: 200, body: await readFile(file), contentType: types[path.extname(file)] || 'application/octet-stream' });
        } catch { await route.fulfill({ status: 404 }); }
      });
      for (const [, legalRoute] of legal) {
        await prefixed.goto(projectBase + legalRoute.slice(1), { waitUntil: 'load' });
        assert.ok(await prefixed.locator('h1').evaluate(element => getComputedStyle(element).fontSize !== '32px'), 'legal stylesheet did not load under project prefix');
        for (const [text, destination] of legal) {
          assert.equal(await prefixed.locator('.wh-footer-legal').getByRole('link', { name: text, exact: true }).evaluate(element => element.href), projectBase + destination.slice(1));
        }
        await prefixed.locator('.wh-legal-contents a').first().click();
        assert.ok(new URL(prefixed.url()).pathname.startsWith('/jc-woundhaven/'));
        assert.equal(await prefixed.locator('.wh-legal-section').first().evaluate(element => document.activeElement === element), true);
      }
      await prefixed.close();
      assert.deepEqual(errors, []);
      console.log(`PASS ${name}: ${routes.length * widths.length} route/viewport checks; exact supplied policy/terms copy, October 9 date, global legal links/copyright, anchors, cross-page links, no-JS readability, project-prefixed built files, and no overflow.`);
    } finally { await browser.close(); }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
