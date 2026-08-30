# Ashford Academy — School Website

A simple, modern, and classy static website for a fictional K–12 school, built with plain HTML, CSS, and JavaScript — no frameworks or build step required.

## Pages

- `index.html` — Home: hero, key stats, programs, why-us, events, and calls to action
- `about.html` — Mission, values, history timeline, and leadership
- `academics.html` — Lower/Middle/Upper School curricula and signature programs
- `admissions.html` — Application steps, tuition table, and FAQ
- `contact.html` — Contact form (demo only) and visit information

## Structure

```
├── index.html
├── about.html
├── academics.html
├── admissions.html
├── contact.html
├── css/styles.css   # Shared design system (colors, typography, components)
└── js/main.js       # Mobile nav, active-link highlighting, scroll-reveal, demo form
```

## Running locally

It's a static site — open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Design notes

- **Typography:** Fraunces (serif, headings) + Inter (sans, body) via Google Fonts, with system fallbacks
- **Palette:** deep forest green (`#1b3a2d`), warm cream (`#faf7f2`), and gold (`#c9a227`)
- **Responsive:** mobile navigation drawer and fluid grids down to small screens
- **Accessible:** semantic landmarks, reduced-motion support, ARIA labels on interactive controls

All school details (name, people, dates, tuition) are fictional placeholders — replace them with your school's real content.
