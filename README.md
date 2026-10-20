# Kavin K &ndash; Personal Developer Portfolio Website

A modern, high-performance, fully responsive personal developer portfolio website built for **Kavin K**, B.Tech Information Technology undergraduate at **Sathyabama Institute of Science and Technology**, Chennai (Class of 2027).

Designed specifically for recruiters, internship coordinators, hackathon judges, and software engineering professionals.

---

## 🌟 Key Features

- **Futuristic Developer Theme**: Deep obsidian background (`#08090d`), electric cyan (`#38bdf8`) & violet (`#c084fc`) accents, glassmorphic cards, subtle glowing borders, and clean typography.
- **Interactive Neural Background Canvas**: Lightweight particle constellation that gently tracks cursor movement with full support for `prefers-reduced-motion`.
- **Single Source of Truth Configuration**: Centralized data file at `src/data/portfolioData.ts` allowing instant updates to your profile, social links, skills, projects, achievements, and education.
- **5 Featured Project Cards with Interactive In-Browser Simulators**:
  - **SmartBinX**: IoT-inspired smart waste management system using simulated algorithmic telemetry and dynamic route optimization.
  - **AmbuClear**: Smart ambulance emergency green corridor traffic prioritization concept.
  - **MindLink**: AI-powered study & productivity platform with working interactive Pomodoro timer and anonymous study room simulator.
  - **OneHood**: Hyperlocal community chatboard concept with micro-zone filtering.
  - **AR Restaurant Menu**: Interactive 3D food model inspector with 360-degree rotation and Vuforia AR concepts.
- **Achievements & Extracurriculars**:
  - 🏆 **1st Place in Web Whiz Competition** (with teammate Kishore) featuring interactive celebration confetti.
  - 🚀 **TechXcelerate 2025** Hackathon participation.
  - ⚡ **BUGSLAYER '26** Coding & Debugging competition.
  - 🎓 **BIS Club** member & AR/VR workshop organizer for junior students.
- **Education Section**: B.Tech in Information Technology at Sathyabama Institute of Science and Technology (2023–2027) with customizable CGPA indicator.
- **Dedicated Resume Hub**: In-browser interactive preview modal and direct PDF download trigger.
- **Interactive Contact Section**: Contact information cards, one-click copy, and form validation with instant `mailto:` client integration.
- **Zero Console Errors & Accessible**: Semantic HTML5, WCAG contrast compliance, responsive mobile drawer, and keyboard accessibility.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 6](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Scalable Brand Icons
- **Effects**: HTML5 Canvas Particle Engine + `canvas-confetti`

---

## 🚀 Quick Start (Running Locally)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher).

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
npm run preview
```

---

## ✏️ How to Customize Your Information

All website content is centrally managed in **`src/data/portfolioData.ts`**. You do not need to hunt through component files to update your details!

### 1. Update Personal Bio and Social Links
In `src/data/portfolioData.ts`:
```typescript
personal: {
  name: 'Kavin K',
  headline: 'Aspiring Software Engineer | Full-Stack Developer | AI/ML Enthusiast',
  tagline: 'Building intelligent applications and meaningful digital experiences.',
  university: 'Sathyabama Institute of Science and Technology',
  department: 'B.Tech Information Technology',
  graduationYear: 2027,
  location: 'Chennai, Tamil Nadu, India',
  // ...
}
```

Update your GitHub and LinkedIn usernames:
```typescript
socials: [
  {
    platform: 'GitHub',
    url: 'https://github.com/your-real-github-username',
    handle: 'github.com/your-real-github-username',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/your-real-linkedin-username',
    handle: 'linkedin.com/in/your-real-linkedin-username',
  },
  {
    platform: 'Email',
    url: 'mailto:your.real.email@example.com',
    handle: 'your.real.email@example.com',
  },
]
```

### 2. Replace Your Profile Picture
1. Drop your portrait photo into the `public/` directory (e.g. `public/profile.jpg`).
2. In `src/data/portfolioData.ts`, change:
```typescript
avatarUrl: '/profile.jpg',
```

### 3. Replace Your Resume (PDF)
1. Export your resume as a PDF named `resume.pdf`.
2. Save it to `public/resume.pdf` (replacing the placeholder).
3. The "Download Resume" and "View Resume" buttons will automatically serve your PDF file.

### 4. Update Your CGPA
In `src/data/portfolioData.ts`:
```typescript
education: {
  cgpa: '8.8 / 10.0', // Replace with your current CGPA
  // ...
}
```

### 5. Customize Technical Skills
In `src/data/portfolioData.ts`, expand or remove skills under `skills`:
```typescript
{
  id: 'languages',
  name: 'Programming Languages',
  skills: [
    { name: 'Python', category: 'languages', level: 'Proficient' },
    // Remove any tech you don't want to be questioned on in interviews!
  ]
}
```

### 6. Update Project Repositories & Demos
In `src/data/portfolioData.ts`, locate `projects` and set your real GitHub repository links:
```typescript
githubUrl: 'https://github.com/kavink-dev/smartbinx-simulation',
demoUrl: 'https://your-smartbinx-demo.vercel.app',
```

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Kavin K Portfolio"
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect Vite and run `npm run build`.
4. Click **Deploy**. Your portfolio is live in under 60 seconds!

### Deploying to Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select your GitHub repository.
4. Netlify will read the included `netlify.toml` automatically. Click **"Deploy site"**.

---

## 📄 License
This portfolio is open source and available under the [MIT License](LICENSE).
Feel free to use it as inspiration for your own developer portfolio.
