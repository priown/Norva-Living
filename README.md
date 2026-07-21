# Norva Living — Furniture E-Commerce Landing Page

A fully responsive landing page for **Norva Living**, a fictional modern furniture and home decor brand. Built to practice hand-written CSS layout, scroll-based animation, and interactive UI without any CSS framework.

🔗 **Live Demo:** [priown.github.io/Norva-Living](https://priown.github.io/Norva-Living/)

## Overview

This project recreates the look and feel of a modern furniture brand’s homepage — scrolling promo bar, sticky nav with mobile hamburger menu, hero banners, alternating feature sections, an infinite marquee strip, and a detailed footer with a working subscribe interaction.

## Features

- **Scrolling utility bar** with rotating promo messages
- **Responsive navbar** with logo, anchor-linked nav, icons, and a mobile hamburger toggle
- **Hero section** with full-width image and CTA button that smooth-scrolls to featured products
- **Alternating feature blocks** (image/text, text/image) showcasing products
- **Infinite marquee strip** cycling through brand taglines
- **Scroll-triggered fade-in animations** using the Intersection Observer API
- **Interactive subscribe button** that updates its label and color on click
- **Multi-column footer** with brand info, nav links, philosophy blurb, and social icons
- Fully responsive, mobile-first layout

## Tech Stack

- **HTML5** — semantic page structure
- **CSS3** — custom stylesheet (no framework), responsive layout, animations
- **Vanilla JavaScript** — hamburger menu toggle, smooth scroll, Intersection Observer for fade-ins, subscribe button interaction

## Project Structure

```
Norva-Living/
├── index.html                      # Main landing page
├── style.css                       # All page styling
├── script.js                       # Interactivity (nav, scroll, animations)
├── dizayn03.jpg                    # Hero image
├── chair.jpg                       # Feature image
├── ceramicvase.jpg                 # Feature image
├── banniere_hero_169__32_.png      # Secondary hero banner
└── i.webp                          # Additional image asset
```

## Getting Started

No build tools or dependencies required.

1. Clone the repo
   
   ```bash
   git clone https://github.com/priown/Norva-Living.git
   ```
1. Open `index.html` directly in your browser, or serve it locally:
   
   ```bash
   npx serve .
   ```

## What I Practiced

- Writing layout and responsive behavior in plain CSS instead of a utility framework
- Using the Intersection Observer API to trigger scroll animations
- Building a CSS marquee effect for continuous scrolling content
- Wiring up basic JS interactions (mobile menu toggle, smooth scroll, button state change)
- Structuring a multi-section e-commerce landing page

## Author

**Promise** ([@priown](https://github.com/priown)) — Self-taught frontend developer, building toward entry-level frontend roles and freelance work.
