# How to Enable GitHub Pages for BMVU

This guide will help you publish the BMVU simulation as a GitHub Pages website.

## Method 1: Using GitHub Actions (Recommended)

The repository now includes a GitHub Actions workflow that will automatically deploy the website. Follow these steps:

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/zakariae-bakkari/BMVU`
2. Click on **Settings** (in the repository menu)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under **Source**, select **GitHub Actions**
5. The workflow is already configured and will deploy automatically when you push to the main branch

### 2. Merge the Pull Request

1. Merge this pull request to the main branch
2. The GitHub Actions workflow will automatically run and deploy the site
3. After a few minutes, your site will be live at: `https://zakariae-bakkari.github.io/BMVU/`

### 3. Check Deployment Status

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Once it completes successfully (green checkmark), your site is live!

## Method 2: Manual Configuration (Alternative)

If you prefer to deploy without GitHub Actions:

### 1. Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Under **Branch**, select **main** and set the folder to **/docs**
4. Click **Save**

### 2. Wait for Deployment

GitHub will automatically deploy your site from the `docs/` folder. This usually takes 1-2 minutes.

## Accessing Your Website

Once deployed, your website will be available at:

**https://zakariae-bakkari.github.io/BMVU/**

## What's Included in the Web Version

The GitHub Pages website includes:

- ✅ **Home page** (`index.html`) - Landing page with project information
- ✅ **BMVU Simulation** (`bmvu.html`) - Full interactive simulation
- ✅ **About page** (`about.html`) - Information about the developer
- ✅ **All assets** - Images, CSS, JavaScript, and audio files
- ✅ **Bootstrap framework** - For responsive design

## Features

The web version includes all the main features of the BMVU simulation:

- Interactive railway signaling system simulation
- Station communication procedures
- Semaphore and signal control
- Keyboard shortcuts for efficient operation
- Sound effects and visual feedback
- Fully responsive design

## Differences from Desktop Version

The web version runs entirely in the browser and:

- ✅ No installation required
- ✅ Works on any modern browser
- ✅ Mobile and tablet compatible
- ✅ All core simulation features included
- ❌ No native desktop menus (uses web navigation instead)
- ❌ Links open in new browser tabs instead of external application

## Troubleshooting

### Site Not Loading

1. Wait a few minutes after enabling GitHub Pages
2. Check the Actions tab for any deployment errors
3. Ensure the repository is public (or you have GitHub Pro for private repos)
4. Clear your browser cache and try again

### 404 Error

1. Verify that the `docs/` folder exists in the main branch
2. Check that `index.html` exists in the `docs/` folder
3. Ensure GitHub Pages is enabled in Settings

### Assets Not Loading

1. Check that all paths in HTML files are relative (no absolute paths)
2. Verify that assets folder is properly copied to docs/
3. Check browser console for any 404 errors on resources

## Updating the Website

To update the website:

1. Make changes to files in the `docs/` folder
2. Commit and push to the main branch
3. GitHub Actions will automatically redeploy (if using Method 1)
4. Changes will be live in 1-2 minutes

## Support

For issues or questions:

- Check the [main README](../README.md) for general information
- Review the [docs/README.md](../docs/README.md) for web-specific details
- Open an issue in the GitHub repository

---

**Note**: Make sure your repository is public for GitHub Pages to work with the free GitHub plan. If you have GitHub Pro, you can also use GitHub Pages with private repositories.
