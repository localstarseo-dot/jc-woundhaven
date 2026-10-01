(() => {
  const referral = document.querySelector('.wh-referral-choice');
  if (!referral) return;
  document.addEventListener('click', (event) => {
    if (!referral.contains(event.target)) referral.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && referral.open) {
      referral.open = false;
      referral.querySelector('summary').focus();
    }
  });
  document.addEventListener('focusin', (event) => {
    if (!referral.contains(event.target)) referral.open = false;
  });
})();
