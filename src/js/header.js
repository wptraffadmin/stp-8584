const burgerOpen = document.querySelector('.burger-open');
const burgerClose = document.querySelector('.burger-close');
const modalMenu = document.querySelector('.modal-menu');
const body = document.body;

function lockScroll() {
  body.classList.add('no-scroll');
}

function unlockScroll() {
  body.classList.remove('no-scroll'); // Розблоковує скрол сторінки
}

burgerOpen.addEventListener('click', () => {
  burgerOpen.style.display = 'none';
  burgerClose.style.display = 'block';
  modalMenu.classList.add('active');
  lockScroll();
});

burgerClose.addEventListener('click', e => {
  e.stopPropagation();
  burgerClose.style.display = 'none';
  burgerOpen.style.display = 'block';
  modalMenu.classList.remove('active');
  unlockScroll();
});

modalMenu.addEventListener('click', e => {
  if (e.target === modalMenu) {
    burgerClose.style.display = 'none';
    burgerOpen.style.display = 'block';
    modalMenu.classList.remove('active');
    unlockScroll();
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 100 : 148;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});

modalMenu.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const isMobile = window.innerWidth <= 768;
      const offset = isMobile ? 100 : 148;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      burgerClose.style.display = 'none';
      burgerOpen.style.display = 'block';
      modalMenu.classList.remove('active');
      unlockScroll();
    }
  });
});
