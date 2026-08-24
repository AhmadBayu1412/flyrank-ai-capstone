/**
 * Ahmad Bayu Samudera - Unified Frontend Portfolio & FlyRank AI Capstone Workspace
 * Global Sidebar, Single-View Router, Accordion Categories, Mini-Game Engine,
 * Protected Admin 2FA Authentication, and Full CRUD Project Management.
 */

// =============================================================================
// DEFAULT 9 CAPSTONE PROJECTS DATABASE
// =============================================================================
const DEFAULT_PROJECTS = [
  {
    id: "nexus-ai",
    title: "Nexus AI",
    subtitle: "Enterprise-Grade Streaming Chatbot & Agentic Platform",
    category: "ai",
    categoryLabel: "AI & Agents",
    icon: "🤖",
    cover: "./assets/images/nexus-ai.png",
    readmePath: "./docs/readmes/nexus-ai.md",
    githubUrl: "https://github.com/AhmadBayu1412/nexus-ai",
    liveUrl: "https://nexus-ai-chatbot-opal.vercel.app/",
    tags: ["Next.js 16", "React 19", "Vercel AI SDK", "Tailwind v4", "Prisma / Neon"],
    excerpt: "Enterprise streaming chatbot with token abuse shields, real-time web verification, and sub-50ms TTFT.",
    overview: "Nexus AI solves enterprise chatbot bottlenecks by engineering an ultra-resilient streaming pipeline with token abuse shields, real-time web verification agents (Tavily), lazy chat management, and full W3C ARIA 100/100 accessibility compliance.",
    highlights: [
      "Sub-50ms Time-To-First-Token (TTFT) via optimized Server-Sent Events (SSE).",
      "Enterprise Token Abuse Shield with IP-rate limiting and payload anomaly detection.",
      "Contextual Real-Time Web Verification agent augmenting LLM responses with live data.",
      "Certified 100/100 Accessibility audit score with full keyboard trap-free navigation."
    ]
  },
  {
    id: "cvpilot",
    title: "CVPilot",
    subtitle: "AI-Powered Resume Analyzer & ATS Optimization",
    category: "ai",
    categoryLabel: "AI & Agents",
    icon: "📄",
    cover: "./assets/images/cvpilot.png",
    readmePath: "./docs/readmes/cvpilot.md",
    githubUrl: "https://github.com/AhmadBayu1412/ai-resume-analyzer",
    liveUrl: "https://cv-ai-resume-analyzer.netlify.app/",
    tags: ["React 19", "TypeScript", "Three.js", "Vite", "Gemini API"],
    excerpt: "AI-Powered Resume Analyzer with ATS score calculation, keyword match optimizer, and STAR section rewrites.",
    overview: "CVPilot helps job seekers overcome automated Applicant Tracking System filters through heuristic parsing, weighted ATS scoring, role-specific keyword overlap analysis, and intelligent bullet-point transformations.",
    highlights: [
      "Deep ATS compatibility score algorithm breakdown (keyword density, layout parseability).",
      "Role-specific keyword match analyzer against target job descriptions.",
      "AI section rewrite recommendations tailored for STAR-method impact.",
      "Interactive 3D glow visual dashboard built with Three.js and Vite."
    ]
  },
  {
    id: "nusantarabrief",
    title: "NusantaraBrief AI",
    subtitle: "n8n Intelligent News Curation Agent",
    category: "ai",
    categoryLabel: "AI & Agents",
    icon: "📰",
    cover: "./assets/images/nusantarabrief.png",
    readmePath: "./docs/readmes/nusantarabrief.md",
    githubUrl: "https://github.com/AhmadBayu1412/flyrank-ai-capstone",
    liveUrl: "https://github.com/AhmadBayu1412/flyrank-ai-capstone",
    tags: ["n8n Workflow", "Groq LLM", "JavaScript Nodes", "RSS Parsing", "HTML Email"],
    excerpt: "Autonomous n8n agent parsing national RSS feeds and generating Groq LLM-synthesized email briefs.",
    overview: "NusantaraBrief AI runs an automated autonomous intelligence pipeline. It continuously scans multi-source national RSS news feeds, filters noise, prompts Groq LLM chains for bilingual synthesis, and dispatches formatted executive newsletters.",
    highlights: [
      "End-to-end automated n8n workflow pipeline with error recovery branches.",
      "Groq Chat Model integration for sub-second multi-article synthesis.",
      "Multi-stream RSS feed parsing and JavaScript-based deduplication.",
      "Automated HTML email briefing generation and scheduled SMTP dispatch."
    ]
  },
  {
    id: "seismic-field",
    title: "SEISMIC FIELD",
    subtitle: "Real-Time Earthquake Observatory & GLSL Telemetry",
    category: "fullstack",
    categoryLabel: "Real-Time & Telemetry",
    icon: "🌐",
    cover: "./assets/images/seismic-field.png",
    readmePath: "./docs/readmes/seismic-field.md",
    githubUrl: "https://github.com/AhmadBayu1412/seismic-field",
    liveUrl: "https://seismic-field.vercel.app/",
    tags: ["Next.js", "MapLibre GL", "GLSL Shaders", "BMKG Telemetry", "TailwindCSS"],
    excerpt: "Live earthquake observatory with BMKG telemetry, 3D crust cross-sections & GLSL seismic wave shaders.",
    overview: "SEISMIC FIELD delivers an immersive geospatial earthquake monitoring platform. It streams live BMKG telemetry, computes tectonic hypocenter depths in 3D cross-sections, and executes hardware-accelerated GLSL wave fragment shaders to visualize seismic magnitude intensity.",
    highlights: [
      "Official BMKG real-time earthquake telemetry ingestion with 60s TTL caching.",
      "Custom GLSL fragment shaders rendering dynamic P-wave and S-wave propagation.",
      "Interactive MapLibre GL locator with custom tectonic fault layer overlays.",
      "Earth Crust Hypocenter Depth Visualizer showing depth profiles (<60km, >300km)."
    ]
  },
  {
    id: "pasaria",
    title: "Pasaria E-Commerce",
    subtitle: "Modular Monolith Platform & Inventory State Machine",
    category: "fullstack",
    categoryLabel: "Real-Time & Full-Stack",
    icon: "🛒",
    cover: "./assets/images/pasaria.png",
    readmePath: "./docs/readmes/pasaria.md",
    githubUrl: "https://github.com/AhmadBayu1412/Pasaria-E-Commerce",
    liveUrl: "https://pasaria-e-commerce.vercel.app/",
    tags: ["Next.js 16", "PostgreSQL", "Prisma ORM", "Redis Locks", "Zustand 5"],
    excerpt: "Modular monolith with Redis distributed locks for flash sale inventory reservation & order state machine.",
    overview: "Pasaria is an enterprise-grade modular monolith e-commerce platform built to solve high-concurrency overselling via distributed Redis locks, optimistic concurrency, and strict order status state transitions.",
    highlights: [
      "Distributed Redis lock implementation preventing flash sale inventory overselling.",
      "Deterministic state machine for end-to-end checkout & payment status flow.",
      "ACID transactions powered by PostgreSQL, Prisma ORM, and database constraints.",
      "High-performance client caching and snappy optimistic UI updates with Zustand 5."
    ]
  },
  {
    id: "deadsubs",
    title: "DeadSubs Burn Killer",
    subtitle: "Financial Health & Subscription Tracker",
    category: "fullstack",
    categoryLabel: "Real-Time & Full-Stack",
    icon: "💳",
    cover: "./assets/images/deadsubs.png",
    readmePath: "./docs/readmes/deadsubs.md",
    githubUrl: "https://github.com/AhmadBayu1412/deadsubs",
    liveUrl: "https://deadsubs.netlify.app/",
    tags: ["React 19", "Zustand 5", "Dexie.js", "Tailwind CSS v4", "Lucide React"],
    excerpt: "Financial wellness tool with subscription burn rate tracking, auto-renewal alerts, & cancellation playbooks.",
    overview: "DeadSubs helps users eliminate 'dead subscription burn' through automated billing cycle calculations, multi-currency conversion, local IndexedDB persistence via Dexie.js, and visual spending analytics.",
    highlights: [
      "Offline-first client architecture using IndexedDB and Dexie.js for total privacy.",
      "Monthly & annual subscription burn rate projection metrics with visual graphs.",
      "Automated auto-renewal notification scheduler and cancellation playbooks.",
      "Zero-latency reactive global state management powered by Zustand 5."
    ]
  },
  {
    id: "portfolio-adr",
    title: "ADR Portfolio",
    subtitle: "Architecture Decision Records & 3D Interactive Mascot",
    category: "frontend",
    categoryLabel: "Architecture & UI/UX",
    icon: "🏛",
    cover: "./assets/images/portfolio-adr.png",
    readmePath: "./docs/readmes/portfolio-adr.md",
    githubUrl: "https://github.com/AhmadBayu1412/portfolio",
    liveUrl: "https://ahmad-bayu-samudera.netlify.app/",
    tags: ["Next.js 16", "Three.js", "TypeScript", "Tailwind v4", "ADR System"],
    excerpt: "Technical case study portfolio structured around Architecture Decision Records (ADR 001 - 005) & 3D Three.js mascot.",
    overview: "This portfolio showcases deep technical decisions documented via formal Architecture Decision Records (ADR 001 - ADR 005). Features a custom Three.js animated low-poly 3D mascot and optimized font/asset delivery.",
    highlights: [
      "5 Formal Architecture Decision Records (ADRs) explaining every engineering trade-off.",
      "Interactive 3D low-poly mascot with smooth mouse tracking built with Three.js.",
      "Sub-100ms Largest Contentful Paint (LCP) performance optimization.",
      "Fully responsive Bento grid design system with dark/light mode token transitions."
    ]
  },
  {
    id: "learnhub",
    title: "LearnHub Masterclass",
    subtitle: "Accessible Component Library Benchmark & W3C ARIA APG",
    category: "frontend",
    categoryLabel: "Architecture & UI/UX",
    icon: "♿",
    cover: "./assets/images/learnhub.png",
    readmePath: "./docs/readmes/learnhub.md",
    githubUrl: "https://github.com/AhmadBayu1412/LearnHub",
    liveUrl: "https://github.com/AhmadBayu1412/LearnHub",
    tags: ["React", "Radix UI", "shadcn/ui", "W3C ARIA APG", "TypeScript"],
    excerpt: "W3C ARIA APG benchmark showcase comparing native accessible components with shadcn/ui & Radix UI.",
    overview: "LearnHub is a comprehensive frontend accessibility masterclass comparing hand-crafted native accessible components against industry standards (shadcn/ui and Radix UI primitives), enforcing WCAG 2.1 AA compliance.",
    highlights: [
      "Custom W3C ARIA Authoring Practices Guide (APG) tabs, accordions, and dialogs.",
      "Side-by-side component benchmark comparison with Radix UI primitives.",
      "Full keyboard trap-free focus management and screen-reader announcements.",
      "Clean MVVM architecture decoupling business ViewModel hooks from UI components."
    ]
  },
  {
    id: "moviesearch",
    title: "MovieSearch / MovieMate",
    subtitle: "Real-Time Movie Discovery & Cloud Watchlist",
    category: "frontend",
    categoryLabel: "Architecture & UI/UX",
    icon: "🎬",
    cover: "./assets/images/moviesearch.png",
    readmePath: "./docs/readmes/moviesearch.md",
    githubUrl: "https://github.com/AhmadBayu1412/MovieMate",
    liveUrl: "https://github.com/AhmadBayu1412/MovieMate",
    tags: ["React 19", "Firebase Auth", "Firestore", "OMDb API", "Tailwind CSS"],
    excerpt: "Movie discovery app with OMDb real-time search debounce and Firebase Cloud Firestore favourites sync.",
    overview: "MovieSearch / MovieMate provides real-time movie exploration with 300ms debounced OMDb search queries, Firebase Authentication, and real-time Cloud Firestore synchronization of user watchlist collections.",
    highlights: [
      "Real-time OMDb API query debounce reducing network overhead by 80%.",
      "Firebase Authentication with Google OAuth & Email/Password providers.",
      "Cloud Firestore synchronization for live multi-device watchlist management.",
      "Smooth skeleton loading states and responsive grid layout."
    ]
  }
];

// =============================================================================
// STORAGE & DATA ACCESS HELPERS
// =============================================================================
const DEFAULT_CATEGORIES = [
  { id: "ai", label: "AI & Autonomous Agents", icon: "🤖" },
  { id: "fullstack", label: "Real-Time & Full-Stack", icon: "🌐" },
  { id: "frontend", label: "Architecture & UI/UX", icon: "🎨" }
];

const STORAGE_PROJECTS_KEY = "flyrank_custom_projects";
const STORAGE_CATEGORIES_KEY = "flyrank_custom_categories";
const STORAGE_AUTH_KEY = "flyrank_admin_auth";

function getStoredCategories() {
  try {
    const raw = localStorage.getItem(STORAGE_CATEGORIES_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Failed to load categories from storage:", err);
  }
  return [...DEFAULT_CATEGORIES];
}

function saveStoredCategories(list) {
  try {
    localStorage.setItem(STORAGE_CATEGORIES_KEY, JSON.stringify(list));
  } catch (err) {
    console.error("Failed to save categories to storage:", err);
  }
}

let CATEGORIES = getStoredCategories();

function getStoredProjects() {
  try {
    const raw = localStorage.getItem(STORAGE_PROJECTS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Failed to load projects from storage:", err);
  }
  return [...DEFAULT_PROJECTS];
}

function saveStoredProjects(list) {
  try {
    localStorage.setItem(STORAGE_PROJECTS_KEY, JSON.stringify(list));
  } catch (err) {
    console.error("Failed to save projects to storage:", err);
  }
}

let PROJECTS = getStoredProjects();

// =============================================================================
// SECURE ADMIN AUTHENTICATION (HASH-VERIFIED & 2FA SECURITY SIMULATION)
// =============================================================================
// Stored as one-way SHA-256 cryptographic hashes (plaintext credentials are never in code)
const AUTH_SECURITY_HASH = {
  e: "6ddd1a7ad7baad9f449bbf8998a22754e6d4668552da5d98ec81c29a6f66faf4",
  p: "c4f5abc04a349969b0885b0e77cbefd29ecb43a547e4bf58f48c176543539266"
};

let activeOtpCode = null;
let sessionTargetEmail = "";

async function sha256Hex(str) {
  const enc = new TextEncoder();
  const hashBuffer = await crypto.subtle.digest("SHA-256", enc.encode(str));
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

function isAdminLoggedIn() {
  return localStorage.getItem(STORAGE_AUTH_KEY) === "true";
}

function updateAdminUI() {
  const isAdmin = isAdminLoggedIn();
  const authBtnIcon = document.getElementById("admin-btn-icon");
  const authBtnText = document.getElementById("admin-btn-text");
  const adminElements = document.querySelectorAll(".admin-only");

  if (authBtnIcon && authBtnText) {
    if (isAdmin) {
      authBtnIcon.textContent = "🛡️";
      authBtnText.textContent = "Admin Mode (Logout)";
    } else {
      authBtnIcon.textContent = "🔒";
      authBtnText.textContent = "Admin Login";
    }
  }

  adminElements.forEach(el => {
    el.style.display = isAdmin ? "inline-flex" : "none";
  });
}

function handleAdminAuthClick() {
  if (isAdminLoggedIn()) {
    if (confirm("You are currently in Admin Edit Mode. Do you want to logout?")) {
      logoutAdmin();
    }
  } else {
    openAdminAuthModal();
  }
}

function openAdminAuthModal() {
  const modal = document.getElementById("admin-auth-modal");
  if (!modal) return;
  
  // Reset steps
  const stepLogin = document.getElementById("auth-step-login");
  const stepOtp = document.getElementById("auth-step-otp");
  const errorMsg = document.getElementById("auth-error-msg");
  const otpError = document.getElementById("otp-error-msg");

  if (stepLogin) stepLogin.style.display = "block";
  if (stepOtp) stepOtp.style.display = "none";
  if (errorMsg) errorMsg.style.display = "none";
  if (otpError) otpError.style.display = "none";

  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-password");
  if (emailInput) emailInput.value = "";
  if (passInput) passInput.value = "";

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => { if (emailInput) emailInput.focus(); }, 100);
}

function closeAdminAuthModal() {
  const modal = document.getElementById("admin-auth-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function handleAuthBackdropClick(e) {
  const modal = document.getElementById("admin-auth-modal");
  if (e.target === modal) closeAdminAuthModal();
}

async function handleAdminLoginSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-password");
  const errorMsg = document.getElementById("auth-error-msg");

  const emailVal = emailInput ? emailInput.value.trim().toLowerCase() : "";
  const passVal = passInput ? passInput.value.trim() : "";

  try {
    const [emailHash, passHash] = await Promise.all([
      sha256Hex(emailVal),
      sha256Hex(passVal)
    ]);

    if (emailHash === AUTH_SECURITY_HASH.e && passHash === AUTH_SECURITY_HASH.p) {
      sessionTargetEmail = emailVal;
      if (errorMsg) errorMsg.style.display = "none";
      generateAndSendOtp();
    } else {
      if (errorMsg) {
        errorMsg.textContent = "Invalid administrator credentials. Access denied.";
        errorMsg.style.display = "block";
      }
    }
  } catch (err) {
    if (errorMsg) {
      errorMsg.textContent = "Authentication verification error. Please try again.";
      errorMsg.style.display = "block";
    }
  }
}

function generateAndSendOtp() {
  activeOtpCode = Math.floor(100000 + Math.random() * 900000).toString();
  
  const stepLogin = document.getElementById("auth-step-login");
  const stepOtp = document.getElementById("auth-step-otp");
  const simOtpDisplay = document.getElementById("sim-otp-display");
  const otpInput = document.getElementById("auth-otp-input");
  const targetEmailSpan = document.getElementById("auth-target-email-display");

  if (targetEmailSpan && sessionTargetEmail) {
    targetEmailSpan.textContent = sessionTargetEmail;
  }
  if (simOtpDisplay) simOtpDisplay.textContent = activeOtpCode;
  if (otpInput) otpInput.value = "";

  if (stepLogin) stepLogin.style.display = "none";
  if (stepOtp) stepOtp.style.display = "block";

  showToast(`Security OTP generated for verification`);
  setTimeout(() => { if (otpInput) otpInput.focus(); }, 150);
}

function resendOtpCode() {
  generateAndSendOtp();
}

function handleOtpVerificationSubmit(e) {
  e.preventDefault();
  const otpInput = document.getElementById("auth-otp-input");
  const otpError = document.getElementById("otp-error-msg");
  const enteredOtp = otpInput ? otpInput.value.trim() : "";

  if (enteredOtp === activeOtpCode) {
    // Authorized!
    localStorage.setItem(STORAGE_AUTH_KEY, "true");
    closeAdminAuthModal();
    updateAdminUI();
    renderProjects();
    renderFeaturedProjects();
    showToast("🛡️ Admin Authentication Verified! CRUD Controls Enabled.");
  } else {
    if (otpError) {
      otpError.textContent = "Invalid verification code. Please check the 6-digit OTP.";
      otpError.style.display = "block";
    }
  }
}

function logoutAdmin() {
  localStorage.removeItem(STORAGE_AUTH_KEY);
  updateAdminUI();
  renderProjects();
  renderFeaturedProjects();
  showToast("Logged out from Admin Mode.");
}

// =============================================================================
// PROJECT CRUD (CREATE, READ, UPDATE, DELETE)
// =============================================================================
// =============================================================================
// CATEGORY CRUD & DYNAMIC SIDEBAR SYNCHRONIZATION
// =============================================================================
let openCategoryAccordions = new Set();

function renderSidebarCategories() {
  const container = document.getElementById("sidebar-category-list");
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => {
    const catProjects = PROJECTS.filter(p => p.category === cat.id);
    const isOpen = openCategoryAccordions.has(cat.id);

    const itemsHtml = catProjects.length > 0
      ? catProjects.map(p => `
          <a class="sidebar-nav-item" data-project-id="${p.id}" onclick="openProjectReadme('${p.id}')" title="${p.title}">
            <span class="nav-icon">${p.icon || "🚀"}</span>
            <span class="nav-text">${p.title}</span>
          </a>
        `).join("")
      : `<div class="sidebar-category-empty">No projects yet</div>`;

    return `
      <div class="sidebar-accordion-group ${isOpen ? "open" : ""}" id="accordion-group-${cat.id}">
        <div class="sidebar-category-header" onclick="toggleSidebarCategory('${cat.id}')" title="Filter by ${cat.label}">
          <div class="cat-header-left">
            <span class="cat-chevron" id="chevron-${cat.id}">▶</span>
            <span class="cat-title">${cat.icon} ${cat.label}</span>
          </div>
          <span class="cat-count">${catProjects.length}</span>
        </div>
        <div class="sidebar-category-items" id="cat-items-${cat.id}">
          ${itemsHtml}
        </div>
      </div>
    `;
  }).join("");
}

function populateCategoryDropdowns() {
  // Capstone Gallery Filter Select
  const filterSelect = document.getElementById("category-filter-select");
  if (filterSelect) {
    const prevVal = filterSelect.value || currentFilter || "all";
    filterSelect.innerHTML = `
      <option value="all">📁 All Categories</option>
      ${CATEGORIES.map(c => `<option value="${c.id}">${c.icon} ${c.label}</option>`).join("")}
    `;
    if (CATEGORIES.some(c => c.id === prevVal) || prevVal === "all") {
      filterSelect.value = prevVal;
    } else {
      filterSelect.value = "all";
      currentFilter = "all";
    }
  }

  // Project CRUD Modal Category Select
  const crudSelect = document.getElementById("crud-category");
  if (crudSelect) {
    const prevVal = crudSelect.value;
    crudSelect.innerHTML = CATEGORIES.map(c => `
      <option value="${c.id}">${c.icon} ${c.label}</option>
    `).join("");
    if (prevVal && CATEGORIES.some(c => c.id === prevVal)) {
      crudSelect.value = prevVal;
    } else if (CATEGORIES.length > 0) {
      crudSelect.value = CATEGORIES[0].id;
    }
  }
}

function renderCategoryManagerList() {
  const container = document.getElementById("category-manager-list");
  if (!container) return;

  const defaultIds = DEFAULT_CATEGORIES.map(c => c.id);

  container.innerHTML = CATEGORIES.map(cat => {
    const projectCount = PROJECTS.filter(p => p.category === cat.id).length;
    const isDefault = defaultIds.includes(cat.id);

    return `
      <div class="category-manager-item">
        <div class="category-manager-item-left">
          <span class="category-item-icon">${cat.icon}</span>
          <div>
            <div class="category-item-name">${cat.label}</div>
            <div class="category-item-slug">${cat.id}</div>
          </div>
        </div>
        <div class="category-manager-item-right">
          <span class="category-item-badge">${projectCount} project${projectCount !== 1 ? "s" : ""}</span>
          ${!isDefault ? `
            <button type="button" class="category-delete-btn" onclick="deleteCategory('${cat.id}')" title="Delete category">🗑️</button>
          ` : `
            <span style="font-size: 10px; color: var(--muted-foreground); opacity: 0.6;">(System)</span>
          `}
        </div>
      </div>
    `;
  }).join("");
}

function openCategoryCrudModal() {
  if (!isAdminLoggedIn()) {
    openAdminAuthModal();
    return;
  }

  const modal = document.getElementById("category-crud-modal");
  if (!modal) return;

  const nameInput = document.getElementById("cat-name-input");
  const slugInput = document.getElementById("cat-slug-input");
  const iconInput = document.getElementById("cat-icon-input");

  if (nameInput) nameInput.value = "";
  if (slugInput) slugInput.value = "";
  if (iconInput) iconInput.value = "🚀";

  renderCategoryManagerList();

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => { if (nameInput) nameInput.focus(); }, 100);
}

function closeCategoryCrudModal() {
  const modal = document.getElementById("category-crud-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function handleCategoryBackdropClick(e) {
  const modal = document.getElementById("category-crud-modal");
  if (e.target === modal) closeCategoryCrudModal();
}

function handleCategoryNameInput(val) {
  const slugInput = document.getElementById("cat-slug-input");
  if (!slugInput) return;
  const slug = val.toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-");
  slugInput.value = slug;
}

function selectCategoryEmoji(emoji) {
  const iconInput = document.getElementById("cat-icon-input");
  if (iconInput) iconInput.value = emoji;
}

function handleSaveCategorySubmit(e) {
  e.preventDefault();
  if (!isAdminLoggedIn()) {
    openAdminAuthModal();
    return;
  }

  const nameInput = document.getElementById("cat-name-input");
  const slugInput = document.getElementById("cat-slug-input");
  const iconInput = document.getElementById("cat-icon-input");

  const name = nameInput ? nameInput.value.trim() : "";
  let slug = slugInput ? slugInput.value.trim().toLowerCase() : "";
  const icon = iconInput ? iconInput.value.trim() : "🚀";

  if (!slug) {
    slug = name.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/[\s_-]+/g, "-");
  }

  if (!name || !slug) {
    showToast("Please enter category name and ID");
    return;
  }

  // Check if exists
  if (CATEGORIES.some(c => c.id === slug)) {
    showToast(`Category with ID "${slug}" already exists!`);
    return;
  }

  const newCat = {
    id: slug,
    label: name,
    icon: icon || "📁"
  };

  CATEGORIES.push(newCat);
  openCategoryAccordions.add(slug);
  saveStoredCategories(CATEGORIES);

  renderSidebarCategories();
  populateCategoryDropdowns();
  renderCategoryManagerList();
  renderProjects();

  showToast(`Category "${name}" added & synchronized! ✨`);

  if (nameInput) nameInput.value = "";
  if (slugInput) slugInput.value = "";
  if (iconInput) iconInput.value = "🚀";
}

function deleteCategory(catId) {
  if (!isAdminLoggedIn()) {
    openAdminAuthModal();
    return;
  }

  const cat = CATEGORIES.find(c => c.id === catId);
  const catName = cat ? cat.label : catId;

  const projectCount = PROJECTS.filter(p => p.category === catId).length;
  if (projectCount > 0) {
    if (!confirm(`Warning: ${projectCount} project(s) belong to "${catName}". Deleting this category will reassign these projects to "AI & Agents". Proceed?`)) {
      return;
    }
    // Reassign projects to default
    PROJECTS = PROJECTS.map(p => {
      if (p.category === catId) {
        return {
          ...p,
          category: "ai",
          categoryLabel: "AI & Agents"
        };
      }
      return p;
    });
    saveStoredProjects(PROJECTS);
  } else {
    if (!confirm(`Are you sure you want to delete category "${catName}"?`)) {
      return;
    }
  }

  CATEGORIES = CATEGORIES.filter(c => c.id !== catId);
  openCategoryAccordions.delete(catId);
  saveStoredCategories(CATEGORIES);

  if (currentFilter === catId) {
    currentFilter = "all";
  }

  renderSidebarCategories();
  populateCategoryDropdowns();
  renderCategoryManagerList();
  renderProjects();
  renderFeaturedProjects();

  showToast(`Category "${catName}" deleted.`);
}

// =============================================================================
// PROJECT CRUD (CREATE, READ, UPDATE, DELETE)
// =============================================================================
function openProjectCrudModal(projectId = null) {
  if (!isAdminLoggedIn()) {
    openAdminAuthModal();
    return;
  }

  populateCategoryDropdowns();

  const modal = document.getElementById("project-crud-modal");
  if (!modal) return;

  const idInput = document.getElementById("crud-project-id");
  const titleInput = document.getElementById("crud-title");
  const catInput = document.getElementById("crud-category");
  const iconInput = document.getElementById("crud-icon");
  const subInput = document.getElementById("crud-subtitle");
  const coverInput = document.getElementById("crud-cover");
  const liveInput = document.getElementById("crud-live");
  const gitInput = document.getElementById("crud-github");
  const tagsInput = document.getElementById("crud-tags");
  const excerptInput = document.getElementById("crud-excerpt");
  const overviewInput = document.getElementById("crud-overview");
  const readmePathInput = document.getElementById("crud-readme-path");
  const readmeContentInput = document.getElementById("crud-readme-content");
  const modalTitle = document.getElementById("crud-modal-title");

  if (projectId) {
    // Edit existing project
    const project = PROJECTS.find(p => p.id === projectId);
    if (!project) return;

    if (idInput) idInput.value = project.id;
    if (modalTitle) modalTitle.textContent = `Edit Project: ${project.title}`;
    if (titleInput) titleInput.value = project.title || "";
    if (catInput) catInput.value = project.category || (CATEGORIES[0] ? CATEGORIES[0].id : "ai");
    if (iconInput) iconInput.value = project.icon || "🚀";
    if (subInput) subInput.value = project.subtitle || "";
    if (coverInput) coverInput.value = project.cover || "./assets/images/cover-banner.svg";
    if (liveInput) liveInput.value = project.liveUrl || "";
    if (gitInput) gitInput.value = project.githubUrl || "";
    if (tagsInput) tagsInput.value = (project.tags || []).join(", ");
    if (excerptInput) excerptInput.value = project.excerpt || "";
    if (overviewInput) overviewInput.value = project.overview || "";
    if (readmePathInput) readmePathInput.value = project.readmePath || "";
    if (readmeContentInput) readmeContentInput.value = project.readmeContent || "";
  } else {
    // Create new project
    if (idInput) idInput.value = "";
    if (modalTitle) modalTitle.textContent = "Add New Project";
    if (titleInput) titleInput.value = "";
    if (catInput) catInput.value = CATEGORIES[0] ? CATEGORIES[0].id : "ai";
    if (iconInput) iconInput.value = "🚀";
    if (subInput) subInput.value = "";
    if (coverInput) coverInput.value = "./assets/images/cover-banner.svg";
    if (liveInput) liveInput.value = "";
    if (gitInput) gitInput.value = "";
    if (tagsInput) tagsInput.value = "";
    if (excerptInput) excerptInput.value = "";
    if (overviewInput) overviewInput.value = "";
    if (readmePathInput) readmePathInput.value = "";
    if (readmeContentInput) readmeContentInput.value = "";
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => { if (titleInput) titleInput.focus(); }, 100);
}

function closeProjectCrudModal() {
  const modal = document.getElementById("project-crud-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function handleCrudBackdropClick(e) {
  const modal = document.getElementById("project-crud-modal");
  if (e.target === modal) closeProjectCrudModal();
}

function handleSaveProjectSubmit(e) {
  e.preventDefault();
  if (!isAdminLoggedIn()) {
    openAdminAuthModal();
    return;
  }

  const idInput = document.getElementById("crud-project-id");
  const titleInput = document.getElementById("crud-title");
  const catInput = document.getElementById("crud-category");
  const iconInput = document.getElementById("crud-icon");
  const subInput = document.getElementById("crud-subtitle");
  const coverInput = document.getElementById("crud-cover");
  const liveInput = document.getElementById("crud-live");
  const gitInput = document.getElementById("crud-github");
  const tagsInput = document.getElementById("crud-tags");
  const excerptInput = document.getElementById("crud-excerpt");
  const overviewInput = document.getElementById("crud-overview");
  const readmePathInput = document.getElementById("crud-readme-path");
  const readmeContentInput = document.getElementById("crud-readme-content");

  const editingId = idInput ? idInput.value.trim() : "";
  const title = titleInput ? titleInput.value.trim() : "Untitled Project";
  const category = catInput ? catInput.value : (CATEGORIES[0] ? CATEGORIES[0].id : "ai");
  const icon = iconInput ? iconInput.value.trim() : "🚀";
  const subtitle = subInput ? subInput.value.trim() : "";
  const cover = coverInput ? coverInput.value.trim() : "./assets/images/cover-banner.svg";
  const liveUrl = liveInput ? liveInput.value.trim() : "#";
  const githubUrl = gitInput ? gitInput.value.trim() : "#";
  const rawTags = tagsInput ? tagsInput.value : "";
  const tags = rawTags.split(",").map(t => t.trim()).filter(t => t.length > 0);
  const excerpt = excerptInput ? excerptInput.value.trim() : "";
  const overview = overviewInput ? overviewInput.value.trim() : excerpt;
  const readmePath = readmePathInput ? readmePathInput.value.trim() : "";
  const readmeContent = readmeContentInput ? readmeContentInput.value.trim() : "";

  const foundCat = CATEGORIES.find(c => c.id === category);
  const categoryLabel = foundCat ? foundCat.label : (category.charAt(0).toUpperCase() + category.slice(1));

  if (editingId) {
    // Update existing
    const idx = PROJECTS.findIndex(p => p.id === editingId);
    if (idx !== -1) {
      PROJECTS[idx] = {
        ...PROJECTS[idx],
        title,
        subtitle,
        category,
        categoryLabel,
        icon,
        cover,
        liveUrl,
        githubUrl,
        tags: tags.length > 0 ? tags : ["Web Development"],
        excerpt: excerpt || "Project description.",
        overview: overview || excerpt,
        readmePath: readmePath || PROJECTS[idx].readmePath || "",
        readmeContent: readmeContent || PROJECTS[idx].readmeContent || ""
      };
      showToast(`Project "${title}" updated successfully! ✨`);
    }
  } else {
    // Create new
    const newId = `proj-${Date.now()}`;
    const newProject = {
      id: newId,
      title,
      subtitle,
      category,
      categoryLabel,
      icon,
      cover,
      readmePath: readmePath || "",
      readmeContent: readmeContent || "",
      githubUrl,
      liveUrl,
      tags: tags.length > 0 ? tags : ["Web Development"],
      excerpt: excerpt || "Project description.",
      overview: overview || excerpt,
      highlights: [
        "Architected with modern software engineering design principles.",
        "Production-ready deployment with responsive user experience."
      ]
    };
    PROJECTS.unshift(newProject);
    showToast(`Project "${title}" added to database! 🚀`);
  }

  saveStoredProjects(PROJECTS);
  closeProjectCrudModal();
  renderProjects();
  renderFeaturedProjects();
  renderSidebarCategories();
  populateCategoryDropdowns();
  updateSidebarCounts();
}

function deleteProject(projectId) {
  if (!isAdminLoggedIn()) {
    openAdminAuthModal();
    return;
  }

  const project = PROJECTS.find(p => p.id === projectId);
  const title = project ? project.title : "this project";

  if (confirm(`Are you sure you want to delete "${title}"? This cannot be undone.`)) {
    PROJECTS = PROJECTS.filter(p => p.id !== projectId);
    saveStoredProjects(PROJECTS);
    renderProjects();
    renderFeaturedProjects();
    renderSidebarCategories();
    populateCategoryDropdowns();
    updateSidebarCounts();
    showToast(`Project "${title}" deleted.`);
  }
}

function resetDatabaseToDefault() {
  if (!isAdminLoggedIn()) {
    openAdminAuthModal();
    return;
  }

  if (confirm("Reset all projects and categories to default? Any custom edits will be reverted.")) {
    PROJECTS = [...DEFAULT_PROJECTS];
    CATEGORIES = [...DEFAULT_CATEGORIES];
    openCategoryAccordions = new Set();
    saveStoredProjects(PROJECTS);
    saveStoredCategories(CATEGORIES);
    renderProjects();
    renderFeaturedProjects();
    renderSidebarCategories();
    populateCategoryDropdowns();
    updateSidebarCounts();
    showToast("Database and categories reset to default.");
  }
}

// =============================================================================
// STATE MANAGEMENT & ROUTER
// =============================================================================
let currentActiveView = "home";
let currentFilter = "all";
let currentSearchQuery = "";
let currentViewMode = "gallery";
let currentActiveProjectId = null;
let currentModalTab = "readme";
let currentCoverIndex = 0;

const VIEW_TITLES = {
  home: "Portfolio & Profile",
  portfolio: "Portfolio & Profile",
  profile: "Portfolio & Profile",
  timeline: "Journey Timeline",
  game: "Dev Maze Game",
  capstone: "Capstone Database"
};

const COVER_PRESETS = [
  "./assets/images/cover-banner.svg",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80"
];

// DOM References
const gridContainer = document.getElementById("projects-grid");
const featuredGrid = document.querySelector(".featured-cards-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("project-search");
const selectFilter = document.getElementById("category-filter-select");
const modal = document.getElementById("project-modal");
const contactModal = document.getElementById("contact-modal");
const toast = document.getElementById("notion-toast");
const globalSidebar = document.getElementById("global-sidebar");
const mainStage = document.getElementById("main-scroll-stage");

// =============================================================================
// INITIALIZATION
// =============================================================================
function updateSidebarCounts() {
  document.querySelectorAll(".nav-badge-count").forEach(badge => {
    badge.textContent = PROJECTS.length;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateCategoryDropdowns();
  renderSidebarCategories();
  initViewFromUrlHash();
  renderProjects();
  renderFeaturedProjects();
  updateSidebarCounts();
  initTheme();
  setupKeyboardShortcuts();
  setupCoverBannerActions();
  setupShareButton();
  updateAdminUI();

  // Backdrop dismissal
  const sidebarBackdrop = document.getElementById("sidebar-backdrop");
  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", () => {
      if (globalSidebar) globalSidebar.classList.remove("mobile-open");
      sidebarBackdrop.classList.remove("active");
    });
  }
});

// =============================================================================
// ROUTER & VIEW SWITCHING
// =============================================================================
function switchPageView(viewId) {
  let targetId = viewId;
  if (targetId === "portfolio" || targetId === "profile") {
    targetId = "home";
  }

  if (!VIEW_TITLES[targetId]) return;

  currentActiveView = targetId;

  // 1. Switch active page panels
  document.querySelectorAll(".page-view-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  const targetPanel = document.getElementById(`view-${targetId}`);
  if (targetPanel) {
    targetPanel.classList.add("active");
  }

  // 2. Explicitly update sidebar active state & aria-current for all nav items
  document.querySelectorAll(".sidebar-nav-item").forEach(item => {
    const navView = item.getAttribute("data-view");
    if (navView) {
      const isActive = navView === targetId;
      item.classList.toggle("active", isActive);
      if (isActive) {
        item.setAttribute("aria-current", "page");
      } else {
        item.removeAttribute("aria-current");
      }
    } else {
      item.classList.remove("active");
      item.removeAttribute("aria-current");
    }
  });

  // 3. Update breadcrumb text
  const breadcrumbText = document.getElementById("breadcrumb-current-view");
  if (breadcrumbText) {
    breadcrumbText.textContent = VIEW_TITLES[targetId];
  }

  // 4. Announce navigation to screen reader users (WCAG 4.1.3)
  announceToScreenReader(`Navigated to ${VIEW_TITLES[targetId]}`);

  // 5. If navigating to capstone database, reset category filter to 'all' by default
  if (targetId === "capstone") {
    currentFilter = "all";
    if (selectFilter) selectFilter.value = "all";
    renderProjects();
  }

  // 6. Update sidebar count badges
  updateSidebarCounts();

  // 7. Reset scroll
  if (mainStage) {
    mainStage.scrollTop = 0;
  }

  // 8. Close mobile drawer if open
  if (window.innerWidth <= 768 && globalSidebar && globalSidebar.classList.contains("mobile-open")) {
    globalSidebar.classList.remove("mobile-open");
    const backdrop = document.getElementById("sidebar-backdrop");
    if (backdrop) backdrop.classList.remove("active");
    const toggleBtn = document.getElementById("sidebar-toggle");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", "false");
  }

  // 9. Update URL hash
  if (history.pushState) {
    history.pushState(null, null, `#${targetId}`);
  } else {
    location.hash = `#${targetId}`;
  }

  // If entering game view, reinit game
  if (targetId === "game") {
    setTimeout(initDevMazeGame, 100);
  }
}

function initViewFromUrlHash() {
  let hash = window.location.hash.replace("#", "").trim();
  if (hash === "portfolio" || hash === "profile") {
    hash = "home";
  }

  if (hash && VIEW_TITLES[hash]) {
    switchPageView(hash);
  } else if (hash.startsWith("project-")) {
    const projId = hash.replace("project-", "");
    switchPageView("capstone");
    setTimeout(() => openProjectModal(projId), 150);
  } else {
    switchPageView("home");
  }

  window.addEventListener("hashchange", () => {
    let newHash = window.location.hash.replace("#", "").trim();
    if (newHash === "portfolio" || newHash === "profile") {
      newHash = "home";
    }
    if (newHash && VIEW_TITLES[newHash] && newHash !== currentActiveView) {
      switchPageView(newHash);
    }
  });
}

function toggleSidebar() {
  if (!globalSidebar) return;
  const backdrop = document.getElementById("sidebar-backdrop");
  const toggleBtn = document.getElementById("sidebar-toggle");
  
  if (window.innerWidth <= 768) {
    const isNowOpen = globalSidebar.classList.toggle("mobile-open");
    if (backdrop) backdrop.classList.toggle("active", isNowOpen);
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", isNowOpen ? "true" : "false");
    announceToScreenReader(isNowOpen ? "Sidebar menu opened" : "Sidebar menu closed");
  } else {
    const isNowCollapsed = globalSidebar.classList.toggle("collapsed");
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", isNowCollapsed ? "false" : "true");
    announceToScreenReader(isNowCollapsed ? "Sidebar navigation collapsed" : "Sidebar navigation expanded");
  }
}

function toggleSidebarCategory(catId) {
  const group = document.getElementById(`accordion-group-${catId}`);
  if (!group) return;
  const isNowOpen = group.classList.toggle("open");
  if (isNowOpen) {
    openCategoryAccordions.add(catId);
  } else {
    openCategoryAccordions.delete(catId);
  }
}

// =============================================================================
// CAPSTONE GALLERY & FEATURED RENDERING
// =============================================================================
function renderProjects() {
  if (!gridContainer) return;

  const isAdmin = isAdminLoggedIn();

  const filtered = PROJECTS.filter(project => {
    const matchesFilter = currentFilter === "all" || project.category === currentFilter;
    if (!matchesFilter) return false;
    
    if (!currentSearchQuery.trim()) return true;
    
    const query = currentSearchQuery.toLowerCase();
    const matchTitle = (project.title || "").toLowerCase().includes(query);
    const matchSub = (project.subtitle || "").toLowerCase().includes(query);
    const matchExcerpt = (project.excerpt || "").toLowerCase().includes(query);
    const matchTags = (project.tags || []).some(tag => tag.toLowerCase().includes(query));
    
    return matchTitle || matchSub || matchExcerpt || matchTags;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    announceToScreenReader("No projects match your search or filter.");
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  announceToScreenReader(`Displaying ${filtered.length} project(s)`);
  
  gridContainer.innerHTML = filtered.map(project => `
    <article class="notion-card" onclick="openProjectModal('${project.id}')" tabindex="0" role="button" aria-label="Open ${project.title} details">
      <div class="card-cover">
        <img src="${project.cover}" alt="${project.title} Preview" loading="lazy" />
        <span class="card-badge-overlay">${project.categoryLabel || "Project"}</span>
        ${isAdmin ? `
          <div class="card-admin-controls" onclick="event.stopPropagation()">
            <button class="card-admin-btn" onclick="openProjectCrudModal('${project.id}')" title="Edit Project">✏️</button>
            <button class="card-admin-btn delete" onclick="deleteProject('${project.id}')" title="Delete Project">🗑️</button>
          </div>
        ` : ""}
      </div>
      <div class="card-content">
        <div class="card-header-row">
          <span class="card-icon">${project.icon}</span>
          <h3 class="card-title">${project.title}</h3>
        </div>
        <p class="card-excerpt">${project.excerpt}</p>
        <div class="card-tags-row">
          ${(project.tags || []).slice(0, 3).map(tag => `<span class="pill-tag ${project.category}">${tag}</span>`).join("")}
          ${(project.tags || []).length > 3 ? `<span class="pill-tag">+${project.tags.length - 3}</span>` : ""}
        </div>
        <div class="card-footer-actions" onclick="event.stopPropagation()">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-link-btn" title="Open live demo">
            <span>Live Demo</span> ↗
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-repo-btn" title="View GitHub repository">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderFeaturedProjects() {
  const container = document.querySelector(".featured-cards-grid");
  if (!container) return;

  const isAdmin = isAdminLoggedIn();

  container.innerHTML = PROJECTS.map(project => `
    <article class="notion-card" onclick="openProjectModal('${project.id}')" tabindex="0" role="button" aria-label="Open ${project.title} details">
      <div class="card-cover">
        <img src="${project.cover}" alt="${project.title} Preview" loading="lazy" />
        <span class="card-badge-overlay">${project.categoryLabel || "Project"}</span>
        ${isAdmin ? `
          <div class="card-admin-controls" onclick="event.stopPropagation()">
            <button class="card-admin-btn" onclick="openProjectCrudModal('${project.id}')" title="Edit Project">✏️</button>
            <button class="card-admin-btn delete" onclick="deleteProject('${project.id}')" title="Delete Project">🗑️</button>
          </div>
        ` : ""}
      </div>
      <div class="card-content">
        <div class="card-header-row">
          <span class="card-icon">${project.icon}</span>
          <h3 class="card-title">${project.title}</h3>
        </div>
        <p class="card-excerpt">${project.excerpt}</p>
        <div class="card-tags-row">
          ${(project.tags || []).slice(0, 3).map(tag => `<span class="pill-tag ${project.category}">${tag}</span>`).join("")}
          ${(project.tags || []).length > 3 ? `<span class="pill-tag">+${project.tags.length - 3}</span>` : ""}
        </div>
        <div class="card-footer-actions" onclick="event.stopPropagation()">
          <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="card-link-btn">
            <span>Live Demo</span> ↗
          </a>
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-repo-btn">
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </article>
  `).join("");
}

function filterProjects(category) {
  currentFilter = category;
  if (selectFilter) selectFilter.value = category;
  renderProjects();
}

function handleSearch(query) {
  currentSearchQuery = query;
  renderProjects();
}

function resetFilters() {
  currentFilter = "all";
  currentSearchQuery = "";
  if (searchInput) searchInput.value = "";
  if (selectFilter) selectFilter.value = "all";
  renderProjects();
}

function setViewMode(mode) {
  currentViewMode = mode;
  const galBtn = document.getElementById("view-gallery-btn");
  const listBtn = document.getElementById("view-list-btn");
  if (galBtn) galBtn.classList.toggle("active", mode === "gallery");
  if (listBtn) listBtn.classList.toggle("active", mode === "list");
  if (gridContainer) gridContainer.classList.toggle("list-view", mode === "list");
}

// =============================================================================
// MARKDOWN RENDERING & PROJECT MODAL
// =============================================================================
async function loadAndRenderMarkdown(filePath, targetElement, fallbackMarkdown) {
  if (!targetElement) return;
  const loadingElem = document.getElementById("readme-loading");
  if (loadingElem) loadingElem.style.display = "block";
  targetElement.innerHTML = "";

  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error("Fetch failed");
    const markdown = await response.text();
    if (typeof marked !== "undefined") {
      targetElement.innerHTML = marked.parse(markdown);
    } else {
      targetElement.innerHTML = `<pre>${markdown}</pre>`;
    }
  } catch (err) {
    const content = fallbackMarkdown || `# Document (${filePath})\n\nUnable to fetch directly via file:// protocol. Please open with a local web server (e.g. \`python -m http.server\` or \`npx serve\`).`;
    if (typeof marked !== "undefined") {
      targetElement.innerHTML = marked.parse(content);
    } else {
      targetElement.innerHTML = `<pre>${content}</pre>`;
    }
  } finally {
    if (loadingElem) loadingElem.style.display = "none";
  }
}

function openProjectModal(id, defaultTab = "readme") {
  const project = PROJECTS.find(p => p.id === id);
  if (!project || !modal) return;

  lastFocusedElement = document.activeElement;
  currentActiveProjectId = id;
  currentModalTab = defaultTab;

  document.getElementById("modal-cover-img").src = project.cover;
  document.getElementById("modal-icon").textContent = project.icon;
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-subtitle").textContent = project.subtitle;

  document.getElementById("modal-prop-category").innerHTML = `<span class="pill-tag ${project.category}">${project.categoryLabel || "Project"}</span>`;
  document.getElementById("modal-prop-stack").innerHTML = (project.tags || []).map(t => `<span class="pill-tag ${project.category}">${t}</span>`).join("");
  
  const repoElem = document.getElementById("modal-prop-repo");
  repoElem.href = project.githubUrl;
  repoElem.textContent = (project.githubUrl || "").replace("https://", "");

  const demoElem = document.getElementById("modal-prop-demo");
  demoElem.href = project.liveUrl;
  demoElem.textContent = (project.liveUrl || "").replace("https://", "") + " ↗";

  document.getElementById("modal-desc-full").textContent = project.overview || project.excerpt;

  const highlightsList = document.getElementById("modal-highlights-list");
  highlightsList.innerHTML = (project.highlights || [
    "High-performance architecture and modern frontend best practices.",
    "Responsive, accessible, and user-centric design."
  ]).map(h => `<li>${h}</li>`).join("");

  document.getElementById("modal-btn-live").href = project.liveUrl;
  document.getElementById("modal-btn-github").href = project.githubUrl;

  switchModalTab(defaultTab);

  if (project.readmePath) {
    loadAndRenderMarkdown(
      project.readmePath,
      document.getElementById("modal-readme-rendered"),
      project.readmeContent || `# ${project.title}\n\n${project.overview || project.excerpt}\n\n- GitHub: ${project.githubUrl}\n- Live: ${project.liveUrl}`
    );
  } else if (project.readmeContent) {
    const renderedBody = document.getElementById("modal-readme-rendered");
    if (typeof marked !== "undefined") {
      renderedBody.innerHTML = marked.parse(project.readmeContent);
    } else {
      renderedBody.innerHTML = `<pre>${project.readmeContent}</pre>`;
    }
  } else {
    document.getElementById("modal-readme-rendered").innerHTML = `<h1>${project.title}</h1><p>${project.overview || project.excerpt}</p>`;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  announceToScreenReader(`Opened ${project.title} documentation dialog. Press Escape to close.`);
  const closeBtn = modal.querySelector(".modal-close-btn");
  if (closeBtn) closeBtn.focus();
}

function openProjectReadme(id) {
  openProjectModal(id, "readme");
}

function openMainReadme() {
  if (!modal) return;
  document.getElementById("modal-cover-img").src = "./assets/images/cover-banner.svg";
  document.getElementById("modal-icon").textContent = "📄";
  document.getElementById("modal-title").textContent = "FlyRank AI Capstone Workspace";
  document.getElementById("modal-subtitle").textContent = "Master Repository & Project Architecture Documentation";
  document.getElementById("modal-prop-category").innerHTML = `<span class="pill-tag ai">Architecture</span>`;
  document.getElementById("modal-prop-stack").innerHTML = `<span class="pill-tag ai">Architecture</span><span class="pill-tag fullstack">9 Repositories</span>`;
  document.getElementById("modal-prop-repo").href = "https://github.com/AhmadBayu1412/flyrank-ai-capstone";
  document.getElementById("modal-prop-repo").textContent = "github.com/AhmadBayu1412/flyrank-ai-capstone";
  document.getElementById("modal-prop-demo").href = "#";
  document.getElementById("modal-prop-demo").textContent = "Internal Workspace Documentation";
  document.getElementById("modal-desc-full").textContent = "Comprehensive overview of 9 Capstone projects developed during the FlyRank AI Internship.";
  document.getElementById("modal-highlights-list").innerHTML = `<li>Full showcase of 9 capstone projects</li><li>Documented Architecture Decision Records</li><li>Interactive Dev Maze game</li>`;

  switchModalTab("readme");
  loadAndRenderMarkdown("./README.md", document.getElementById("modal-readme-rendered"), "# FlyRank AI Capstone Workspace\n\nFull portfolio and database of 9 flagship projects by Ahmad Bayu Samudera.");

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function openRetrospectiveModal() {
  if (!modal) return;
  document.getElementById("modal-cover-img").src = "./assets/images/cover-banner.svg";
  document.getElementById("modal-icon").textContent = "🧭";
  document.getElementById("modal-title").textContent = "Retrospective: From Prompter to AI Systems Builder";
  document.getElementById("modal-subtitle").textContent = "Final Capstone Checkpoint • General AI Fluency (FL-10)";
  document.getElementById("modal-prop-category").innerHTML = `<span class="pill-tag ai">FL-10 Retrospective</span>`;
  document.getElementById("modal-prop-stack").innerHTML = `<span class="pill-tag ai">196 Hours Logged</span><span class="pill-tag fullstack">ADR & Architecture</span><span class="pill-tag frontend">Human-in-the-Loop</span>`;
  document.getElementById("modal-prop-repo").href = "https://github.com/AhmadBayu1412/flyrank-ai-capstone";
  document.getElementById("modal-prop-repo").textContent = "github.com/AhmadBayu1412/flyrank-ai-capstone";
  document.getElementById("modal-prop-demo").href = "#";
  document.getElementById("modal-prop-demo").textContent = "Final Capstone Retrospective (Assignment 8.2)";
  document.getElementById("modal-desc-full").textContent = "Comprehensive self-reflection on transforming from a casual prompter into an AI Systems Builder over an intensive 8-week engineering sprint (196 hours logged).";
  document.getElementById("modal-highlights-list").innerHTML = `
    <li><strong>Reflection to Week 1 Self:</strong> Work must be done iteratively with designs and ADRs. AI Fluency teaches you that work must be done iteratively.</li>
    <li><strong>3 Transferable Skills:</strong> Architecture Design & Context Engineering, Accessibility & Human Experience, System Guardrails & Data Sanitization.</li>
    <li><strong>Future Roadmap:</strong> Cloud scheduled orchestration on n8n & multi-source semantic filtering.</li>
  `;

  switchModalTab("readme");
  loadAndRenderMarkdown("./RETROSPECTIVE.md", document.getElementById("modal-readme-rendered"), "# Retrospective: From Prompter to AI Systems Builder\n\n- **Author:** Ahmad Bayu Samudera\n- **Track:** General AI Fluency\n- **Submission:** Final Capstone Checkpoint (Assignment 8.2 / FL-10)\n- **Hours Log:** 4 hours/day = 28 hours/week x 7 weeks = 196 hours");

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function switchModalTab(tab) {
  currentModalTab = tab;
  const readmeBtn = document.getElementById("tab-readme-btn");
  const specsBtn = document.getElementById("tab-specs-btn");
  const readmeView = document.getElementById("modal-readme-container");
  const specsView = document.getElementById("modal-specs-container");

  if (tab === "readme") {
    if (readmeBtn) readmeBtn.classList.add("active");
    if (specsBtn) specsBtn.classList.remove("active");
    if (readmeView) readmeView.style.display = "block";
    if (specsView) specsView.style.display = "none";
  } else {
    if (readmeBtn) readmeBtn.classList.remove("active");
    if (specsBtn) specsBtn.classList.add("active");
    if (readmeView) readmeView.style.display = "none";
    if (specsView) specsView.style.display = "block";
  }
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
  announceToScreenReader("Dialog closed.");
  if (lastFocusedElement && lastFocusedElement.focus) {
    lastFocusedElement.focus();
  }
}

function handleBackdropClick(event) {
  if (event.target === modal) closeModal();
}

function openRandomProject() {
  const randomIndex = Math.floor(Math.random() * PROJECTS.length);
  openProjectModal(PROJECTS[randomIndex].id);
}

// =============================================================================
// CONTACT MODAL
// =============================================================================
function openContactModal() {
  if (!contactModal) return;
  lastFocusedElement = document.activeElement;
  contactModal.classList.add("open");
  document.body.style.overflow = "hidden";
  announceToScreenReader("Contact dialog opened. Press Escape to close.");
  const closeBtn = contactModal.querySelector(".modal-close-btn");
  if (closeBtn) closeBtn.focus();
}

function closeContactModal() {
  if (!contactModal) return;
  contactModal.classList.remove("open");
  document.body.style.overflow = "";
  announceToScreenReader("Contact dialog closed.");
  if (lastFocusedElement && lastFocusedElement.focus) {
    lastFocusedElement.focus();
  }
}

function handleContactBackdropClick(e) {
  if (e.target === contactModal) closeContactModal();
}

function copyEmailToClipboard() {
  const email = "ahmadbayusamudera01@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    const el = document.getElementById("contact-email-text");
    if (el) el.textContent = `${email} (Copied!)`;
    showToast(`Email ${email} copied to clipboard!`);
    setTimeout(() => {
      if (el) el.textContent = "Click to copy email";
    }, 3000);
  });
}

// =============================================================================
// DEV MAZE MINI GAME ENGINE
// =============================================================================
const MAZE_GRID = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

let playerPos = { r: 1, c: 1 };
let goalPos = { r: 7, c: 13 };
let collectibleItems = [];
let collectedScore = 0;
let moveCount = 0;

function initDevMazeGame() {
  const canvas = document.getElementById("dev-maze-canvas");
  if (!canvas) return;

  playerPos = { r: 1, c: 1 };
  collectedScore = 0;
  moveCount = 0;

  collectibleItems = [
    { r: 1, c: 5, icon: "⚛️", collected: false },
    { r: 3, c: 7, icon: "🤖", collected: false },
    { r: 5, c: 3, icon: "⚡", collected: false },
    { r: 5, c: 9, icon: "🌐", collected: false },
    { r: 7, c: 7, icon: "🏛", collected: false }
  ];

  updateGameStats();
  const winScreen = document.getElementById("game-win-screen");
  if (winScreen) winScreen.style.display = "none";

  drawDevMaze();
}

function updateGameStats() {
  const scoreElem = document.getElementById("game-score");
  const moveElem = document.getElementById("game-moves");
  if (scoreElem) scoreElem.textContent = `${collectedScore} / ${collectibleItems.length}`;
  if (moveElem) moveElem.textContent = moveCount;
}

function drawDevMaze() {
  const canvas = document.getElementById("dev-maze-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const cellW = canvas.width / MAZE_GRID[0].length;
  const cellH = canvas.height / MAZE_GRID.length;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = "#0c0c0e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw Grid Walls
  for (let r = 0; r < MAZE_GRID.length; r++) {
    for (let c = 0; c < MAZE_GRID[0].length; c++) {
      if (MAZE_GRID[r][c] === 1) {
        ctx.fillStyle = "#1e1e24";
        ctx.fillRect(c * cellW, r * cellH, cellW, cellH);
        ctx.strokeStyle = "#27272a";
        ctx.lineWidth = 1;
        ctx.strokeRect(c * cellW, r * cellH, cellW, cellH);
      }
    }
  }

  // Draw Collectibles
  ctx.font = "16px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  collectibleItems.forEach(item => {
    if (!item.collected) {
      ctx.fillText(item.icon, item.c * cellW + cellW / 2, item.r * cellH + cellH / 2);
    }
  });

  // Draw Goal
  ctx.fillStyle = "#10b981";
  ctx.fillRect(goalPos.c * cellW + 4, goalPos.r * cellH + 4, cellW - 8, cellH - 8);
  ctx.fillText("🏁", goalPos.c * cellW + cellW / 2, goalPos.r * cellH + cellH / 2);

  // Draw Player
  ctx.fillText("👨‍💻", playerPos.c * cellW + cellW / 2, playerPos.r * cellH + cellH / 2);
}

function handleGameDirection(dir) {
  let nextR = playerPos.r;
  let nextC = playerPos.c;

  if (dir === "up") nextR--;
  if (dir === "down") nextR++;
  if (dir === "left") nextC--;
  if (dir === "right") nextC++;

  // Check bounds and wall
  if (nextR >= 0 && nextR < MAZE_GRID.length && nextC >= 0 && nextC < MAZE_GRID[0].length) {
    if (MAZE_GRID[nextR][nextC] === 0) {
      playerPos.r = nextR;
      playerPos.c = nextC;
      moveCount++;

      // Check Collectibles
      collectibleItems.forEach(item => {
        if (!item.collected && item.r === playerPos.r && item.c === playerPos.c) {
          item.collected = true;
          collectedScore++;
          showToast(`Skill Collected! (${collectedScore}/${collectibleItems.length})`);
        }
      });

      updateGameStats();
      drawDevMaze();

      // Check Win Condition
      if (playerPos.r === goalPos.r && playerPos.c === goalPos.c) {
        const winScreen = document.getElementById("game-win-screen");
        if (winScreen) winScreen.style.display = "flex";
      }
    }
  }
}

// =============================================================================
// GLOBAL SHORTCUTS & UTILITIES
// =============================================================================
function setupKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal && modal.classList.contains("open")) closeModal();
      if (contactModal && contactModal.classList.contains("open")) closeContactModal();
      const authModal = document.getElementById("admin-auth-modal");
      if (authModal && authModal.classList.contains("open")) closeAdminAuthModal();
      const crudModal = document.getElementById("project-crud-modal");
      if (crudModal && crudModal.classList.contains("open")) closeProjectCrudModal();
      const catModal = document.getElementById("category-crud-modal");
      if (catModal && catModal.classList.contains("open")) closeCategoryCrudModal();
      if (globalSidebar && globalSidebar.classList.contains("mobile-open")) toggleSidebar();
    }
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      switchPageView("capstone");
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    }
    // Arrow keys for maze game
    if (currentActiveView === "game" && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(e.key)) {
      if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") handleGameDirection("up");
      if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") handleGameDirection("down");
      if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") handleGameDirection("left");
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") handleGameDirection("right");
    }
  });
}

function initTheme() {
  const themeBtn = document.getElementById("btn-theme");
  const savedTheme = localStorage.getItem("flyrank_theme");
  
  if (savedTheme === "light") {
    document.body.classList.add("notion-light");
    if (themeBtn) themeBtn.textContent = "☀️";
  }

  if (!themeBtn) return;

  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("notion-light");
    themeBtn.textContent = isLight ? "☀️" : "🌙";
    localStorage.setItem("flyrank_theme", isLight ? "light" : "dark");
    showToast(isLight ? "Switched to Notion Light theme" : "Switched to Notion Dark theme");
  });
}

function setupCoverBannerActions() {
  const changeCoverBtn = document.getElementById("btn-change-cover");
  const repoBtn = document.getElementById("btn-reposition");
  const coverImg = document.getElementById("cover-image");

  if (changeCoverBtn && coverImg) {
    changeCoverBtn.addEventListener("click", () => {
      currentCoverIndex = (currentCoverIndex + 1) % COVER_PRESETS.length;
      coverImg.src = COVER_PRESETS[currentCoverIndex];
      showToast("Workspace cover banner updated");
    });
  }

  if (repoBtn && coverImg) {
    repoBtn.addEventListener("click", () => {
      coverImg.style.objectPosition = coverImg.style.objectPosition === "center center" ? "center top" : "center center";
      showToast("Cover position adjusted");
    });
  }
}

// =============================================================================
// SHARE WORKSPACE & SOCIAL CHANNELS
// =============================================================================
const SHARE_METADATA = {
  title: "Ahmad Bayu Samudera — Frontend Portfolio & FlyRank AI Capstone",
  text: "Explore Ahmad Bayu Samudera's Capstone Showcase: 9 AI agents, real-time telemetry observatories, and interactive Dev Maze game! 🚀",
  url: "https://flyrank-ai-capstone.netlify.app/"
};

function setupShareButton() {
  const shareBtn = document.getElementById("btn-share");
  if (!shareBtn) return;

  shareBtn.addEventListener("click", async () => {
    // If Web Share API is available (supports direct share to WhatsApp, etc. with image & text)
    if (navigator.share) {
      try {
        await navigator.share({
          title: SHARE_METADATA.title,
          text: SHARE_METADATA.text,
          url: SHARE_METADATA.url
        });
        showToast("Shared successfully! ✨");
        return;
      } catch (err) {
        if (err.name !== "AbortError") {
          openShareModal();
        }
      }
    } else {
      openShareModal();
    }
  });
}

function openShareModal() {
  const modal = document.getElementById("share-modal");
  if (!modal) return;
  const linkInput = document.getElementById("share-link-input");
  if (linkInput) {
    linkInput.value = SHARE_METADATA.url;
  }
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeShareModal() {
  const modal = document.getElementById("share-modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

function handleShareBackdropClick(e) {
  const modal = document.getElementById("share-modal");
  if (e.target === modal) closeShareModal();
}

function copyShareLink() {
  navigator.clipboard.writeText(SHARE_METADATA.url).then(() => {
    showToast("Workspace link copied to clipboard! 📋");
    closeShareModal();
  }).catch(() => {
    showToast("Failed to copy link.");
  });
}

function shareToPlatform(platform) {
  const url = encodeURIComponent(SHARE_METADATA.url);
  const text = encodeURIComponent(SHARE_METADATA.text);

  let targetUrl = "";

  switch (platform) {
    case "whatsapp":
      targetUrl = `https://api.whatsapp.com/send?text=${text}%0A%0A${url}`;
      break;
    case "linkedin":
      targetUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
      break;
    case "twitter":
      targetUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      break;
    case "telegram":
      targetUrl = `https://t.me/share/url?url=${url}&text=${text}`;
      break;
    default:
      copyShareLink();
      return;
  }

  if (targetUrl) {
    window.open(targetUrl, "_blank", "noopener,noreferrer,width=600,height=500");
  }
}

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
