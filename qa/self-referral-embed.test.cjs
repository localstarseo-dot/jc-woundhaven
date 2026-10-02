const assert = require('node:assert/strict');
const { chromium, webkit } = require('playwright');

const base = process.env.WOUNDHAVEN_QA_BASE || 'http://127.0.0.1:4178';
const isPatient = process.env.WOUNDHAVEN_QA_REFERRAL === 'patient';
const routeName = isPatient ? 'patient-referral' : 'self-referral';
const formTitle = isPatient ? 'Patient Referral Form' : 'Self Referral Form';
const formURL = `https://form.jotform.com/${isPatient ? '262745072792060' : '262745397105058'}`;
const embedSelector = `.wh-${routeName}-embed iframe`;

// Read-only checks: never fill fields, upload files, or submit a referral.
(async () => {
  for (const [name, engine] of Object.entries({ chromium, webkit })) {
    const browser = await engine.launch();
    try {
      for (const width of [320, 390, 880, 1440]) {
        const page = await browser.newPage({ viewport: { width, height: 900 } });
        const errors = [];
        const submissions = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.route('**/*', route => {
          const request = route.request();
          if (request.method() !== 'GET' && /\/submit(?:\/|\?|$)/.test(request.url())) {
            submissions.push(request.url());
            return route.abort();
          }
          return route.continue();
        });
        await page.goto(`${base}/${routeName}/`, { waitUntil: 'domcontentloaded' });
        const iframe = page.locator(embedSelector);
        await iframe.waitFor({ timeout: 30000 });
        assert.equal(await iframe.getAttribute('title'), formTitle);
        assert.ok((await iframe.getAttribute('src')).startsWith(`${formURL}?`));
        const frame = await (await iframe.elementHandle()).contentFrame();
        await frame.locator('h1').waitFor({ timeout: 30000 });
        assert.equal((await frame.locator('h1').innerText()).trim(), formTitle);
        assert.ok(await frame.locator('input:not([type="hidden"]), select, textarea').count());
        await page.waitForFunction(selector => {
          const iframe = document.querySelector(selector);
          return iframe && iframe.getBoundingClientRect().height > 1000;
        }, embedSelector);
        await frame.evaluate(() => document.fonts.ready.then(() => undefined));
        await frame.waitForFunction(() => {
          const submit = document.querySelector('button[type="submit"]');
          return submit && innerHeight >= document.body.scrollHeight - 2 && innerHeight >= submit.getBoundingClientRect().bottom;
        }, null, { timeout: 15000, polling: 100 });
        await page.waitForTimeout(700);
        const outer = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
        const inner = await frame.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth, height: document.body.scrollHeight, submitBottom: document.querySelector('button[type="submit"]').getBoundingClientRect().bottom }));
        const box = await iframe.boundingBox();
        assert.ok(outer.scroll <= outer.width + 1, `Page overflow: ${name}/${width}`);
        assert.ok(inner.scroll <= inner.width + 1, `Form overflow: ${name}/${width}`);
        assert.ok(box.height >= inner.height - 2, `Form auto-height mismatch: ${name}/${width}`);
        assert.ok(box.height >= inner.submitBottom, `Submit control clipped: ${name}/${width}`);
        assert.equal(await page.locator('fieldset[disabled]').count(), 0);
        assert.equal(await page.locator('a[href="' + formURL + '"]').count(), 1);
        assert.deepEqual(errors, []);
        assert.deepEqual(submissions, []);
        if (width === 390 || width === 1440) {
          await page.evaluate(selector => {
            const iframe = document.querySelector(selector);
            const header = document.querySelector('.wh-header');
            window.scrollTo({ top: iframe.getBoundingClientRect().top + scrollY - (header?.getBoundingClientRect().height || 120) - 15, behavior: 'instant' });
          }, embedSelector);
          await page.screenshot({ path: `/tmp/woundhaven-${routeName}-${name}-${width}.png` });
        }
        console.log(`PASS ${routeName} ${name} ${width}px: form loads, fits, auto-resizes; no submission`);
        await page.close();
      }
      const noJS = await browser.newPage({ javaScriptEnabled: false });
      await noJS.goto(`${base}/${routeName}/`);
      assert.equal(await noJS.locator(`a[href="${formURL}"]`).count(), 1);
      assert.equal(await noJS.locator('iframe').count(), 0);
      await noJS.close();
      const blocked = await browser.newPage();
      await blocked.route('https://form.jotform.com/**', route => route.abort());
      await blocked.goto(`${base}/${routeName}/`);
      assert.ok(await blocked.locator(`a[href="${formURL}"]`).isVisible());
      assert.equal(await blocked.locator(`.wh-referral-switch[href="./${isPatient ? 'self-referral' : 'patient-referral'}/"]`).count(), 1);
      await blocked.goto(`${base}/contact/`);
      assert.equal(await blocked.locator('form, iframe, input, select, textarea').count(), 0);
      await blocked.close();
      console.log(`PASS ${routeName} ${name}: no-JS/blocked-form fallback; pathway switch and Contact preserved`);
    } finally {
      await browser.close();
    }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
