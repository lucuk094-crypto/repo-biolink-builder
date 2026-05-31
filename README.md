# 🎨 Bio Link Builder - Brutalism Style

Create beautiful, customizable bio link pages with 10+ themes, animations, and unlimited links. Export and deploy instantly!

## ✨ Features

### 1️⃣ THEMES (10+ themes)
- ✅ Brutalism
- ✅ Neon Cyber
- ✅ Greek/Yunani Style
- ✅ Minimalist
- ✅ Glassmorphism
- ✅ Gradient Modern
- ✅ Dark Mode
- ✅ Pastel
- ✅ Retro 80s
- ✅ Nature

### 2️⃣ BACKGROUNDS
- ✅ Solid colors
- ✅ Gradients (100+ presets)
- ✅ Upload from gallery
- ✅ Patterns (dots, lines, waves)

### 3️⃣ ANIMATIONS
- ✅ Rain
- ✅ Snow
- ✅ Moving clouds
- ✅ Shooting stars
- ✅ Bubbles
- ✅ Particles
- ✅ Floating shapes

### 4️⃣ BUTTON STYLES
- ✅ Rounded/Square/Circle
- ✅ Glow effect
- ✅ 3D effect
- ✅ Hover animations (slide, bounce, scale)
- ✅ Icon positions (left, right, none)

### 5️⃣ PROFILE FRAME
- ✅ Circle/Square/Hexagon
- ✅ Neon border
- ✅ Gradient border
- ✅ Animated border

### 6️⃣ FONTS (20+ fonts)
- ✅ Google Fonts integration
- ✅ Modern, Retro, Elegant, Fun styles

### 7️⃣ LINKS
- ✅ Add unlimited links
- ✅ Upload icon/image per link
- ✅ Custom title & URL
- ✅ Drag & drop reorder
- ✅ Show/hide toggle

### 8️⃣ EXPORT
- ✅ Export HTML (single file)
- ✅ Ready to deploy
- ✅ No dependencies

## 🚀 Quick Start

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

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📦 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/biolink-builder)

## 🎯 How to Use

1. **Profile Tab**: Upload profile image, set name and bio
2. **Theme Tab**: Choose from 10+ pre-designed themes
3. **Background Tab**: Customize background with colors, gradients, images, or patterns
4. **Animation Tab**: Add dynamic animations to your page
5. **Buttons Tab**: Customize button appearance and hover effects
6. **Links Tab**: Add, edit, reorder, and manage your links
7. **Export**: Click "Export HTML" to download your bio link page

## 🎨 Customization

### Adding New Themes

Edit `types/index.ts` and add your theme to the `THEMES` array:

```typescript
{
  id: 'my-theme',
  name: 'My Theme',
  colors: {
    bg: '#ffffff',
    primary: '#000000',
    secondary: '#666666',
    accent: '#999999'
  }
}
```

### Adding New Fonts

Add your font to the `FONTS` array in `types/index.ts` and include it in `app/layout.tsx`:

```typescript
// In types/index.ts
export const FONTS = [
  ...
  'Your Font Name',
]

// In app/layout.tsx - add to Google Fonts link
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### Adding New Animations

Create animation in `components/AnimationLayer.tsx` and add CSS in `app/globals.css`.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🎭 Design Philosophy

This project follows **Brutalism Design** principles:
- Bold, high-contrast colors (Black, White, Yellow, Purple)
- Strong borders and shadows
- Vanilla background (#F3E5AB)
- Raw, unpolished aesthetic
- Maximum functionality

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 💡 Tips

- Use high-quality images for best results
- Keep link titles short and clear
- Test your exported HTML before deploying
- Choose animations that match your theme
- Use custom icons for better branding

## 🌟 Examples

Check out these example bio links created with this builder:
- Brutalism Style: Bold and striking
- Neon Cyber: Futuristic and glowing
- Minimalist: Clean and simple
- Retro 80s: Nostalgic and colorful

## 📞 Support

Need help? Have questions?
- Open an issue on GitHub
- Check the documentation
- Contact the developer

---

Made with ❤️ using Brutalism Design principles
