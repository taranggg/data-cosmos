# Design Tokens & Style Guide

## 🎨 Color Palette

### Primary Colors

```css
--cosmic-dark:        #0B0F14    /* Main background */
--cosmic-darker:      #070A0D    /* Alternate background */
--cosmic-light:       #EEF2F7    /* Primary text */
--cosmic-violet:      #7C3AED    /* Accent primary */
--cosmic-cyan:        #22D3EE    /* Accent secondary */
```

### Transparency Variants

```css
--cosmic-violet-glow: #7C3AEDAA  /* 66% opacity */
--cosmic-cyan-glow:   #22D3EEAA  /* 66% opacity */
```

### Usage Guidelines

**Background Colors:**

- Main sections: `bg-cosmic-dark`
- Alternate sections: `bg-cosmic-darker`
- Cards: `rgba(11, 15, 20, 0.5)` with backdrop blur

**Text Colors:**

- Primary text: `text-cosmic-light`
- Secondary text: `text-cosmic-light/70` (70% opacity)
- Muted text: `text-cosmic-light/60` (60% opacity)
- Accent text: Gradient violet → cyan

**Border Colors:**

- Subtle borders: `border-white/10` (10% opacity)
- Active borders: `border-cosmic-violet`
- Hover borders: `border-cosmic-violet/50`

## 📝 Typography

### Font Families

```css
--font-heading: "Space Grotesk", sans-serif;
--font-body: "Inter", sans-serif;
```

### Font Sizes (Desktop)

```css
Hero Title:        text-8xl    (6rem / 96px)
Section Title:     text-6xl    (3.75rem / 60px)
Card Title:        text-3xl    (1.875rem / 30px)
Subtitle:          text-2xl    (1.5rem / 24px)
Body Large:        text-xl     (1.25rem / 20px)
Body:              text-lg     (1.125rem / 18px)
Body Small:        text-base   (1rem / 16px)
Caption:           text-sm     (0.875rem / 14px)
```

### Font Sizes (Mobile)

```css
Hero Title:        text-6xl    (3.75rem / 60px)
Section Title:     text-5xl    (3rem / 48px)
Card Title:        text-2xl    (1.5rem / 24px)
Subtitle:          text-xl     (1.25rem / 20px)
Body Large:        text-lg     (1.125rem / 18px)
Body:              text-base   (1rem / 16px)
```

### Font Weights

```css
Regular:    400
Medium:     500
Semibold:   600
Bold:       700
```

### Usage

```tsx
// Headings
<h1 className="font-heading font-bold text-8xl">

// Body text
<p className="font-sans text-lg">

// Gradient text
<span className="font-heading font-bold text-gradient">
```

## 📐 Spacing System

### Padding Scale

```css
xs:   p-2    (0.5rem / 8px)
sm:   p-4    (1rem / 16px)
base: p-6    (1.5rem / 24px)
md:   p-8    (2rem / 32px)
lg:   p-12   (3rem / 48px)
xl:   p-16   (4rem / 64px)
2xl:  p-20   (5rem / 80px)
3xl:  p-24   (6rem / 96px)
```

### Section Padding

```css
Vertical:   py-32   (8rem / 128px desktop)
            py-20   (5rem / 80px mobile)
Horizontal: px-6    (1.5rem / 24px)
```

### Gap Spacing

```css
Tight:      gap-2   (0.5rem / 8px)
Normal:     gap-4   (1rem / 16px)
Relaxed:    gap-6   (1.5rem / 24px)
Loose:      gap-8   (2rem / 32px)
```

## 🔲 Border Radius

### Scale

```css
Small:      rounded-lg      (0.5rem / 8px)
Medium:     rounded-xl      (0.75rem / 12px)
Large:      rounded-2xl     (1rem / 16px)
X-Large:    rounded-3xl     (1.5rem / 24px)
Full:       rounded-full    (9999px)
```

### Usage

```css
Buttons:        rounded-2xl
Cards:          rounded-3xl
Icons:          rounded-xl or rounded-full
Inputs:         rounded-2xl
Badges:         rounded-full
```

## 🌈 Gradients

### Primary Gradient

```css
background: linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%);
```

Usage: Buttons, CTAs, accent elements

### Text Gradient

```css
background: linear-gradient(135deg, #7c3aed 0%, #22d3ee 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

Usage: Highlighted text, brand name

### Cosmic Background

```css
background: radial-gradient(
    ellipse at top,
    rgba(124, 58, 237, 0.15) 0%,
    transparent 50%
  ), radial-gradient(
    ellipse at bottom,
    rgba(34, 211, 238, 0.15) 0%,
    transparent 50%
  ), #0b0f14;
```

Usage: Section backgrounds

## 💫 Shadows

### Elevation Levels

```css
Low:        shadow-sm         /* 0 1px 2px */
Medium:     shadow-md         /* 0 4px 6px */
High:       shadow-lg         /* 0 10px 15px */
Glow:       shadow-[0_0_20px_rgba(124,58,237,0.5)]
Glass:      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
```

### Usage

```css
Cards:           shadow-lg
Glass Cards:     Custom glass shadow
Hover State:     shadow-xl
Accent Glow:     Custom violet glow
```

## 🎭 Opacity Scale

```css
Hidden:      opacity-0       (0%)
Subtle:      opacity-20      (20%)
Light:       opacity-40      (40%)
Medium:      opacity-60      (60%)
Visible:     opacity-80      (80%)
Full:        opacity-100     (100%)
```

### Common Uses

```css
Overlays:       opacity-60
Disabled:       opacity-40
Muted text:     opacity-70
Hover fade:     opacity-80 → opacity-100
```

## ⚡ Animation Timings

### Duration

```css
Fast:       150ms
Normal:     300ms
Slow:       500ms
Slower:     800ms
```

### Easing Functions

```css
Default:    cubic-bezier(0.4, 0, 0.2, 1)
In:         cubic-bezier(0.4, 0, 1, 1)
Out:        cubic-bezier(0, 0, 0.2, 1)
In-Out:     cubic-bezier(0.4, 0, 0.2, 1)
```

### Common Animations

```css
Hover Scale:    scale(1.02)   duration-300
Button Tap:     scale(0.98)   duration-150
Fade In:        opacity 0→1   duration-600
Slide In:       y: 20→0       duration-600
Parallax:       scale: 1→0.95 based on scroll
```

## 🎯 Component States

### Button States

```css
Default:    Normal appearance
Hover:      scale(1.02) + shadow increase
Active:     scale(0.98)
Disabled:   opacity-40 + cursor-not-allowed
Focus:      ring-2 ring-cosmic-violet
```

### Card States

```css
Default:    glass-card styling
Hover:      translateY(-4px) + border glow + shadow increase
Active:     scale(0.99)
```

### Link States

```css
Default:    text-cosmic-light/70
Hover:      text-cosmic-violet
Active:     text-cosmic-cyan
Visited:    No special styling (same as default)
```

## 📱 Breakpoints

```css
Mobile:     320px - 767px
Tablet:     768px - 1023px
Desktop:    1024px - 1439px
Wide:       1440px+
```

### Usage in Tailwind

```tsx
<div className="text-6xl md:text-7xl lg:text-8xl">
  // 6xl on mobile, 7xl on tablet, 8xl on desktop
</div>
```

## 🖼️ Aspect Ratios

```css
Video:      16:9        (aspect-video)
Square:     1:1         (aspect-square)
Portrait:   3:4
Landscape:  4:3
```

## ✨ Special Effects

### Glassmorphism

```css
background: rgba(11, 15, 20, 0.5);
backdrop-filter: blur(20px);
border: 1px solid rgba(238, 242, 247, 0.1);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
```

### Glow Effect

```css
box-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
```

### Neon Border

```css
border: 2px solid #7c3aed;
box-shadow: 0 0 10px rgba(124, 58, 237, 0.5), inset 0 0 10px rgba(124, 58, 237, 0.2);
```

## 🎪 Layout Containers

### Max Widths

```css
Small:      max-w-3xl    (48rem / 768px)
Medium:     max-w-5xl    (64rem / 1024px)
Large:      max-w-7xl    (80rem / 1280px)
Full:       max-w-full   (100%)
```

### Grid Systems

```css
2 Column:   grid grid-cols-1 md:grid-cols-2
3 Column:   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
4 Column:   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

## 🔧 Z-Index Scale

```css
Background:     z-0
Content:        z-10
Sticky Nav:     z-50
Modal Overlay:  z-50
Modal Content:  z-50
Particles:      z-0
```

## 📋 Usage Examples

### Glassmorphism Card

```tsx
<div className="glass-card rounded-3xl p-8">Content</div>
```

### Gradient Button

```tsx
<button className="bg-gradient-to-r from-cosmic-violet to-cosmic-cyan rounded-2xl px-8 py-4">
  Click Me
</button>
```

### Text with Gradient

```tsx
<h1 className="font-heading font-bold text-8xl">
  <span className="text-gradient">Gradient Text</span>
</h1>
```

### Cosmic Background Section

```tsx
<section className="py-32 px-6 relative overflow-hidden">
  <div className="absolute inset-0 cosmic-bg" />
  <div className="relative z-10">Content</div>
</section>
```

---

**Design System Version:** 1.0  
**Last Updated:** November 2025  
**Maintained by:** Data Cosmos Design Team
