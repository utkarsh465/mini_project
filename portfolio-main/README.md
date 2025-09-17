# Shashank Shekhar — Portfolio

Single-page, responsive portfolio replicating the requested design and features: gradient layout, smooth-scrolling navigation, sections (Hero, About, Skills, Experience, Projects, Education, Services, Contact), hover animations, mobile nav, resume download, and a validated contact form.

## Quick Start

1. Open `index.html` in your browser (double-click or serve with any static server).
2. Add your resume PDF to `assets/resume/Shashank_Shekhar_Resume.pdf`.
3. Update profile text, skills, and projects inline in `index.html`.

## Contact Form (Working Setup)

The form is wired to work with Formspree. To enable:

1. Create a free form at Formspree.
2. Replace the `data-endpoint` on the `<form id="contact-form">` in `index.html` with your form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Deploy or open `index.html` locally and test the form. You should see success messaging on 200 OK responses.

If you prefer another service (e.g., Getform), set that URL in `data-endpoint` instead.

## Customization

- Colors, fonts, and spacing are defined in `styles.css`.
- Interactive behaviors (smooth scroll, mobile menu, contact form) are in `script.js`.
- Replace placeholder project details in the Projects section.

## File Structure

```
index.html
styles.css
script.js
assets/
  resume/
    Shashank_Shekhar_Resume.pdf  (add your file here)
```

## Notes

- Smooth scroll accounts for the sticky header height.
- Mobile menu collapses after selecting a link.
- Contact form includes basic client-side validation and displays success/error messages.


# portfolio
