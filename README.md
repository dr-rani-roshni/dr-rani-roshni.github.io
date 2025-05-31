# Wellness with Dr. Rani 🌱

A modern, mobile-first wellness website built with Next.js featuring holistic health coaching, functional fitness, and mindful nutrition guidance.

## ✨ Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layouts
- **Professional Animations**: Smooth fade-in effects, floating particles, and gradient animations
- **Modern UI/UX**: Clean design with wellness-focused color palette
- **Static Site Generation**: Fast loading with Next.js static export
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with reduced motion support

## 🎨 Design Language

- **Color Palette**: Wellness greens, soft blues, and warm neutrals
- **Typography**: Inter font family for modern readability
- **Animations**: Professional cubic-bezier easing with mobile optimization
- **Components**: Reusable wellness cards with gradient backgrounds

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build static export
npm run build

# Files will be generated in the 'out' directory
```

## 📦 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in Repository Settings**:
   - Go to repository Settings > Pages
   - Source: "GitHub Actions"
   - Save the configuration

2. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Deploy wellness website"
   git push origin main
   ```

3. **Automatic Deployment**:
   - GitHub Actions will automatically build and deploy
   - Site will be available at: `https://[username].github.io/rani-wellness-website`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the 'out' folder to your hosting provider
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS variables
- **Animations**: CSS animations with Intersection Observer
- **Icons**: Unicode emojis and custom SVG illustrations
- **Deployment**: GitHub Pages with GitHub Actions

## 📱 Pages

- **Homepage**: Hero section, services, statistics, testimonials
- **About**: Dr. Rani's background, philosophy, and expertise
- **Blog**: Wellness articles and evidence-based tips
- **Contact**: Contact form and information
- **404 Error**: Custom error page with helpful navigation

## 🎯 Performance Features

- **Static Export**: Fast loading with pre-rendered pages
- **Image Optimization**: Next.js Image component (unoptimized for static export)
- **CSS Optimization**: Efficient custom CSS with mobile-first approach
- **Animation Performance**: Hardware-accelerated animations with will-change
- **Reduced Motion**: Accessibility support for motion-sensitive users

## 🔧 Configuration

### Next.js Config
```javascript
{
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: '/rani-wellness-website',
  basePath: '/rani-wellness-website'
}
```

### CSS Variables
```css
--wellness-green: #7fb069
--wellness-blue: #87ceeb
--wellness-mint: #d4f1d4
--wellness-sage: #a8c09a
```

## 📁 Project Structure

```
rani-wellness/
├── src/app/
│   ├── page.tsx          # Homepage
│   ├── about/page.tsx    # About page
│   ├── blog/page.tsx     # Blog listing
│   ├── contact/page.tsx  # Contact form
│   ├── not-found.tsx     # 404 error page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── useScrollFadeIn.tsx # Animation hook
├── public/
│   ├── hero-wellness.svg # Hero illustration
│   ├── wellness-icon-*.svg # Service icons
│   └── .nojekyll         # GitHub Pages config
├── .github/workflows/
│   └── deploy.yml        # GitHub Actions deployment
└── next.config.js        # Next.js configuration
```

## 🌟 Key Components

### Navigation
- Professional logo with gradient design
- Mobile hamburger menu with colorful animations
- Desktop navigation with hover effects

### Hero Section
- Animated gradient background
- Floating particle effects
- Custom SVG illustrations
- Mobile-optimized typography

### Wellness Cards
- Gradient backgrounds
- Hover animations with shimmer effects
- Mobile-first responsive design
- Consistent spacing and typography

### Statistics Section
- Animated counters with stable layout
- Fixed dimensions to prevent layout shifting
- Staggered animations with delays

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on mobile devices
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Live Site**: `https://[username].github.io/rani-wellness-website`
- **Repository**: `https://github.com/[username]/rani-wellness-website`

---

Built with ❤️ for holistic wellness and modern web experiences.
