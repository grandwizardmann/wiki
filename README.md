# SkyVille Wiki

*Finalized commit for Vercel deployment.*


A professional documentation site for the SkyVille Minecraft server.

## Features

- GitBook‑style layout with a collapsible sidebar
- Tailwind CSS styling (light & dark mode)
- Markdown/MDX source files stored in `content/docs/`
- **Decap CMS** admin UI at `/admin` for staff to edit the same Markdown files directly in the repository
- Automatic deployment on Vercel whenever a change is pushed to GitHub

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build       # production build
npm run lint        # linting
npm run type-check  # TypeScript check
```

## Adding or editing documentation

- Edit an `.mdx` file under `content/docs/` and the dev server will hot‑reload.
- To add a new page, create a new file with front‑matter (`title` & `description`).
- The sidebar navigation mirrors the folder structure.

## Deploying to Vercel

1. Create a GitHub repository and push this project.
2. In Vercel, **Import Project** → select the repo → Vercel detects a Next.js app.
3. Add the environment variables defined in `.env.example` (see below).
4. Enable **Automatic GitHub Deployments**.
5. After the first build, your site will be live at `https://<your‑project>.vercel.app`.

## License

MIT © SkyVille
