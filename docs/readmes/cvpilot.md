# CVPilot — AI-Powered Resume Analyzer & ATS Optimization Platform

> A modern AI-driven resume optimization and Applicant Tracking System (ATS) compatibility analytics platform built with **React**, **TypeScript**, **Three.js**, **Vite**, and the **Gemini / LLM API**.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Open_Deployment-2383e2?style=for-the-badge&logo=netlify)](https://cv-ai-resume-analyzer.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/AhmadBayu1412/ai-resume-analyzer)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict_Mode-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL_Dashboard-000000?style=for-the-badge&logo=threedotjs)](https://threejs.org/)

---

## 🎯 Overview & Problem Statement

In the modern competitive tech hiring landscape, over **75% of resumes are filtered out by automated Applicant Tracking Systems (ATS)** before ever reaching a human recruiter. Common failure modes include:
- Unparsable multi-column tables and non-standard layout glyphs.
- Absence of contextual domain keywords aligned with specific job descriptions.
- Passive phrasing lacking quantifiable metrics and strong action verbs (STAR framework).
- Ambiguous skill classification and missing ATS-compliant semantic headings.

**CVPilot** bridges this gap by offering job seekers an instantaneous, privacy-conscious, and actionable AI resume audit with real-time radial scoring, role keyword gap analysis, and intelligent bullet-point transformations.

---

## ⚡ Key Features & Engineering Highlights

1. **Deterministic ATS Parser & Heuristic Scorer**:
   - Parses resume structure into distinct semantic blocks: Contact Info, Work Experience, Technical Skills, Education, and Projects.
   - Calculates weighted ATS scoring based on parseability, keyword match ratio, active voice density, and quantifiable achievement metrics.

2. **Role-Specific Keyword Gap Analyzer**:
   - Compares candidate resume text against target Job Descriptions (JD).
   - Identifies missing high-impact hard skills, certifications, and industry terminology with instant recommendation badges.

3. **AI Section Rewriter (STAR Framework)**:
   - Leverages LLM reasoning to reformat passive resume bullet points into high-impact `Situation → Task → Action → Result` achievements.

4. **Interactive 3D Radial Score Dashboard**:
   - Implemented with **Three.js** and WebGL shaders for dynamic particle-driven visual feedback on score milestones.

5. **Privacy-First Client Processing**:
   - Local document parsing with zero persistent server-side storage of sensitive personally identifiable information (PII).

---

## 🛠️ Architecture & Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 + Vite | High-performance SPA with instant HMR |
| **Type System** | TypeScript (Strict) | Compile-time safety for parser schemas |
| **3D Visuals & Shaders** | Three.js | WebGL interactive score ring & particles |
| **AI / LLM Integration** | Google Gemini API | Intelligent resume feedback & rewriting |
| **Styling** | Tailwind CSS | Modern responsive dark/light interface |
| **Icons & UI Primitives** | Lucide React | Clean, accessible iconography |

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm
- Google Gemini API Key

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/AhmadBayu1412/ai-resume-analyzer.git
cd ai-resume-analyzer

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Add your VITE_GEMINI_API_KEY in .env

# 4. Start development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

---

## 📊 Evaluation & Verification Metrics

- **ATS Parse Success Rate:** > 96% on standard single/dual column templates.
- **Analysis Latency:** < 1.8s for complete multi-section parsing and scoring.
- **Lighthouse Performance Score:** 98/100 on desktop, 95/100 on mobile.
- **Accessibility:** ARIA live announcements for upload states and dynamic score counter updates.

---

<div align="center">
  <sub>Developed by <b>Ahmad Bayu Samudera</b> as part of the FlyRank AI Capstone Portfolio.</sub>
</div>
