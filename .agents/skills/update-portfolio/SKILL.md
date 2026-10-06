---
name: update-portfolio
description: >-
  Use this skill when the user provides an updated CV (PDF) and/or a new profile photo to update their portfolio website (SyedRafiulKabir.github.io). Explains how to parse the CV, update content files, crop and replace photos, update the downloadable CV, bust browser cache, run quality checks, and deploy.
---

# Portfolio Update Runbook (SyedRafiulKabir.github.io)

This runbook guides any agent on how to update Syed Rafiul Kabir's personal portfolio website when an updated CV and/or a new profile photo is provided.

---

## 1. Codebase Architecture & File Mapping

The portfolio is a React 19 + TypeScript + Vite single-page application hosted on GitHub Pages (`https://syedrafiulkabir.github.io`).

| Asset / Content | Location | Purpose |
| :--- | :--- | :--- |
| **Downloadable CV** | `public/cv.pdf` | The static PDF file downloaded when a user clicks the "Download CV" button. |
| **Profile Photo** | `public/shanto.png` & `src/assets/hero.png` | Displayed at 1:1 aspect ratio in the hero avatar card (`300x300`) and the top header brand mark (`34x34`). |
| **Profile Info** | `src/content/profile.ts` | Name, role title, location, professional summary, contact URLs. |
| **Experience** | `src/content/experience.ts` | Array of company positions, titles, start/end dates, and bullet-point highlights. |
| **Projects** | `src/content/projects.ts` | Featured projects with domain tags, tech stack, problem statement, solution, and impact. |
| **Skills** | `src/content/skills.ts` | Categorized technical skills mapped to confidence tiers (`Primary`, `Strong`, `Proficient`, `Familiar`). |
| **Education** | `src/content/education.ts` | Degree, institution name, dates, and optional CGPA. |
| **Portfolio Store** | `src/shared/state/portfolioStore.ts` | Manages `localStorage` caching via `PORTFOLIO_DATA_KEY`. |
| **Home Page UI** | `src/app/pages/HomePage.tsx` | Hero badges, role heading, key highlights cards, core strengths cards. |
| **Layout UI** | `src/app/layout/SiteLayout.tsx` | Sticky header brand mark, navigation anchors, download CV button, footer. |
| **Admin UI** | `src/app/pages/AdminPage.tsx` | Admin editor forms for profile, skills, experience, projects, and education. |

---

## 2. Handling an Updated CV (PDF)

When the user uploads or points to an updated CV:

### Step 2.1: Replace the Downloadable CV File
Copy the updated PDF file to `public/cv.pdf`.
```powershell
Copy-Item "<path_to_new_cv.pdf>" -Destination "public\cv.pdf" -Force
```
Verify the hash or file size to ensure the file was replaced correctly.

### Step 2.2: Extract & Compare CV Content
Extract text from the new CV (e.g. via PDF OCR or text extraction) and review:
1. **Professional Summary**: Years of experience, primary specializations (e.g., ASP.NET Core, EPiServer/Optimizely CMS, nopCommerce).
2. **Contact & Location**: Location (e.g., Dhaka, Bangladesh), email, LinkedIn, GitHub.
3. **Professional Experience**: Companies, job titles, start and end dates, and bullet-point achievements.
4. **Projects**: Platform names, company association, tech stack, and key responsibilities.
5. **Technical Skills**: Backend, CMS/e-commerce, frontend, databases, DevOps, architecture.
6. **Education**: Degree name, institution, graduation date, and CGPA.

### Step 2.3: Update Content Files
- **`src/content/profile.ts`**: Update `role`, `location`, and `summary`.
- **`src/content/experience.ts`**: Update the `experience` array. Ensure all jobs from the CV are represented accurately in reverse-chronological order.
- **`src/content/projects.ts`**: Update the `projects` array with featured projects, domain tags, tech lists, problem, solution, and impact.
- **`src/content/skills.ts`**: Update the `skills` array to reflect new tools and frameworks with appropriate tiers.
- **`src/content/education.ts`**: Update degree title, university, dates, and CGPA.
- **`src/app/pages/HomePage.tsx`**:
  - Update hero badges and title if core tech focus shifts (e.g. `.NET`, `Optimizely CMS`, `nopCommerce`).
  - Update "Key highlights" cards to match years of experience and top competencies.
  - Update "Core strengths" cards to match backend, CMS/e-commerce, and cloud/integration skills.
- **`src/app/pages/AdminPage.tsx`**: Ensure admin editor inputs accommodate any new fields (e.g. `cgpa`).

### Step 2.4: Bump the Client Storage Key
In `src/shared/state/portfolioStore.ts`, find `PORTFOLIO_DATA_KEY`:
```typescript
const PORTFOLIO_DATA_KEY = 'portfolio-data-v3' // increment version
```
Incrementing this key forces all visitors' browsers (and the user's browser) to discard old local cache and load the updated defaults automatically.

---

## 3. Handling a New Profile Photo

When the user provides a photo:

### Step 3.1: Photo Framing Requirements
- The site renders the photo in two key locations:
  - Hero Card (`HomePage.module.css`): `width: min(300px, 100%)`, `aspect-ratio: 1 / 1`, `border-radius: 22px`, `object-fit: cover`.
  - Header Mark (`SiteLayout.module.css`): `width: 34px`, `height: 34px`, `aspect-ratio: 1 / 1`, `border-radius: 10px`, `object-fit: cover`.
- Because both containers are square (1:1), rectangular or portrait uploads must be **cropped to 1:1** with a clean headshot framing:
  - Center horizontally on the face.
  - Leave ~10% to 15% headroom above the hair.
  - Frame downwards to capture the face, collar, tie, and upper shoulders.

### Step 3.2: AI-Powered Professional Headshot (Recommended)
Instead of a simple raw photo crop, use AI image editing (`generate_image`) with the uploaded photo as reference to generate a polished, high-resolution corporate studio portrait while strictly preserving the person's exact face, facial structure, eyes, beard/facial hair, and identity.

Call `generate_image`:
- **`AspectRatio`**: `"1:1"`
- **`ImagePaths`**: `["<path_to_uploaded_image>"]`
- **`Prompt`**:
  ```text
  Professional executive corporate studio headshot of the man in the reference image. Maintain the exact same facial identity, facial structure, eyes, nose, mouth, skin tone, hair, and beard from the reference photo without changing his face. Frame as a centered 1:1 professional business portrait from mid-chest up. Dressed in a sharply tailored dark navy blue suit, crisp pressed white collared dress shirt, and elegant burgundy tie. Professional studio portrait lighting with soft rim light, sharp focus, clean subtle modern office/studio background with gentle bokeh, high resolution photorealistic portrait.
  ```

### Step 3.3: Direct Cropping Alternative (Fallback)
If image generation is unavailable or a raw photo crop is explicitly requested:
Run the helper script [scripts/crop_photo.ps1](./scripts/crop_photo.ps1) to extract a clean 1:1 square crop centered on the face.

### Step 3.4: Replace Image Files
Save the AI-generated (or cropped) 1:1 photo as PNG to both target locations:
```powershell
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("<path_to_output_image>")
$img.Save("public\shanto.png", [System.Drawing.Imaging.ImageFormat]::Png)
$img.Save("src\assets\hero.png", [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
```

---

## 4. Quality Checks & Verification

### Node Environment Note
Vite 8 requires Node 20.19+ or Node 22+. On this system, use Node 22:
```powershell
$env:PATH = "C:\Users\BS01693\AppData\Local\nvm\v22.21.0;$env:PATH"
```

### Build & Lint
1. **Type Checking & Build**:
   ```powershell
   npm run build
   ```
   (Runs `tsc -b && vite build`. Must complete with 0 errors).
2. **Linting**:
   ```powershell
   npm run lint
   ```
   (Runs `eslint .`. Must complete with 0 errors).

### Local Preview
Launch the development server to verify visually:
```powershell
npm run dev
```
Preview at `http://localhost:5173/`.

---

## 5. Git Commit, Backup & Deployment

> **IMPORTANT**: Adhere to `git-commit-policy.md`. Never commit or push without explicit user approval. Always stage changes, show `git status` / `git diff`, and ask first.

### Step 5.1: Stage Changes
```powershell
git add public/cv.pdf public/shanto.png src/assets/hero.png src/content/ src/app/ src/shared/
git status
```

### Step 5.2: Commit (After User Approval)
```powershell
git commit -m "Update portfolio: <summary of changes>"
```

### Step 5.3: Backup Source Code to GitHub
Push the source code and commit history to the `source` branch:
```powershell
git push origin main:source
```

### Step 5.4: Deploy to GitHub Pages
Deploy the compiled build to GitHub Pages (`main` branch):
```powershell
npm run deploy
```
(Runs `predeploy`: `npm run build` followed by `gh-pages -d dist -b main`).
Verify the site at `https://syedrafiulkabir.github.io`.
