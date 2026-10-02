(() => {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;
  const mobileToggle = header.querySelector('[data-mobile-toggle]');
  const dropdowns = [...header.querySelectorAll('[data-dropdown]')];
  const closeDropdown = (item) => {
    item.querySelector('[data-dropdown-toggle]').setAttribute('aria-expanded', 'false');
    item.querySelector('.wh-dropdown-menu').hidden = true;
  };
  const closeAllDropdowns = () => dropdowns.forEach(closeDropdown);
  const closeMobile = () => {
    header.classList.remove('wh-mobile-open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.setAttribute('aria-label', 'Open navigation');
  };
  dropdowns.forEach((item) => {
    const toggle = item.querySelector('[data-dropdown-toggle]');
    const menu = item.querySelector('.wh-dropdown-menu');
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      closeAllDropdowns();
      if (!open) {
        if (item.classList.contains('wh-referral-dropdown')) closeMobile();
        toggle.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
      }
    });
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeDropdown(item);
        toggle.focus();
        event.stopPropagation();
      }
      if (event.key === 'ArrowDown' && document.activeElement === toggle) {
        event.preventDefault();
        closeAllDropdowns();
        toggle.setAttribute('aria-expanded', 'true');
        menu.hidden = false;
        menu.querySelector('a').focus();
      }
    });
  });
  mobileToggle.addEventListener('click', () => {
    const open = header.classList.contains('wh-mobile-open');
    closeAllDropdowns();
    header.classList.toggle('wh-mobile-open', !open);
    mobileToggle.setAttribute('aria-expanded', String(!open));
    mobileToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-dropdown]')) closeAllDropdowns();
    if (!header.contains(event.target)) closeMobile();
  });
  document.addEventListener('focusin', (event) => {
    dropdowns.forEach((item) => { if (!item.contains(event.target)) closeDropdown(item); });
    if (!header.contains(event.target)) closeMobile();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('wh-mobile-open')) {
      closeMobile();
      closeAllDropdowns();
      mobileToggle.focus();
    }
  });
  header.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => { closeAllDropdowns(); closeMobile(); });
    const url = new URL(link.href);
    if (url.origin === location.origin && url.pathname === location.pathname && !url.hash && link.closest('nav')) link.setAttribute('aria-current', 'page');
  });
  const syncHeaderHeight = () => document.documentElement.style.setProperty('--wh-header-height', `${Math.ceil(header.getBoundingClientRect().height)}px`);
  new ResizeObserver(syncHeaderHeight).observe(header);
  matchMedia('(min-width: 1151px)').addEventListener('change', () => { closeMobile(); closeAllDropdowns(); });
  syncHeaderHeight();
})();

// Enhance in-page links only; wheel, touch, and cross-page navigation stay native.
(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const url = new URL(link.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search || !url.hash) return;
    let id;
    try { id = decodeURIComponent(url.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const oldURL = location.href;
    if (location.hash !== url.hash) {
      history.pushState(null, '', url.href);
      // Reveal an animated destination before measuring its scroll position.
      dispatchEvent(new HashChangeEvent('hashchange', { oldURL, newURL: url.href }));
    }
    const temporaryTabindex = !target.hasAttribute('tabindex') && target.tabIndex < 0;
    if (temporaryTabindex) {
      target.setAttribute('tabindex', '-1');
      target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
    }
    target.focus({ preventScroll: true });
    target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
  });
})();
