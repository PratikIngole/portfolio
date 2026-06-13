/* ── Skyline Portfolio — app.js ─────────────────────────────── */

/* Nav scroll effect */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* Mobile menu */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
document.querySelectorAll('.mm-link').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Reveal on scroll ────────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* ── Skill bars — animate when in view ──────────────────────── */
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar').forEach(bar => {
        const pct = bar.dataset.pct;
        bar.querySelector('.bar-fill').style.width = pct + '%';
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-grid').forEach(el => skillBarObserver.observe(el));

/* ── Active nav link on scroll ───────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeLinkObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--cream)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => activeLinkObserver.observe(s));

/* ── Contact form ────────────────────────────────────────────── */
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  btn.textContent = 'Sending…';
  btn.disabled = true;

  /* Simulate async send (replace with real fetch/emailjs/formspree) */
  setTimeout(() => {
    form.reset();
    btn.classList.add('hidden');
    formSuccess.classList.remove('hidden');
  }, 1200);
});

/* ── Smooth scroll for anchor links ─────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Subtle hero parallax ────────────────────────────────────── */
const bgText = document.querySelector('.hero-bg-text');
if (bgText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    bgText.style.transform = `translateY(calc(-50% + ${y * 0.18}px))`;
  }, { passive: true });
}

/* ── Typed headline effect (optional flair) ──────────────────── */
(function () {
  const phrases = ['matter.', 'last.', 'scale.', 'work.'];
  const target = document.querySelector('.underline-amber');
  if (!target) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let pi = 0, ci = 0, deleting = false, paused = false;

  function type() {
    const word = phrases[pi];
    if (paused) { setTimeout(type, 1800); paused = false; return; }

    if (!deleting) {
      target.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) { deleting = true; paused = true; setTimeout(type, 50); return; }
    } else {
      target.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 55 : 110);
  }

  setTimeout(type, 2200);
})();
