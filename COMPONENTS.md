# Component Library - Data Cosmos

## Design System Components

### 1. Button

Primary call-to-action button with gradient background.

```tsx
import Button from '@/components/Button';

// Primary variant
<Button variant="primary" onClick={handleClick}>
  Get Started
</Button>

// Secondary variant
<Button variant="secondary">
  Learn More
</Button>

// Outline variant
<Button variant="outline">
  Contact Us
</Button>
```

**Variants:**

- `primary` - Gradient violet-to-cyan background
- `secondary` - Glass effect with border
- `outline` - Transparent with violet border

### 2. GlassCard

Glassmorphism card with backdrop blur.

```tsx
import GlassCard from "@/components/GlassCard";

<GlassCard hover={true} delay={0.2}>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</GlassCard>;
```

**Props:**

- `hover` (boolean) - Enable hover lift effect
- `delay` (number) - Animation delay in seconds
- `className` (string) - Additional CSS classes

### 3. VideoCard

Interactive video preview with modal playback.

```tsx
import VideoCard from "@/components/VideoCard";

<VideoCard
  title="Product Demo"
  description="Watch our latest features"
  videoSrc="/app/assets/demo-video.mp4"
  posterSrc="/posters/demo-poster.jpg"
  delay={0.3}
/>;
```

**Features:**

- Hover-to-play preview
- Smooth animations
- Modal fullscreen playback
- Gradient overlay

### 4. VideoModal

Fullscreen video player modal.

```tsx
import VideoModal from "@/components/VideoModal";
import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<VideoModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  videoSrc="/app/assets/video.mp4"
  title="Product Demo"
/>;
```

**Features:**

- Click outside to close
- ESC key support (via body overflow)
- Smooth enter/exit animations
- Video controls

### 5. SectionTitle

Animated section heading.

```tsx
import SectionTitle from "@/components/SectionTitle";

<SectionTitle subtitle="Optional subtitle text" align="center">
  Section Title
</SectionTitle>;
```

**Props:**

- `subtitle` (string) - Optional subtitle
- `align` ('left' | 'center') - Text alignment

### 6. Navigation

Responsive navigation bar with mobile menu.

```tsx
import Navigation from "@/components/Navigation";

<Navigation />;
```

**Features:**

- Sticky header with backdrop blur
- Hamburger menu on mobile
- Smooth dropdown animation
- Active state indicators

### 7. CosmicBackground

Animated particle canvas background.

```tsx
import CosmicBackground from "@/components/CosmicBackground";

<CosmicBackground />;
```

**Features:**

- 100 floating particles
- Canvas-based rendering
- Auto-responsive to window size
- Low performance impact

## Section Components

### HeroSection

Full-screen hero with video background.

```tsx
import HeroSection from "@/components/HeroSection";

<HeroSection />;
```

**Features:**

- Autoplaying background video
- Parallax scroll effect
- Animated content
- Scroll indicator

### VideoSpotlightSection

Grid of video previews.

```tsx
import VideoSpotlightSection from "@/components/VideoSpotlightSection";

<VideoSpotlightSection />;
```

**Features:**

- 3-column grid (responsive)
- Hover-to-play videos
- Modal playback
- Staggered animations

### ProductsSection

Product showcase with video demos.

```tsx
import ProductsSection from "@/components/ProductsSection";

<ProductsSection />;
```

**Features:**

- Product cards with videos
- Feature lists with checkmarks
- CTA buttons
- Responsive 3-column layout

### ServicesSection

Services grid with icons.

```tsx
import ServicesSection from "@/components/ServicesSection";

<ServicesSection />;
```

**Features:**

- 6-card grid
- Icon animations
- Hover effects
- Responsive layout

### ClientsSection

Client logo carousel.

```tsx
import ClientsSection from "@/components/ClientsSection";

<ClientsSection />;
```

**Features:**

- Logo grid
- Hover animations
- Monochrome styling
- Responsive layout

### WhyChooseUsSection

Value proposition and metrics.

```tsx
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

<WhyChooseUsSection />;
```

**Features:**

- Two-column layout
- Value pillars with icons
- Metric tiles with animations
- Responsive stacking

### CTASection

Call-to-action band with gradient.

```tsx
import CTASection from "@/components/CTASection";

<CTASection />;
```

**Features:**

- Gradient background
- Animated nebula effect
- Multiple CTAs
- Responsive layout

### Footer

Multi-column footer with links.

```tsx
import Footer from "@/components/Footer";

<Footer />;
```

**Features:**

- 4-column layout
- Social media icons
- Copyright notice
- Gradient divider

## Product Page Template

Reusable template for product pages.

```tsx
import ProductPageTemplate from "@/app/products/ProductPageTemplate";

<ProductPageTemplate
  name="Product Name"
  tagline="Product tagline"
  description="Detailed description"
  videoSrc="/app/assets/product-video.mp4"
  features={[
    {
      title: "Feature 1",
      description: "Feature description",
      icon: "🚀",
    },
  ]}
  benefits={["Benefit 1", "Benefit 2"]}
  useCases={[
    {
      title: "Use Case 1",
      description: "Use case description",
    },
  ]}
/>;
```

## Custom Animations

### Fade In

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Stagger Children

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  variants={{
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }}
>
  {items.map((item, i) => (
    <motion.div
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Parallax Scroll

```tsx
import { useScroll, useTransform } from "framer-motion";

const { scrollYProgress } = useScroll();
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

<motion.div style={{ opacity, scale }}>Content</motion.div>;
```

## CSS Utilities

### Glassmorphism

```css
.glass-card {
  background: rgba(11, 15, 20, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(238, 242, 247, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### Text Gradient

```css
.text-gradient {
  background: linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Cosmic Gradient

```css
.cosmic-gradient {
  background: linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%);
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}
```

### Accent Glow

```css
.accent-glow {
  box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}
```

## Accessibility

All components include:

- Proper semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Screen reader support
- Color contrast compliance (WCAG AA)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari 14+
- Chrome Mobile 90+
