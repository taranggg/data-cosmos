# Mobile Responsiveness Guide

## Viewport Breakpoints

```css
/* Mobile: 320px - 767px */
/* Tablet: 768px - 1023px */
/* Desktop: 1024px+ */
```

## Key Mobile Optimizations

### 1. Touch-Friendly Interactions

- All buttons have minimum 44x44px touch targets
- Video cards trigger on tap instead of hover
- Modal close buttons are 44x44px for easy tapping

### 2. Video Handling

- Videos autoplay on mobile (muted)
- Poster images shown until interaction
- Tap-to-play for video cards
- Videos load with `playsInline` attribute

### 3. Typography Scaling

```
Hero Title:
- Mobile: text-6xl (3.75rem)
- Tablet: text-7xl (4.5rem)
- Desktop: text-8xl (6rem)

Body Text:
- Mobile: text-base (1rem)
- Desktop: text-lg (1.125rem)
```

### 4. Layout Adjustments

- Hero section: Full viewport height on all devices
- Video grid: 1 column mobile, 2 columns tablet, 3 columns desktop
- Products: 1 column mobile, 3 columns desktop
- Services: 1 column mobile, 2 columns tablet, 3 columns desktop

### 5. Navigation

- Desktop: Horizontal nav with inline links
- Mobile: Hamburger menu with slide-down panel
- Fixed navigation with backdrop blur

### 6. Performance

- Videos lazy load below the fold
- Images use Next.js Image optimization
- Animations reduced on mobile if `prefers-reduced-motion`

## Testing Checklist

- [ ] Test on iPhone SE (375px width)
- [ ] Test on iPhone 14 Pro (430px width)
- [ ] Test on iPad (768px width)
- [ ] Test on iPad Pro (1024px width)
- [ ] Verify video playback on iOS Safari
- [ ] Check touch interactions (tap, scroll, swipe)
- [ ] Test with slow 3G connection
- [ ] Verify text readability at all sizes
- [ ] Check CTA buttons are easily tappable
- [ ] Ensure modal close buttons are accessible

## Common Issues & Fixes

### Video Autoplay on iOS

```tsx
<video
  autoPlay
  muted
  playsInline  // Required for iOS
  loop
>
```

### Prevent Horizontal Scroll

```css
html,
body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

### Safe Area for Notched Devices

```css
padding: env(safe-area-inset-top) env(safe-area-inset-right) env(
    safe-area-inset-bottom
  ) env(safe-area-inset-left);
```

### Touch Optimization

```css
/* Remove tap highlight on mobile */
-webkit-tap-highlight-color: transparent;

/* Improve scroll performance */
-webkit-overflow-scrolling: touch;
```
