# Prachi Rawat — Developer Portfolio

A modern, responsive, single-page developer portfolio website built for **Prachi Rawat** using **React 18**, **Tailwind CSS**, and **Lucide Icons**. Designed with clean dark-mode aesthetics, high typography contrast, and subtle glassmorphism accents.

---

## 🌟 Key Features

1. **Sticky Glassmorphism Navbar:**
   - Custom `PR` monogram brand logo with live status pulse.
   - Smooth-scrolling navigation links (`About`, `Skills`, `Projects`, `Contact`) with scroll-spy active indicators.
   - Interactive `Resume` button triggering an interactive preview modal with PDF download/print options.
   - Fully responsive mobile drawer menu.

2. **Hero Section:**
   - **Headline:** *"Hi, I’m Prachi Rawat — First-Year AI & ML Student."*
   - **Bio:** Highlighting undergraduate studies at Bangalore Institute of Technology (BIT), Haryana background, and dedication to algorithmic problem solving.
   - Primary **'View Projects'** CTA with smooth scrolling to `#projects`.
   - Direct social badges (GitHub, LinkedIn, Email) with hover animations.
   - Interactive C code window preview (`prachi_profile.c`).

3. **About & Education Section:**
   - Dedicated narrative on moving from Haryana to India’s tech capital (Bengaluru).
   - Highlights 1st Year B.E. in Artificial Intelligence & Machine Learning at Bangalore Institute of Technology.
   - Coursework focus, academic milestones, and forward-looking AI aspirations.

4. **Categorized Skills Grid:**
   - **Programming Languages:** C (low-level pointers, structs, file I/O), Python (automation, OOP, scripting).
   - **Core Areas:** Problem Solving, Data Structures (Basics), AI & Machine Learning Fundamentals.
   - **Tools & Platforms:** Git, GitHub, Linux, VS Code.
   - Category filtering tabs and detailed proficiency tags.

5. **Featured Projects (3-Card Grid):**
   - **Student Management System in C:** Structs, dynamic memory allocation, CRUD, and file persistence.
   - **Python CLI Calculator & Task Automator:** High-precision parser, batch file categorization, and command-line automation.
   - **Number Guessing / Logic Game in C:** Algorithmic logic, time-seeded generation, and binary search hint engine.
   - Includes architecture highlights, tech stack pills, and GitHub repository links.

6. **Contact Section:**
   - Direct **Copy-to-Clipboard Email** button with instant feedback toast.
   - Functional contact form (Name, Email, Message) with client validation and mail client launcher.
   - Quick links to GitHub, LinkedIn, and Bangalore Institute of Technology campus location.

7. **Resume Modal:**
   - Complete digital CV summary with printable layout and customizable download links.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** Inter & JetBrains Mono

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory, ready to deploy on **Vercel**, **Netlify**, or **GitHub Pages**.

---

## ⚙️ How to Customize Your Content

All data is separated into a single configuration file:
👉 **[`src/data/portfolioData.js`](file:///c:/Users/prach/OneDrive/Desktop/yay/src/data/portfolioData.js)**

### Updating Your Information:
- **Email & Socials:** Change `email`, `github`, and `linkedin` fields.
- **Resume:** Update `resumeUrl` to your Google Drive link or drop `resume.pdf` into `/public`.
- **Adding Projects:** Add a new project object to the `projectsData` array:
```javascript
{
  id: 4,
  title: "Your New Project Title",
  tagline: "Short tagline",
  description: "Detailed description of what you built...",
  primaryLanguage: "Python", // or "C", "C++", etc.
  techStack: ["Python", "TensorFlow", "Pandas"],
  githubUrl: "https://github.com/prachi-rawat/your-repo",
  liveDemoUrl: null,
  highlights: ["Feature 1", "Feature 2"],
  status: "Completed",
  featuredBadge: "Machine Learning"
}
```
- **Adding Skills:** Add objects into the `skillsData` array under the appropriate category.

---

## 📂 Project Structure

```
yay/
├── public/
│   └── favicon.svg           # Custom PR monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with mobile menu
│   │   ├── Hero.jsx          # Hero section with code card
│   │   ├── About.jsx         # About & Education timeline
│   │   ├── Skills.jsx        # Categorized skill badges
│   │   ├── Projects.jsx      # 3-card projects showcase
│   │   ├── ProjectCard.jsx   # Individual modular project card
│   │   ├── Contact.jsx       # Contact form & copy email button
│   │   ├── Footer.jsx        # Minimalist footer
│   │   └── ResumeModal.jsx   # Interactive resume viewer
│   ├── data/
│   │   └── portfolioData.js  # Centralized content and project data
│   ├── App.jsx               # App container
│   ├── index.css             # Tailwind base & glassmorphism classes
│   └── main.jsx              # React entrypoint
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```
