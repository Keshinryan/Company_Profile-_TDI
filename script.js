new bootstrap.Carousel('#heroCarousel', {
  interval: 4000,
  ride: 'carousel',
  pause: false
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-pill-custom .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(item => item.classList.remove('active'));
      this.classList.add('active');
    });
  });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // STOP page reload
});

