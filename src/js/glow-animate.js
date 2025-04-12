function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

function animateStars() {
  const stars = document.querySelectorAll('.glow-svg path');
  stars.forEach((star, i) => {
    setTimeout(() => {
      star.classList.add('animate');
    }, i * 100); // задержка между анимациями
  });
}

let hasAnimated = false;

window.addEventListener('scroll', () => {
  const phone = document.querySelector('.phone-wrapper');
  if (!hasAnimated && phone && isInViewport(phone)) {
    hasAnimated = true;
    animateStars();
  }
});
