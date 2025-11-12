# Data Cosmos 🌌

A cinematic, video-first website for Data Cosmos — a data engineering and analytics company. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Design Highlights

- **Dark, Immersive Theme**: Space-inspired background with soft violet and cyan gradients
- **Glassmorphism UI**: Translucent cards with backdrop blur and subtle borders
- **Cosmic Animations**: Floating particles, nebula drift, and parallax scrolling
- **Video-First Layout**: Full-width hero videos and interactive video cards
- **Cinematic Typography**: Space Grotesk for headings, Inter for body text
- **Smooth Interactions**: Framer Motion animations throughout

### Sections

1. **Hero Section** - Full-screen autoplaying video with parallax effect
2. **Video Spotlight** - Three video cards with hover-to-play and modal playback
3. **Products** - SwayAnalytic, SwaySales, and DataStream Pro with video demos
4. **Services** - 6-card grid showcasing Big Data, BI, Analytics, and more
5. **Clients** - Logo carousel of trusted partners
6. **Why Choose Us** - Value pillars and key metrics
7. **CTA Band** - Gradient call-to-action with animated background
8. **Footer** - Multi-column footer with social links

### Product Pages

Reusable product page template with:

- Hero section with looping background video
- Features grid with icons
- Benefits list with checkmarks
- Use cases showcase
- CTA and footer sections

## 🎨 Design System

### Colors

- **Background**: `#0B0F14` (cosmic-dark)
- **Text**: `#EEF2F7` (cosmic-light)
- **Accent Violet**: `#7C3AED`
- **Accent Cyan**: `#22D3EE`

### Typography

- **Headings**: Space Grotesk (400, 500, 600, 700)
- **Body**: Inter

### Components

- `Button` - Primary, secondary, and outline variants
- `GlassCard` - Glassmorphism card with optional hover effect
- `VideoCard` - Video preview with modal playback
- `VideoModal` - Fullscreen video player
- `SectionTitle` - Animated section headers
- `CosmicBackground` - Animated particle canvas

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/
│   ├── assets/          # Video files
│   ├── products/        # Product pages
│   │   ├── swayanalytic/
│   │   └── ProductPageTemplate.tsx
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Homepage
├── components/
│   ├── Button.tsx
│   ├── GlassCard.tsx
│   ├── VideoCard.tsx
│   ├── VideoModal.tsx
│   ├── SectionTitle.tsx
│   ├── HeroSection.tsx
│   ├── VideoSpotlightSection.tsx
│   ├── ProductsSection.tsx
│   ├── ServicesSection.tsx
│   ├── ClientsSection.tsx
│   ├── WhyChooseUsSection.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── CosmicBackground.tsx
└── lib/
    └── utils.ts
```

## 🎬 Videos

The project uses three main videos:

- `Data_Cosmos__Chaos_to_Clarity.mp4` - Hero video
- `SwayAnalytics__360°_Growth.mp4` - SwayAnalytic product demo
- `SaleSwayAI__Future_of_Sales_.mp4` - SwaySales product demo

Videos are stored in `src/app/assets/` and referenced via `/app/assets/`.

## 🎯 Customization

### Adding a New Product Page

1. Create a new folder in `src/app/products/[product-name]/`
2. Add a `page.tsx` file using `ProductPageTemplate`
3. Customize the props (name, tagline, features, benefits, use cases)

### Updating Colors

Edit CSS variables in `src/app/globals.css`:

```css
--color-cosmic-dark: #0b0f14;
--color-cosmic-violet: #7c3aed;
--color-cosmic-cyan: #22d3ee;
```

### Adding Animations

Use Framer Motion's `motion` components with variants defined in `globals.css`.

## 📱 Responsive Design

- **Desktop**: 1200-1440px grid, full video layouts
- **Tablet**: 2-column video grid, stacked sections
- **Mobile**: Single column, tap-to-play videos

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Space Grotesk, Inter)

## 🌐 Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

Or use the Vercel GitHub integration for automatic deployments.

## 🎨 Design Inspiration

- **Apple.com** - Clean hero layouts and product storytelling
- **Notion** - Calm minimalism and thoughtful spacing
- **Linear.app** - Smooth animations and modern aesthetics
- **Vercel** - Dark gradients and sophisticated color use
- **Midjourney** - Subtle cosmic aesthetics

## 📊 Key Features Implemented

✅ Cinematic full-screen hero with autoplaying video  
✅ Parallax scrolling effects  
✅ Interactive video cards with modal playback  
✅ Glassmorphism design system  
✅ Cosmic particle animation background  
✅ Responsive mobile-first design  
✅ Product page template system  
✅ Custom scrollbar styling  
✅ Gradient text effects  
✅ Smooth hover animations  
✅ Accessible color contrast  
✅ TypeScript type safety

## 📄 License

Private project for Data Cosmos.

## 🤝 Support

For questions or support, contact: hello@datacosmos.in
