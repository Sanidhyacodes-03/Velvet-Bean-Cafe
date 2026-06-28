const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.site-nav a');
const heroStage = document.getElementById('heroStage');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile Menu Toggle
if (menuToggle && header) {
  menuToggle.addEventListener('click', () => {
    const open = header.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      header.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 3D Tilt Effect for New Hero Layout
if (heroStage && !prefersReducedMotion) {
  const cards = heroStage.querySelectorAll('.hero-card');
  const mainImg = heroStage.querySelector('.hero-main-img');
  
  const applyTilt = (clientX, clientY) => {
    const rect = heroStage.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 15;
    const rotateX = (0.5 - y) * 15;

    heroStage.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Parallax effect on cards
    cards.forEach((card, index) => {
      const depth = (index + 1) * 15;
      const translateX = (x - 0.5) * depth;
      const translateY = (y - 0.5) * depth;
      card.style.transform = `translate3d(${translateX}px, ${translateY}px, ${index === 2 ? '60px' : '-30px'})`;
    });
    
    if(mainImg) {
        mainImg.style.transform = `translate3d(${(x - 0.5) * -20}px, ${(y - 0.5) * -20}px, 20px)`;
    }
  };

  const resetTilt = () => {
    heroStage.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
    cards.forEach((card, index) => {
      if(index === 0) card.style.transform = 'translateZ(-50px)';
      else if(index === 1) card.style.transform = 'translateZ(-20px)';
      else card.style.transform = 'translateZ(60px)';
    });
    if(mainImg) mainImg.style.transform = 'translateZ(20px)';
  };

  heroStage.addEventListener('mousemove', (e) => applyTilt(e.clientX, e.clientY));
  heroStage.addEventListener('mouseleave', resetTilt);
}

// Intersection Observer for Reveal Animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));

// Header Background on Scroll
window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 50) {
    header.style.background = 'rgba(22, 18, 16, 0.95)';
    header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
  } else {
    header.style.background = 'rgba(22, 18, 16, 0.85)';
    header.style.boxShadow = 'none';
  }
}, { passive: true });