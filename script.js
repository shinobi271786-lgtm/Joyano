document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar on Scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('py-6');
        navbar.classList.add('py-4');
      } else {
        navbar.classList.remove('scrolled');
        navbar.classList.add('py-6');
        navbar.classList.remove('py-4');
      }
    });
  }

  // Mobile Navigation Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Active Navigation Highlight
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath || link.getAttribute('href') === currentPath.split('/').pop()) {
      link.classList.add('active');
    } else if (currentPath === '/' && link.getAttribute('href') === 'index.html') {
      link.classList.add('active');
    }
  });

  // Scroll Reveal Animations
  const fadeElements = document.querySelectorAll('.fade-in');
  const revealElements = () => {
    const windowHeight = window.innerHeight;
    fadeElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealElements);
  revealElements(); // Initial check
});
