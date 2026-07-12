<<<<<<< HEAD



# ✨ Portfolio 

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.4-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)](LICENSE)

---

## 🚀 Live Demo

https://portfolio-syrine-ben-anaya.vercel.app/

## 📖 Overview

This repository contains the source code for a modern, fully responsive **personal portfolio** .
The site showcases her technical skills, featured projects, education, and contact details in a clean and engaging interface.  
It supports **three languages** (English, French, Arabic) with **RTL** for Arabic, and includes a **persistent dark/light theme**.

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **Multilingual** | Switch between English, French, and Arabic via a dropdown; Arabic layout supports RTL. |
| 🎨 **Dark / Light Mode** | Toggle themes manually – your preference is saved in `localStorage`. |
| ⌨️ **Dynamic Hero** | Typewriter effect for the job title; a "spotlight" glow follows the mouse; a code‑window signature block. |
| 🗂️ **Project Cards** | 5 featured projects with tech tags, short descriptions, and direct demo links. |
| 📊 **Animated Skills** | Progress bars that fill when they scroll into view. |
| 🎓 **Education & Languages** | Cleanly presented academic background and language proficiency levels. |
| 📬 **Contact Section** | Quick links to email, WhatsApp, LinkedIn, and GitHub. |
| ✨ **Smooth Animations** | Elements fade and slide up as you scroll, powered by Intersection Observer. |
| 📱 **Responsive** | Optimised for all devices using Bootstrap 5 grid and components. |

---

## 🛠️ Tech Stack

| Layer            | Technologies |
|------------------|--------------|
| **Markup**       | HTML5 |
| **Styling**      | CSS3 + Bootstrap 5.3 + Font Awesome 6.4 + Google Fonts (Fraunces, Inter, JetBrains Mono) |
| **Behaviour**    | Vanilla JavaScript (ES6) |
| **Animations**   | CSS keyframes + Intersection Observer API |
| **Icons**        | Font Awesome, Bootstrap Icons |
| **Deployment**   | Vercel |

---

## 📁 Project Structure
portfolio/
├── index.html # Single‑file application (all HTML, CSS, JS)
├── assets/ # Image assets for project cards (meditex.png, carwash.png, etc.)
├── README.md # This file
└── LICENSE # MIT License (optional)

text

---

## 💻 Local Setup

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Syrine-BEN-ANAYA/portfolio.git
   cd portfolio
Open the project
Simply open index.html in your favourite browser.
No build tools or server required – it's a static site!

Customise

Modify content: edit the translations object inside the <script> tag.

Replace images: swap files in the assets/ folder and update src attributes in the project cards.

Tweak skills percentages, social links, and contact details as needed.

🌍 Deployment on Vercel
The site is deployed on Vercel for fast and reliable hosting.
To deploy your own copy:

Push the code to a GitHub repository.

Import the repository on Vercel.

Vercel automatically detects it as a static site – no extra configuration required.

Deploy and your portfolio will be live!

📄 License
This project is open‑source under the MIT License.
You are free to use, modify, and distribute it, provided the original copyright notice is retained.


⭐ If you find this portfolio useful, consider giving it a star! ⭐
=======
# نظام الزكاة الذكي | Smart Zakat Management System

<div align="center">

**A unified digital platform for managing zakat committee operations — families, distributions, wallets, accounting, and emergency aid approvals.**

**منصة رقمية موحّدة لإدارة عمليات لجنة الزكاة — الأسر، التوزيع، المحافظ، المحاسبة، والمساعدات العاجلة.**

🔗 **[Live Demo](https://zakat-navy.vercel.app/)**

</div>

---

## 📖 Overview

Smart Zakat is a full Arabic (RTL) React-based ERP designed for zakat committees to digitize the entire beneficiary lifecycle — from family registration and priority scoring, to fund distribution, merchant wallet settlements, financial accounting, and emergency aid requiring multi-level approval.

---

## ✨ Features

### 🔐 Secure Login
Arabic RTL authentication screen with committee branding and secure credential entry.

### 📊 Executive Dashboard
- Real-time KPIs: registered families, total expenses, pending parcels, senior citizens
- Family growth trends (line chart), priority distribution (pie chart), expense breakdown by category (bar chart)
- Recent activity timeline and priority-level legend
- Printable reports

### 👨‍👩‍👧‍👦 Families Registry
- Full-text search by civil ID, name, or phone
- Priority filtering (Critical / Medium / Self-sufficient)
- Per-family financial details: individual share, dependents, net entitlement
- Record editing and history logs

### 📦 Distribution Management
Tracks and manages the disbursement of aid to registered families with priority-based views.

### 💳 Merchant Portal
- Digital wallet balance lookup per beneficiary family
- Invoice deduction and confirmation workflow
- Settlement summary (pending vs. paid)
- Recent invoice list with status tracking and Excel export

### 💰 Accounting & Expenses
- Consolidated view of bank accounts, cash treasury, and inventory value
- Inter-account transfers
- Expense recording by category (stationery, utilities, transport) with payment method and notes
- Physical inventory management (items, quantities, unit pricing)

### 🚨 Emergency Aid & Governance
- Emergency assistance requests with triple-approval workflow (Manager → Deputy → Member)
- User & role management (System Admin, Accountant, Merchant Center)
- Full audit trail / activity log with printable reports

---

## 🖥️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router DOM 6 |
| Charts | Recharts 3 |
| Icons | Font Awesome (React) |
| Tooling | Create React App (react-scripts 5) |
| Linting | ESLint (react-app config) |

---

## 📂 Pages

| Page | File | Description |
|---|---|---|
| Login | `LoginPage.jsx` | Secure authentication screen |
| Dashboard | `DashboardPage.jsx` | Executive analytics & KPIs |
| Families | `FamiliesPage.jsx` | Beneficiary family registry |
| Distribution | `DistributionPage.jsx` | Aid distribution management |
| Accounting | `AccountingPage.jsx` | Accounts, transfers, expenses, inventory |
| Merchant | `MerchantPage.jsx` | Merchant wallet & invoice settlements |
| Emergency | `EmergencyPage.jsx` | Emergency aid, users & permissions, audit log |

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd zakat-erp-system
npm install
```

### Available Scripts

```bash
npm start      # Run the app in development mode
npm run build  # Build for production
npm test       # Run tests
npm run lint   # Lint the source code
```

The app will be available at `http://localhost:3000`.

---

## 🌐 Demo

Explore the live version here: **[https://zakat-navy.vercel.app/](https://zakat-navy.vercel.app/)**

---

## 📝 License

This project is proprietary and intended for internal committee use unless otherwise specified.

---

<div align="center">

**نظام الزكاة الذكي — لجنة مسقط**

</div>
>>>>>>> 37563ab (Suppression du README inutile)
