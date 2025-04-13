document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('accept-cookies');
  const declineBtn = document.getElementById('decline-cookies');

  const cookiesChoice = localStorage.getItem('cookieConsent');

  if (!cookiesChoice) {
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }

  function handleConsent(choice) {
    localStorage.setItem('cookieConsent', choice);
    banner.style.display = 'none';
    console.log(`[CookieBanner] Выбор пользователя: ${choice}`);
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => handleConsent('accepted'));

    acceptBtn.querySelectorAll('*').forEach(el => {
      el.addEventListener('click', () => handleConsent('accepted'));
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => handleConsent('declined'));

    declineBtn.querySelectorAll('*').forEach(el => {
      el.addEventListener('click', () => handleConsent('declined'));
    });
  }
});
