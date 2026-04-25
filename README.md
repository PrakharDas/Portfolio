# Prakhar Das Portfolio

A premium, modern, fully responsive personal portfolio website for **Prakhar Das**, built with React, Tailwind CSS, Framer Motion, and React Icons. The design uses a dark elegant visual style with glassmorphism, smooth gradients, subtle glow effects, and polished motion to create a recruiter-friendly first impression.

## Live Experience

This portfolio is designed to showcase Prakhar Das as a:

- Full-Stack Developer
- Flutter Developer
- IoT Engineer
- React Developer
- Problem Solver

It presents professional highlights, internship experience, technical skills, projects, education, activities, and contact details in a clean single-page flow.

## Features

- Sticky transparent navbar with blur effect
- Fullscreen hero section with animated typing text
- About section with highlight cards
- Animated skills cards with progress bars and icons
- Timeline-style experience section
- Premium project cards with hover tilt effects
- Education cards with clean spacing
- Leadership and activities section
- Glassmorphism contact form with direct email flow
- Social links for GitHub, LinkedIn, and email
- Scroll progress bar
- Back to top button
- Smooth scrolling
- Responsive design for mobile, tablet, and desktop
- SEO-friendly metadata
- Dark theme with cyan, blue, and purple accents
- Reusable component structure
- Fast production build

## Tech Stack

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- ESLint

## Project Structure

```bash
src/
  assets/
    portfolioData.js
  components/
    AboutSection.jsx
    ActivitiesSection.jsx
    BackToTop.jsx
    BackgroundEffects.jsx
    ContactSection.jsx
    EducationSection.jsx
    ExperienceSection.jsx
    Footer.jsx
    GlowButton.jsx
    HeroSection.jsx
    MotionSection.jsx
    Navbar.jsx
    ProjectsSection.jsx
    ScrollProgress.jsx
    SectionHeading.jsx
    SkillsSection.jsx
    TypingRole.jsx
  pages/
    HomePage.jsx
  App.jsx
  index.css
  main.jsx
```

## Sections Included

### Navbar
A transparent sticky navigation bar with blur, mobile menu animation, and a resume download button.

### Hero
A fullscreen introduction with animated typing roles, CTA buttons, and a modern developer card.

### About Me
A short profile summary and highlight cards for internship experience, real projects, full-stack skills, and IoT + AI integration.

### Skills
Animated skill cards grouped by frontend, backend, database, languages, tools, and other technologies.

### Experience
A timeline-style internship section for Arthasva with role details and contribution bullets.

### Projects
Premium project cards for:

- MedDrip - Intelligent Saline Monitoring System
- ParkEase - Smart Car Parking System
- Hawkeye - Drone Detection System

### Education
Academic cards for:

- St. John College of Engineering and Management
- Chinmaya Vidyalaya Tarapur

### Achievements / Activities
Leadership and go-kart competition details.

### Contact
A glassmorphism contact form plus direct contact details and social links.

### Footer
A minimal closing footer with copyright.

## Contact Details

- Email: prakhardas48@gmail.com
- Location: Boisar, Maharashtra
- GitHub: github.com/PrakharDas
- LinkedIn: linkedin.com/in/prakhardas48

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

### 5. Run lint checks

```bash
npm run lint
```

## Customization Guide

### Update content
Most portfolio content is stored in:

- [src/assets/portfolioData.js](src/assets/portfolioData.js)

Edit that file to change:

- navigation links
- hero roles
- about highlights
- skills
- experience
- projects
- education
- activities
- contact details

### Update sections
Each section is separated into reusable components inside:

- [src/components](src/components)

### Update styling
Global theme and utility classes live in:

- [src/index.css](src/index.css)
- [tailwind.config.js](tailwind.config.js)

## SEO and Performance

The app includes:

- descriptive page title
- metadata description
- Open Graph tags
- theme color
- smooth scroll behavior
- reduced-motion support
- production-ready Vite build output

## Resume Download

The navbar includes a resume download action linked to:

- [src/assets/Prakhar_Das_Resume.pdf](src/assets/Prakhar_Das_Resume.pdf)

## Notes

- The contact form currently opens the default email client using a `mailto:` flow.
- Project demo links can be added later when live deployments are available.
- The site is already structured for easy expansion into a multi-page portfolio if needed.

## License

This project is intended for personal portfolio use.
