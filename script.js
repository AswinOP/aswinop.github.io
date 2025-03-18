window.addEventListener('load', () => {
  const loadingAnimation = document.querySelector('.loading-animation');
  loadingAnimation.style.transition = 'opacity 0.5s ease';
  loadingAnimation.style.opacity = '0';
  setTimeout(() => {
      loadingAnimation.style.display = 'none';
  }, 500);
});

document.getElementById('current-year').textContent = new Date().getFullYear();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const offset = 80;
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
      });

      if (navLinks.classList.contains('active')) {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
      }
  });
});

const backToTopButton = document.querySelector('.back-to-top');

backToTopButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
      backToTopButton.style.opacity = '1';
      backToTopButton.style.visibility = 'visible';
  } else {
      backToTopButton.style.opacity = '0';
      backToTopButton.style.visibility = 'hidden';
  }
});