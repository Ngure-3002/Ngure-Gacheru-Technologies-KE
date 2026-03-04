// script.js - Intersection Observer for scroll animations & dynamic year

// 1. UPDATE COPYRIGHT YEAR
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// 2. INTERSECTION OBSERVER — FADE-IN ON SCROLL
const animateElements = document.querySelectorAll('.animate-on-view');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // optional: unobserve after first show to reduce load
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,        // 20% visible triggers
  rootMargin: '0px 0px -30px 0px' // fine-tune offset
});

animateElements.forEach(el => observer.observe(el));

// 3. ADD A TINY HOVER GLOW EFFECT TO CARDS (optional extra)
const cards = document.querySelectorAll('.service-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', (e) => {
    // already in CSS, but we can log nothing
  });
});

// 4. SMOOTH SCROLL FOR INTERNAL LINKS (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});