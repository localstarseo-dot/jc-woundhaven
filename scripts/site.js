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
