# Data Cosmos

## How to Fork & Run Locally

1. **Fork this repository** on GitHub to your own account.
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/<your-username>/data-cosmos.git
   cd data-cosmos
   ```
3. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
5. **Open [http://localhost:3000](http://localhost:3000)** in your browser to view the app.

---

## Project Overview

Data Cosmos is a modern Next.js web application designed to showcase data products, platforms, and interactive video demos. It features:

- **Next.js 16 (App Router)** for fast, scalable React development
- **Tailwind CSS** for utility-first, responsive styling
- **Framer Motion** for smooth animations and interactive effects
- **Lucide React Icons** for beautiful iconography
- **Glassmorphism UI** for cards, video overlays, and modals
- **Product Section** with expandable cards and detail views
- **Video Spotlight Section** with focus cards, hover-to-play, and modal playback
- **Footer** with smooth-scroll navigation, company info, and logo
- **Custom hooks** for mobile detection, toasts, and outside click handling
- **Reusable UI components** (buttons, tooltips, ripple effects, etc.)
- **Asset management** for videos and thumbnails in the `public/` directory

## File Structure

- `src/app/` — Main app entry, global styles, assets
- `src/components/` — All React components (Footer, Navigation, ProductsSection, VideoCard, etc.)
- `src/components/ui/` — UI primitives and effects
- `src/components/hooks/` — Custom React hooks
- `src/components/lib/` — Utility functions
- `public/` — Static assets (videos, images, thumbnails)

## Key Features

- **Product Cards**: Expandable, animated cards for each product/platform
- **Video Cards**: Hover to play, modal for focused viewing, only one video plays at a time
- **Responsive Design**: Works on desktop and mobile
- **Smooth Scroll Navigation**: Footer and navbar links scroll to sections with highlight
- **Glassmorphism Effects**: Used throughout for modern look
- **Accessibility**: Focus management and keyboard navigation

## Customization

- Add new products in `ProductsSection.tsx`
- Add new videos in `VideoSpotlightSection.tsx` and place assets in `public/videos/`
- Update branding/logo in `Footer.tsx` and `Navigation.tsx`
- Tweak styles via Tailwind classes in component files

## Technologies Used

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
