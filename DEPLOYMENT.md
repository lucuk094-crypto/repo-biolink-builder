# 🚀 Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Bio Link Builder.

### Method 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Navigate to your project:
```bash
cd biolink-builder
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **biolink-builder**
   - In which directory is your code located? **./**
   - Want to override the settings? **N**

5. Your app is now live! 🎉

### Method 2: Vercel Dashboard (GitHub Integration)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/biolink-builder.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Configure project:
   - Framework Preset: **Next.js**
   - Root Directory: **./biolink-builder** (if not in root)
   - Build Command: **npm run build** (auto-detected)
   - Output Directory: **.next** (auto-detected)

6. Click "Deploy"

7. Wait for deployment to complete (usually 1-2 minutes)

8. Your app is live! 🎉

### Method 3: Deploy Button

Add this to your GitHub README:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/biolink-builder)
```

## Deploy to Netlify

1. Build your project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Follow the prompts:
   - Create & configure a new site? **Y**
   - Team: Select your team
   - Site name: **biolink-builder**
   - Publish directory: **.next**

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "npm run export && gh-pages -d out"
  }
}
```

3. Update next.config.js:
```javascript
module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}
```

4. Deploy:
```bash
npm run deploy
```

## Deploy to Your Own Server

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

3. Use a process manager like PM2:
```bash
npm i -g pm2
pm2 start npm --name "biolink-builder" -- start
pm2 save
pm2 startup
```

4. Configure Nginx as reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

This project doesn't require any environment variables. It's a fully client-side application.

## Custom Domain

### Vercel

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update your DNS records as instructed

### Netlify

1. Go to Site settings > Domain management
2. Add custom domain
3. Update DNS records

## Troubleshooting

### Build Fails

- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node -v` (should be 18.x or higher)
- Clear cache: `rm -rf .next node_modules && npm install`

### Images Not Loading

- Check image paths are correct
- Ensure images are in the public folder
- For external images, add domains to next.config.js

### Deployment Timeout

- Increase build timeout in Vercel settings
- Optimize images before uploading
- Remove unused dependencies

## Performance Optimization

1. **Image Optimization**:
   - Use WebP format
   - Compress images before upload
   - Use appropriate image sizes

2. **Code Splitting**:
   - Already handled by Next.js
   - Use dynamic imports for heavy components

3. **Caching**:
   - Vercel automatically handles caching
   - Configure cache headers if needed

## Monitoring

- Use Vercel Analytics for performance monitoring
- Set up error tracking with Sentry
- Monitor Core Web Vitals

## Updates

To update your deployed app:

1. Make changes locally
2. Test thoroughly
3. Commit and push to GitHub
4. Vercel will automatically redeploy

Or manually:
```bash
vercel --prod
```

---

Need help? Check the [main README](README.md) or open an issue on GitHub.
