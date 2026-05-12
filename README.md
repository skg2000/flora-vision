# FloraVision

A modern plant e-commerce landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** — UI library
- **TypeScript** — type safety
- **Vite** — build tool with HMR
- **Tailwind CSS 3** — utility-first styling
- **ESLint** — linting

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm, yarn, or pnpm

## Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/flora-vision.git
cd flora-vision
```

2. **Install dependencies**

```bash
npm install
```

## Running the Project

### Development server

Starts Vite dev server with hot module replacement on `http://localhost:5173`

```bash
npm run dev
```

### Production build

Type-checks with TypeScript then bundles for production into `dist/`

```bash
npm run build
```

### Preview production build

Serves the `dist/` folder locally to verify the production build

```bash
npm run preview
```

### Lint

Runs ESLint across all source files

```bash
npm run lint
```

## Project Structure

```
flora-vision/
├── public/
├── src/
│   ├── assets/          # Images (plant photos, user avatars, hero background)
│   ├── components/
│   │   ├── Icons.tsx         # Shared SVG icon components
│   │   ├── SectionTitle.tsx  # SectionTitle + BracketTitle components
│   │   ├── Navbar.tsx
│   │   ├── HeroBanner.tsx
│   │   ├── PlantItem.tsx     # Floating product card with slide navigation
│   │   ├── TopSelling.tsx
│   │   ├── PlantCard.tsx
│   │   ├── O2Plants.tsx
│   │   ├── CustomerReviews.tsx
│   │   ├── TestimonialCard.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── plants.ts    # Plant data, O2 slides, testimonials
│   ├── types/
│   │   └── index.ts     # Plant, Testimonial, O2Slide interfaces
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── App.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```
