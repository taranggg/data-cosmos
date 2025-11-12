# Deployment Guide - Data Cosmos

## Pre-Deployment Checklist

- [ ] All videos are optimized (compressed, web-friendly formats)
- [ ] Environment variables configured
- [ ] Build succeeds locally (`npm run build`)
- [ ] All TypeScript errors resolved
- [ ] Mobile responsiveness tested
- [ ] SEO metadata added
- [ ] Analytics tracking configured (if applicable)
- [ ] Performance audit completed (Lighthouse)

## Vercel Deployment (Recommended)

### Option 1: GitHub Integration (Automatic)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit - Data Cosmos website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Configure Domain**
   - Go to project settings
   - Add custom domain (e.g., datacosmos.com)
   - Update DNS records as instructed

### Option 2: Vercel CLI (Manual)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Performance Optimization

### 1. Video Optimization

```bash
# Compress videos with ffmpeg
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M output.mp4
```

### 2. Image Optimization

- Use Next.js `<Image>` component
- Serve images in WebP format
- Add proper `width` and `height` attributes

### 3. Code Splitting

- Already handled by Next.js
- Consider dynamic imports for heavy components:

```tsx
import dynamic from "next/dynamic";
const HeavyComponent = dynamic(() => import("./HeavyComponent"));
```

### 4. Caching Strategy

```typescript
// next.config.ts
export default {
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};
```

## Environment Variables

Create `.env.local` for local development:

```env
# Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Contact Form (if applicable)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint
```

## SEO Configuration

Update `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Data Cosmos - Your Universe of Unlimited Data Possibilities",
  description:
    "We build cohesive, integrated data ecosystems that turn chaos into clarity.",
  keywords: ["data engineering", "analytics", "big data", "BI"],
  openGraph: {
    title: "Data Cosmos",
    description: "Your Universe of Unlimited Data Possibilities",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Cosmos",
    description: "Your Universe of Unlimited Data Possibilities",
    images: ["/twitter-image.jpg"],
  },
};
```

## Monitoring & Analytics

### 1. Vercel Analytics

```bash
npm i @vercel/analytics
```

Add to `layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Performance Monitoring

- Use Vercel Speed Insights
- Monitor Core Web Vitals
- Set up Lighthouse CI

## Post-Deployment

### 1. Test Everything

- [ ] Homepage loads correctly
- [ ] All videos play
- [ ] Navigation works
- [ ] Forms submit (if applicable)
- [ ] Mobile responsiveness
- [ ] Different browsers (Chrome, Safari, Firefox)

### 2. Performance Check

```bash
# Run Lighthouse audit
npm install -g lighthouse
lighthouse https://datacosmos.com --view
```

### 3. Set Up Monitoring

- Vercel Analytics
- Google Search Console
- Uptime monitoring (e.g., UptimeRobot)

## Troubleshooting

### Videos Not Playing

- Ensure videos are in H.264 codec
- Check file paths are correct
- Verify MIME types are set correctly

### Build Failures

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Slow Load Times

- Compress videos further
- Enable lazy loading for below-fold content
- Consider using a CDN for video hosting

## Backup & Rollback

Vercel automatically keeps deployment history:

- View all deployments in Vercel dashboard
- Instantly rollback to previous version
- Download deployment artifacts

## Custom Domain Setup

1. **Add Domain in Vercel**

   - Project Settings → Domains
   - Add your domain

2. **Update DNS Records**

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for Propagation** (up to 48 hours)

4. **Verify SSL** (automatic with Vercel)

## Continuous Deployment

Every push to `main` branch automatically deploys to production:

```bash
git add .
git commit -m "Update hero video"
git push origin main
# Vercel automatically deploys
```

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Contact: hello@datacosmos.in
