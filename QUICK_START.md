# Quick Start Guide - Data Cosmos

Get your Data Cosmos website up and running in 5 minutes.

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- A code editor (VS Code recommended)

## Installation

### Step 1: Install Dependencies

```bash
npm install
```

This installs all required packages including Next.js, React, Framer Motion, and Tailwind CSS.

### Step 2: Start Development Server

```bash
npm run dev
```

Your site will be available at `http://localhost:3000`

## 🎬 Adding Your Videos

1. Place your video files in `src/app/assets/`
2. Update video references in components:

**Hero Section** (`src/components/HeroSection.tsx`):

```tsx
<video src="/app/assets/Your_Hero_Video.mp4" />
```

**Product Videos** (`src/components/ProductsSection.tsx`):

```tsx
videoSrc: "/app/assets/Your_Product_Video.mp4";
```

### Video Requirements

- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 or 1280x720
- File size: Keep under 10MB for best performance
- Bitrate: 2-4 Mbps recommended

## 🎨 Customizing Content

### Update Homepage Text

**Hero Section** (`src/components/HeroSection.tsx`):

```tsx
<h1>Your Universe of <span>Unlimited Data</span> Possibilities</h1>
<p>We build cohesive, integrated data ecosystems...</p>
```

**Products** (`src/components/ProductsSection.tsx`):

```tsx
{
  name: 'Your Product Name',
  tagline: 'Your product tagline',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
}
```

### Update Colors

Edit `src/app/globals.css`:

```css
--color-cosmic-violet: #7c3aed; /* Change this */
--color-cosmic-cyan: #22d3ee; /* Change this */
```

### Update Company Info

**Footer** (`src/components/Footer.tsx`):

```tsx
// Update links, social media, copyright
```

**Layout** (`src/app/layout.tsx`):

```tsx
export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your description",
};
```

## 🚀 Building for Production

### Build the site

```bash
npm run build
```

### Test production build locally

```bash
npm start
```

Your site will be at `http://localhost:3000`

## 📤 Deploy to Vercel

### Option 1: Automatic (Recommended)

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Manual

```bash
npm i -g vercel
vercel
```

## 🔍 Common Tasks

### Add a New Product Page

1. Create folder: `src/app/products/your-product/`
2. Create file: `page.tsx`
3. Use template:

```tsx
import ProductPageTemplate from '../ProductPageTemplate';

export default function YourProductPage() {
  return (
    <ProductPageTemplate
      name="Your Product"
      tagline="Product tagline"
      description="Full description"
      videoSrc="/app/assets/your-video.mp4"
      features={[...]}
      benefits={[...]}
      useCases={[...]}
    />
  );
}
```

### Add a New Section to Homepage

1. Create component in `src/components/YourSection.tsx`
2. Import in `src/app/page.tsx`:

```tsx
import YourSection from "@/components/YourSection";
```

3. Add to page:

```tsx
<YourSection />
```

### Change Navigation Links

Edit `src/components/Navigation.tsx`:

```tsx
const navLinks = [
  { name: "Your Link", href: "#section" },
  // Add more...
];
```

## 🎨 Using Components

### Button

```tsx
import Button from '@/components/Button';

<Button variant="primary">Click Me</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="outline">Contact</Button>
```

### Glass Card

```tsx
import GlassCard from "@/components/GlassCard";

<GlassCard hover={true} delay={0.2}>
  <h3>Card Title</h3>
  <p>Card content</p>
</GlassCard>;
```

### Video Card

```tsx
import VideoCard from "@/components/VideoCard";

<VideoCard
  title="Demo Video"
  description="Watch our demo"
  videoSrc="/app/assets/demo.mp4"
/>;
```

## 📱 Testing

### Test Responsiveness

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test on different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1440px, 1920px

### Test Videos

- Check autoplay works
- Verify hover-to-play on video cards
- Test modal fullscreen playback
- Check mobile tap-to-play

### Test Animations

- Scroll through entire page
- Check all fade-in animations
- Verify hover effects
- Test navigation menu

## 🐛 Troubleshooting

### Videos not playing

- Check file paths are correct
- Ensure videos are in MP4 format
- Verify files exist in `src/app/assets/`

### Build errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Styles not updating

```bash
# Restart dev server
# Press Ctrl+C, then:
npm run dev
```

### Components not found

- Check import paths use `@/components/`
- Verify file names match exactly (case-sensitive)

## 📚 Documentation

For detailed guides, see:

- `DOCUMENTATION.md` - Full project documentation
- `COMPONENTS.md` - Component library reference
- `DEPLOYMENT.md` - Deployment guide
- `DESIGN_TOKENS.md` - Design system
- `MOBILE_GUIDE.md` - Mobile optimization

## 🎯 Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. 🔄 Replace placeholder videos
4. 🔄 Update text content
5. 🔄 Customize colors (optional)
6. 🔄 Add your logo
7. 🔄 Update contact info
8. 🔄 Test on mobile
9. 🔄 Build for production
10. 🔄 Deploy to Vercel

## 💡 Tips

- Use browser DevTools to inspect elements
- Check `COMPONENTS.md` for component examples
- Videos should be under 10MB for fast loading
- Test on real mobile devices before launch
- Use Vercel's preview deployments to test changes

## 📞 Need Help?

- Check documentation files in the root folder
- Read inline comments in component files
- Contact: hello@datacosmos.in

---

**You're all set!** 🚀 Start customizing your Data Cosmos website.
