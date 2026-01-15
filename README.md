# Portfolio Website

Modern portfolio website for Maksim Alesiayuk, Full-Stack Developer.

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Typed JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Icons for UI

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the dev server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio-app/
├── app/
│   ├── layout.tsx      # Main layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation menu
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills and technologies
│   ├── Projects.tsx    # Projects section
│   └── Contact.tsx     # Contact section
└── package.json
```

## Production Build

```bash
npm run build
npm start
```

## Deployment

The site can be deployed on:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any other hosting that supports Node.js
