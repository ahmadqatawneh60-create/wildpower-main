# Deploying to GitHub Pages

Your website is now configured for GitHub Pages deployment. Here's what was set up:

## Changes Made

1. **vite.config.ts** - Added `base: "/wildpower-main/"` to ensure correct asset paths on GitHub Pages
2. **package.json** - Added `deploy` script for manual deployment
3. **.github/workflows/deploy.yml** - Created automated GitHub Actions workflow

## Automatic Deployment (Recommended)

The website will automatically build and deploy whenever you push to the `main` branch:

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

The GitHub Actions workflow will:
1. Build the project
2. Deploy to GitHub Pages

Your site will be live at: `https://ahmadqatawneh60-create.github.io/wildpower-main/`

## Required GitHub Repository Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - This enables automatic deployment from the workflow

## Manual Deployment (Alternative)

If auto-deployment doesn't work, you can manually deploy:

```bash
npm run deploy
# or with bun:
bun run deploy
```

## Custom Domain (Optional)

If you have a custom domain, add it to the workflow file:

1. Edit `.github/workflows/deploy.yml`
2. Add your domain to the `cname:` field (e.g., `cname: yourdomain.com`)
3. Configure DNS records to point to GitHub Pages

## Troubleshooting

- **Build fails**: Check that all dependencies are installed (`bun install`)
- **Assets not loading**: The `base` path in `vite.config.ts` should match your repository name
- **Page not updating**: Check the Actions tab in GitHub to see workflow status
