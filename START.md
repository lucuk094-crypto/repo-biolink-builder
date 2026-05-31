# 🚀 Quick Start Guide

## Prerequisites

Make sure you have installed:
- **Node.js** (version 18.x or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

Check your versions:
```bash
node -v
npm -v
```

---

## Installation Steps

### 1. Navigate to Project Directory

```bash
cd "c:\Users\vanx3\Desktop\project Vanx\linktree design\biolink-builder"
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons
- And more...

**Wait time**: 1-3 minutes depending on internet speed

### 3. Run Development Server

```bash
npm run dev
```

You should see:
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

### 4. Open in Browser

Open your browser and go to:
```
http://localhost:3000
```

🎉 **You should now see the Bio Link Builder!**

---

## What You'll See

### Left Panel: Builder
- 6 tabs for customization
- Profile, Theme, Background, Animation, Buttons, Links
- Real-time editing

### Right Panel: Preview
- Live preview of your bio link
- Export HTML button
- Responsive design

---

## First Steps

1. **Upload Profile Image**
   - Go to Profile tab
   - Click "Upload Image"
   - Choose your photo

2. **Set Your Name**
   - Enter your name in "Profile Name" field
   - Add a short bio

3. **Choose a Theme**
   - Go to Theme tab
   - Click on any theme to apply
   - See instant preview

4. **Add Your First Link**
   - Go to Links tab
   - Click "Add Link"
   - Fill in title and URL
   - Choose an emoji icon

5. **Export**
   - Click "Export HTML" button
   - Save the file
   - Open in browser to test

---

## Development Commands

### Start Development Server
```bash
npm run dev
```
- Runs on http://localhost:3000
- Hot reload enabled
- Shows errors in console

### Build for Production
```bash
npm run build
```
- Creates optimized production build
- Outputs to `.next` folder
- Takes 30-60 seconds

### Start Production Server
```bash
npm start
```
- Runs production build
- Must run `npm run build` first
- Faster than dev mode

### Lint Code
```bash
npm run lint
```
- Checks for code issues
- Shows warnings and errors
- Helps maintain code quality

---

## Project Structure

```
biolink-builder/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Builder.tsx        # Left panel builder
│   ├── Preview.tsx        # Right panel preview
│   ├── LinkEditor.tsx     # Link editing component
│   └── AnimationLayer.tsx # Animation effects
├── types/                 # TypeScript types
│   └── index.ts          # Type definitions
├── public/               # Static files
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── next.config.js        # Next.js configuration
└── README.md             # Documentation
```

---

## Troubleshooting

### Port 3000 Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found

**Error**: `Cannot find module 'xyz'`

**Solution**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Fails

**Error**: Build errors during `npm run build`

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors

**Error**: Type errors in code

**Solution**:
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Styles Not Loading

**Error**: Tailwind styles not applying

**Solution**:
```bash
# Restart dev server
# Press Ctrl+C to stop
npm run dev
```

---

## Environment Setup

### Windows

1. Install Node.js from [nodejs.org](https://nodejs.org/)
2. Open Command Prompt or PowerShell
3. Navigate to project folder
4. Run `npm install`
5. Run `npm run dev`

### macOS

1. Install Node.js:
```bash
brew install node
```
2. Open Terminal
3. Navigate to project folder
4. Run `npm install`
5. Run `npm run dev`

### Linux

1. Install Node.js:
```bash
sudo apt update
sudo apt install nodejs npm
```
2. Open Terminal
3. Navigate to project folder
4. Run `npm install`
5. Run `npm run dev`

---

## Next Steps

1. ✅ Read [USAGE.md](USAGE.md) for detailed usage guide
2. ✅ Read [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions
3. ✅ Customize themes in `types/index.ts`
4. ✅ Add new features in `components/`
5. ✅ Deploy to Vercel for free hosting

---

## Getting Help

### Documentation
- [README.md](README.md) - Overview and features
- [USAGE.md](USAGE.md) - How to use the builder
- [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Support
- Open an issue on GitHub
- Check existing issues for solutions
- Read the documentation thoroughly

---

## Tips for Development

1. **Keep Dev Server Running**
   - Changes auto-reload
   - Faster development
   - See errors immediately

2. **Use Browser DevTools**
   - Press F12 to open
   - Check console for errors
   - Inspect elements

3. **Test on Multiple Devices**
   - Use responsive mode in DevTools
   - Test on real mobile devices
   - Check different browsers

4. **Save Your Work**
   - Export HTML regularly
   - Commit to Git
   - Backup important files

5. **Experiment**
   - Try different themes
   - Test animations
   - Customize colors
   - Add new features

---

## Performance Tips

1. **Optimize Images**
   - Compress before upload
   - Use WebP format
   - Keep under 1MB

2. **Minimize Animations**
   - Use sparingly
   - Test performance
   - Consider user preferences

3. **Clean Code**
   - Remove unused imports
   - Delete commented code
   - Follow best practices

---

## Ready to Build? 🎨

You're all set! Start creating your perfect bio link page.

**Remember**:
- ✅ Experiment with different themes
- ✅ Test on mobile devices
- ✅ Export and deploy when ready
- ✅ Share your creation!

Happy building! 🚀
