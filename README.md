markdown
# Syrine BEN ANAYA — Portfolio

> **Live Demo:** [portfolio-syrine-ben-anaya.vercel.app](https://portfolio-syrine-ben-anaya.vercel.app/)

A responsive, multilingual, single‑page portfolio website that showcases my profile as a Full‑Stack Software Engineer, technical skills, and recent projects. The design features a refined colour palette (purple, mint, orange), clean typography (Fraunces + Inter + JetBrains Mono), and smooth scroll‑triggered animations.

---

## ✨ Features

- 🌍 **Multilingual** – Content is dynamically translated between **English**, **French**, and **Arabic** via `data-i18n` attributes; right‑to‑left (RTL) layout automatically activates for Arabic.
- 🌗 **Dark / Light Mode** – Persistent theme preference stored in `localStorage` with a smooth colour transition.
- 🎬 **Scroll‑Reveal Animations** – Sections fade and scale into view using `IntersectionObserver` (classes `reveal` / `reveal-scale`).
- ⌨️ **Typewriter Effect** – The professional role in the hero section is dynamically typed and cycled.
- 🖥️ **Animated Code Window** – A stylised mini code editor with syntax highlighting and a blinking cursor.
- 🃏 **3D Tilt Project Cards** – Cards respond to mouse movement with a subtle depth effect.
- 📊 **Animated Skill Bars** – Progress bars fill when they enter the viewport.
- 🔢 **Animated Counters** – Statistics (projects delivered, technologies, languages) increment on scroll.
- 📱 **Fully Responsive** – Optimised for mobile, tablet, and desktop screens.
- ♿ **Accessibility** – Respects `prefers-reduced-motion` to disable animations when needed.

---

## 🛠️ Tech Stack

<p align="center">
  <!-- Frontend -->
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <!-- Backend -->
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <!-- Databases -->
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <!-- DevOps & Tools -->
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
</p>

<details>
<summary><b>📋 Detailed Breakdown</b></summary>

| Category | Technologies |
|----------|--------------|
| **Structure** | Semantic HTML5 |
| **Styling** | CSS3 (Custom properties, Grid, Flexbox) + Bootstrap 5.3.2 |
| **Interactivity** | Vanilla JavaScript (ES6+) |
| **Backend & APIs** | PHP, NestJS, Node.js, Express 5 |
| **Databases** | MySQL, MongoDB, PostgreSQL (Neon DB), Drizzle ORM |
| **Containerisation** | Docker, Kubernetes |
| **Icons** | Font Awesome 6.4.2 |
| **Fonts** | Google Fonts – Fraunces, Inter, JetBrains Mono |
| **Deployment** | Vercel |

</details>

---

## 📁 Project Structure
portfolio-syrine-ben-anaya/
├── index.html # Single page: HTML, CSS and JavaScript
└── assets/
├── meditex.png
├── carwash.png
├── gravity.png
├── lush.png
├── cristal.png
└── zakat.png

text

---

## 📂 Sections

1. **Hero** – Introduction, animated role, call‑to‑action, social links, key statistics.
2. **About** – Professional bio, education (Engineering degree, Bachelor’s), spoken languages.
3. **Skills** – Frontend, Backend, Databases, DevOps & Tools – presented with animated bars and tags.
4. **Projects** – Six featured projects, each with tech stack and live demo link.
5. **Contact** – Email, WhatsApp, LinkedIn, GitHub.

---

## 🧩 Featured Projects

| Project | Description | Stack |
|---------|-------------|-------|
| **Muscat Meditex** | Bilingual showcase website for a uniform supplier | PHP, MySQL, Bootstrap |
| **Car Wash Station** | Full‑featured site with admin panel and WhatsApp integration | PHP, PDO/MySQL |
| **GravityCore** | Modular monolith ERP | React + Vite, NestJS, Neon DB |
| **Lush Boutique** | E‑commerce store in a monorepo | Express 5, Drizzle ORM, TypeScript |
| **Cristal ERP** | Microservices ERP (sales, HR, payroll, monitoring) | React 19, NestJS, MongoDB, Docker/K8s |
| **Zakat** | Zakat management and distribution platform | React, Node.js, MongoDB |

---

## ⚙️ Local Setup

```bash
git clone https://github.com/Syrine-BEN-ANAYA/portfolio.git
cd portfolio
No dependencies to install – just open index.html in your browser. For a local server:

bash
npx serve .
☁️ Deployment
The site is deployed on Vercel as a static website. Every push to the main branch automatically triggers a new deployment.

🌐 Adding / Modifying a Language
All text content is centralised in the translations object (en, fr, ar) inside the main script. To add a new language:

Duplicate an existing translation block.

Translate each key.

Add the corresponding option in the language dropdown (#langDropdown).

📬 Contact
Email: syrinebenanayacontact@gmail.com

WhatsApp: +968 91460168

LinkedIn: Syrine BEN ANAYA

GitHub: Syrine-BEN-ANAYA

📄 License
© 2026 Syrine BEN ANAYA. All rights reserved.

text

---

This version is fully English, includes the colour badges at the top, and keeps the detailed table collapsible to avoid clutter. You can copy it directly into your `README.md` file.
