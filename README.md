# Alex Morgan — Portfolio

A personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build step — just open `index.html`.

## Features
- Sticky nav with scroll effect
- Hero with typed animation + parallax background text
- Scrolling skill ticker
- Scroll-triggered reveal animations
- Animated skill progress bars
- Project cards (featured + standard)
- Testimonials section
- Contact form with simulated send
- Mobile responsive + hamburger menu
- Respects `prefers-reduced-motion`

## Customisation

### 1. Replace placeholder content
Edit `index.html` to update:
- Your name, location, and headline
- About text, education, and experience
- Project names, descriptions, and links
- Testimonial quotes
- Contact email and social links

### 2. Add a real photo
In `index.html`, replace the `.photo-placeholder` block with:
```html
<img src="assets/photo.jpg" alt="Your name" style="width:100%;height:100%;object-fit:cover;border-radius:200px 200px 12px 12px;" />
```
Place your photo at `assets/photo.jpg`.

### 3. Wire up the contact form
In `app.js`, replace the `setTimeout` in the form submit handler with a real API call. Options:
- [Formspree](https://formspree.io) — free, no backend needed
- [EmailJS](https://emailjs.com) — free tier available
- Your own backend endpoint

### 4. Change the colour accent
In `style.css`, update `--amber` and `--amber-dim` in `:root` to any hue you like.

## File structure
```
portfolio/
├── index.html   ← Full page markup
├── style.css    ← All styles
├── app.js       ← Interactions & animations
├── assets/      ← Place images here
└── README.md
```
