const assert = require('node:assert/strict');
const { chromium, webkit } = require('playwright');

const base = process.env.WOUNDHAVEN_QA_BASE || 'http://127.0.0.1:4178';
const routes = ['/', '/wound-care/', '/wounds-we-treat/', '/about/', '/technology/', '/contact/', '/self-referral/', '/patient-referral/', '/privacy-policy/', '/terms-of-service/', process.env.WOUNDHAVEN_QA_GLOBAL_ROUTE || '/preview/global/'];
const widths = [320, 390, 600, 768, 880, 1151, 1440];
const contacts = [
  ['info@woundhaven.com', 'For general questions or patient inquiries.'],
  ['careers@woundhaven.com', 'For employment inquiries.'],
  ['referpatient@woundhaven.com', 'For referrals from hospitals and healthcare providers.'],
  ['medicalrecords@woundhaven.com', 'For medical records requests.'],
];

// Inspect mailto targets without opening email clients or sending email.
(async () => {
  for (const [name, engine] of Object.entries({ chromium, webkit })) {
    const browser = await engine.launch();
    try {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      // This is footer QA, not external form QA; keep the hosted forms untouched.
      await page.route('https://form.jotform.com/**', route => route.abort());
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        for (const route of routes) {
          // WebKit may signal DOM readiness before remote stylesheets are applied.
          await page.goto(base + route, { waitUntil: 'load' });
          assert.equal(await page.locator('.wh-footer-email').count(), contacts.length);
          for (const [email, purpose] of contacts) {
            const link = page.locator(`.wh-footer-email a[href="mailto:${email}"]`);
            assert.equal(await link.count(), 1);
            assert.equal(await link.innerText(), email);
            assert.equal(await link.locator('..').locator('span').innerText(), purpose);
          }
          const layout = await page.evaluate(() => {
            const items = [...document.querySelectorAll('.wh-footer-email, .wh-contact-email-list li')];
            return {
              pageFits: document.documentElement.scrollWidth <= innerWidth,
              itemsFit: items.every(item => item.scrollWidth <= item.clientWidth + 1),
              emailsFit: items.every(item => {
                const range = document.createRange();
                range.selectNodeContents(item.querySelector('a'));
                return [...range.getClientRects()].every(rect => rect.left >= 0 && rect.right <= innerWidth + 1);
              }),
            };
          });
          assert.ok(layout.pageFits && layout.itemsFit && layout.emailsFit, `${name} ${route} ${width}px overflow`);
          if (route === '/contact/') {
            assert.equal(await page.locator('main .wh-contact-email-list li').count(), contacts.length);
            for (const [email, purpose] of contacts) {
              const link = page.locator(`main a[href="mailto:${email}"]`);
              assert.equal(await link.count(), 1);
              assert.equal(await link.innerText(), email);
              assert.equal(await link.locator('..').locator('p').innerText(), purpose);
            }
            assert.equal(await page.locator('main form, main iframe, main input, main textarea, main select').count(), 0);
            const copy = await page.locator('main').innerText();
            assert.ok(!/confirmation pending|inactive preview/i.test(copy));
            assert.equal(await page.locator('main a[href="./self-referral/"]').count(), 1);
            assert.equal(await page.locator('main a[href="./patient-referral/"]').count(), 1);
            if (width === 390 || width === 1440) {
              await page.locator('.wh-contact-email-directory').scrollIntoViewIfNeeded();
              await page.screenshot({ path: `/tmp/woundhaven-contact-emails-${name}-${width}.png` });
            }
          }
          if (route === '/' && (width === 390 || width === 1440)) {
            await page.locator('.wh-site-footer').scrollIntoViewIfNeeded();
            await page.locator('.wh-footer-brand img').evaluate(image => image.decode());
            await page.waitForTimeout(350);
            await page.screenshot({ path: `/tmp/woundhaven-footer-emails-${name}-${width}.png` });
          }
        }
      }
      assert.deepEqual(errors, []);
      console.log(`PASS ${name}: ${routes.length * widths.length} page/viewport checks; all four emails/purposes, responsive footer/Contact, and form-free Contact verified. No email sent.`);
    } finally {
      await browser.close();
    }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
