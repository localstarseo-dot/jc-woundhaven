(() => {
  "use strict";

  // No observer or motion preference API means no reveal enhancement is needed.
  if (!window.matchMedia || !("IntersectionObserver" in window)) return;

  const root = document.documentElement;
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const revealed = new WeakSet();
  const selector = [
    ".wh-home-section .wh-section-heading",
    ".wh-home-section .wh-faq-intro",
    ".wh-home-section .wh-tech-overview-intro",
    ".wh-home-section figure",
    ".wh-home-section .wh-technology-visual",
    ".wh-home-section h2",
    ".wh-wound-detail h2"
  ].join(",");
  let observer = null;
  let targets = [];

  const reveal = (element) => {
    if (!element || !element.classList.contains("wh-motion-reveal")) return;
    element.classList.add("wh-motion-in-view");
    revealed.add(element);
    if (observer) observer.unobserve(element);
  };

  const revealHashTarget = () => {
    let id;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const section = target.closest("section") || target;
    targets.forEach((element) => {
      if (section.contains(element) || element.contains(target)) reveal(element);
    });
  };

  const reset = () => {
    if (observer) observer.disconnect();
    observer = null;
    root.classList.remove("wh-motion-enabled");
    targets.forEach((element) => element.classList.remove("wh-motion-reveal", "wh-motion-in-view"));
    targets = [];
  };

  const initialize = () => {
    reset();
    if (preference.matches) return;

    const candidates = Array.from(document.querySelectorAll(selector));
    targets = candidates.filter((element) => {
      // Leave heroes, initial-viewport content, and previously revealed content alone.
      if (revealed.has(element) || element.closest(".wh-hero")) return false;
      if (element.getBoundingClientRect().top < window.innerHeight + 16) return false;
      return !candidates.some((parent) => parent !== element && parent.contains(element));
    });
    if (!targets.length) return;

    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => { if (entry.isIntersecting) reveal(entry.target); });
      }, { threshold: .08, rootMargin: "0px 0px -32px 0px" });
      root.classList.add("wh-motion-enabled");
      targets.forEach((element) => {
        element.classList.add("wh-motion-reveal");
        observer.observe(element);
      });
      revealHashTarget();
    } catch {
      // Progressive enhancement must never be a dependency for reading the page.
      reset();
    }
  };

  document.addEventListener("focusin", (event) => {
    if (event.target instanceof Element) reveal(event.target.closest(".wh-motion-reveal"));
  });
  window.addEventListener("hashchange", revealHashTarget);
  if (preference.addEventListener) preference.addEventListener("change", initialize);
  else if (preference.addListener) preference.addListener(initialize);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize, { once: true });
  else initialize();
})();
