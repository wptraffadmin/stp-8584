// Файл scroll-reveal.js
document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.phone-wrapper');

  if (wrapper) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            wrapper.classList.add('visible');
            observer.unobserve(wrapper);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(wrapper);
  }
});
