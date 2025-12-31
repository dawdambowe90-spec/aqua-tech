# Step-by-Step Deployment Guide to Vercel

## Prerequisites
- ✅ Production build successful
- ✅ All code committed to Git (optional but recommended)
- ✅ Vercel account (sign up at https://vercel.com if needed)

---

## Method 1: Deploy via Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Deploy to Production
```bash
cd "c:\Users\Amie Mbowe\Desktop\Online ProjectHustle\aqua-tech-agency"
vercel --prod
```

### Step 4: Follow the Prompts
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No (first time)
- **What's your project's name?** → aqua-tech-agency (or your preferred name)
- **In which directory is your code located?** → ./ (press Enter)
- **Want to override settings?** → No (press Enter)

### Step 5: Wait for Deployment
Vercel will:
1. Upload your files
2. Build the project
3. Deploy to production
4. Provide you with a live URL (e.g., `aqua-tech-agency.vercel.app`)

---

## Method 2: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub (if not already)
```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit - Production ready"

# Create a GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/aqua-tech-agency.git
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

---

## Post-Deployment Steps

### 1. Custom Domain (Optional)
If you have a custom domain:
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `aquatechagency.com`)
4. Update your DNS records as instructed by Vercel

### 2. Environment Variables (If Needed)
If you add API keys later:
1. Go to "Settings" → "Environment Variables"
2. Add variables (e.g., `NEXT_PUBLIC_GA_ID` for Google Analytics)
3. Redeploy for changes to take effect

### 3. Submit Sitemap to Google
1. Go to https://search.google.com/search-console
2. Add your property (your Vercel URL)
3. Submit your sitemap: `https://your-domain.vercel.app/sitemap.xml`

---

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### Images Not Loading
- Ensure images are in the `public` folder
- Check `next.config.ts` has correct `remotePatterns`

### 404 Errors
- Verify routes in `.next` folder after build
- Check dynamic routes have proper `params` handling

---

## Monitoring Your Site

### Vercel Analytics (Free)
- Automatically enabled
- View in Vercel dashboard → "Analytics"

### Performance Monitoring
- Use Vercel Speed Insights
- Monitor Core Web Vitals

---

## Need Help?

**Vercel Support**: https://vercel.com/support
**Documentation**: https://vercel.com/docs

**Your Contact**:
- Email: aquaTechssolutions@gmail.com
- Phone: +220 2390892
