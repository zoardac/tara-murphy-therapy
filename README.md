# Tara Murphy Therapy - Astro + Tailwind

A beautiful, nature-inspired therapy website built with Astro and Tailwind CSS.

## Features

- 🌿 Nature-inspired design with coastal PNW aesthetic
- 🎨 Custom color palette (blush, olive, gray-blue, blue-black)
- ✨ Smooth animations and subtle fog-rolling effect in hero
- 📱 Fully responsive design
- ⚡️ Fast and performant with Astro
- 🎯 Tailwind CSS for styling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts the development server at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
/
├── public/
│   └── TARA_MURPHY_THERAPY.png
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Approach.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Customization

### Colors

Colors are defined in `tailwind.config.mjs`:
- `blush`: #d4a5a5
- `blue-black`: #1a2332
- `olive`: #6b7c5d
- `gray-blue`: #7a8b9e
- `cream`: #f5f1ed
- `fog`: #e8e4df

### Fonts

The site uses Google Fonts:
- **Headings**: Cormorant Garamond
- **Body**: Quattrocento

### Content

Edit component files in `src/components/` to update:
- Services offered
- About text
- Approach methodology
- Contact information

## License

© 2026 Tara Murphy Therapy. All rights reserved.
