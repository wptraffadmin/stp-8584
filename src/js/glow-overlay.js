function createStarFall(count = 600) {
  const container = document.querySelector('.star-fall');
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    star.setAttribute('viewBox', '0 0 12 12');
    star.setAttribute('class', 'svg-star');

    const angleDeg = -140 + Math.random() * 280;
    const angle = (angleDeg * Math.PI) / 180;

    const distance = 700 + Math.random() * 500;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    const horizontalOffset = Math.random() * 120 - 10;
    star.style.left = `${horizontalOffset}%`;

    const duration = 3 + Math.random() * 4;

    star.style.setProperty('--x', `${x.toFixed(1)}px`);
    star.style.setProperty('--y', `${y.toFixed(1)}px`);
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `0s`;

    star.innerHTML = `
      <path d="M6 0 L7.5 4 H12 L8.25 6.5 L9.75 10.5 L6 8 L2.25 10.5 L3.75 6.5 L0 4 H4.5 Z" fill="#41FE1B" />
    `;

    container.appendChild(star);

    star.addEventListener('animationend', () => {
      star.remove();
    });
  }
}

let fallingStarted = false;

function startContinuousFall() {
  if (fallingStarted) return;
  fallingStarted = true;

  const intervalId = setInterval(() => {
    createStarFall(30);
  }, 500);
}

function observePhoneSection() {
  const phone = document.querySelector('.phone-wrapper');
  if (!phone) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startContinuousFall();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(phone);
}

function hoverTrigger() {
  const phone = document.querySelector('.phone-wrapper');
  if (!phone) return;

  phone.addEventListener('mouseenter', () => {
    startContinuousFall();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createStarFall();
  observePhoneSection();
  hoverTrigger();
});
