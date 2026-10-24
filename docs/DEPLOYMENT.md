---
title: "Deployment"
description: "How to deploy SkyVille Wiki to Vercel"
---

# Deploying to Vercel

1. **Create a GitHub repository** and push the project.
   ```bash
   git init
   git remote add origin https://github.com/your‑user/skyville-wiki.git
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```
2. **Import the repository into Vercel**
   - Go to the Vercel dashboard → **New Project** → **Import Git Repository**.
   - Select the newly created GitHub repo. Vercel will automatically detect a **Next.js** project.
3. **Configure environment variables**
   - In the Vercel project settings, add the variables defined in `.env.example`:
     - `CMS_GITHUB_CLIENT_ID`
     - `CMS_GITHUB_CLIENT_SECRET`
     - `CMS_GITHUB_TOKEN`
   - These are required for the Decap CMS backend.
4. **Deploy**
   - Vercel will run `npm install` and `npm run build`.
   - After a successful build, your site will be available at `https://<project>.vercel.app`.
5. **Automatic deployments**
   - Any push to the `main` (or the branch you configure) triggers a new Vercel deployment.
   - When staff publishes changes via the admin UI, Decap CMS creates a commit on the repository, which Vercel picks up automatically.

## Notes

- Vercel’s Hobby tier is free for personal projects. If you plan to monetize or expect high traffic, review Vercel’s pricing.
- No additional server‑side functions are required for the basic documentation site.
