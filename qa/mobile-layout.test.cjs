// Run against the local preview with Playwright available through NODE_PATH.
const assert = require('node:assert/strict');
const { chromium, webkit } = require('playwright');

const base = process.env.WOUNDHAVEN_QA_BASE || 'http://127.0.0.1:4178';
const routes = ['/', '/wound-care/', '/wounds-we-treat/', '/technology/', '/about/', '/contact/', '/self-referral/', '/patient-referral/', '/privacy-policy/', '/terms-of-service/', process.env.WOUNDHAVEN_QA_GLOBAL_ROUTE || '/preview/global/'];
const widths = [320, 375, 390, 430, 600, 768, 880, 1440];

(async () => {
  for (const [name, engine] of [['Chromium', chromium], ['WebKit', webkit]]) {
    const browser = await engine.launch({ headless: true });
    try {
      const page = await browser.newPage();
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        for (const route of routes) {
          await page.goto(base + route);
          const layout = await page.evaluate(() => {
            const utility = document.querySelector('.wh-utility-content');
            const parts = [...utility.children].map(element => {
              const rect = element.getBoundingClientRect();
              return { top: rect.top, left: rect.left, right: rect.right };
            });
            return {
              overflow: document.documentElement.scrollWidth > innerWidth,
              parts,
              phone: utility.querySelector('a').getAttribute('href'),
              titles: [...document.querySelectorAll('.wh-city-card h3')].map(element => element.innerText.replace(/\s+/g, ' ').trim()),
            };
          });
          const label = `${name} ${width}px ${route}`;
          assert(!layout.overflow, `${label}: horizontal overflow`);
          assert(Math.abs(layout.parts[0].top - layout.parts[1].top) < 1, `${label}: top bar wraps`);
          assert(layout.parts.every(part => part.left >= 0 && part.right <= width), `${label}: clipped top bar`);
          const center = (layout.parts[0].left + layout.parts.at(-1).right) / 2;
          assert(Math.abs(center - width / 2) < 1, `${label}: top bar not centered`);
          assert.equal(layout.phone, 'tel:+18772881270');
          for (const title of layout.titles) assert(title.includes('Care in '), `${label}: joined city heading`);
        }
      }

      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(base + '/wounds-we-treat/');
      const jump = '.wh-wound-jump-grid a[href$="#arterial-wounds"]';
      await page.locator(jump).evaluate(link => link.click());
      const initialY = await page.evaluate(() => scrollY);
      await page.waitForTimeout(100);
      const intermediateY = await page.evaluate(() => scrollY);
      await page.waitForTimeout(1500);
      const destination = await page.evaluate(() => ({
        y: scrollY,
        top: document.getElementById('arterial-wounds').getBoundingClientRect().top,
        headerBottom: document.querySelector('[data-site-header]').getBoundingClientRect().bottom,
        hash: location.hash,
        focus: document.activeElement.id,
      }));
      assert(intermediateY > initialY && intermediateY < destination.y, `${name}: missing smooth scroll`);
      assert.equal(destination.hash, '#arterial-wounds');
      assert.equal(destination.focus, 'arterial-wounds');
      assert(destination.top >= destination.headerBottom, `${name}: target obscured by sticky header`);
      await page.goBack();
      assert.equal(await page.evaluate(() => location.hash), '');

      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.goto(base + '/wounds-we-treat/');
      await page.locator(jump).evaluate(link => link.click());
      const reducedY = await page.evaluate(() => scrollY);
      await page.waitForTimeout(100);
      assert.equal(await page.evaluate(() => scrollY), reducedY, `${name}: reduced-motion scroll still animates`);
      assert(reducedY > 1000, `${name}: reduced-motion destination not reached`);

      await page.goto(base + '/');
      await page.locator('[data-mobile-toggle]').click();
      assert.equal(await page.locator('[data-mobile-toggle]').getAttribute('aria-expanded'), 'true');
      await page.locator('[data-mobile-toggle]').click();
      await page.locator('.wh-referral-toggle').click();
      assert(await page.locator('#referral-menu').isVisible(), `${name}: referral menu inaccessible`);
      assert.deepEqual(errors, [], `${name}: browser errors`);
      console.log(`${name}: ${widths.length * routes.length} page/viewport checks, smooth scrolling, reduced motion, history, focus, and mobile menus passed.`);
    } finally {
      await browser.close();
    }
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
