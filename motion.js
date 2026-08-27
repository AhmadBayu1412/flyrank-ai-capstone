/**
 * Motion One Animation Module
 * Framer Motion-style animations for vanilla JS (powered by Motion One)
 * Provides smooth, spring-based animations for all UI interactions.
 */

const ANIMATION_PRESETS = {
  // Page transitions
  pageEnter: { opacity: [0, 1], y: [12, 0] },
  pageExit: { opacity: [1, 0], y: [0, -8] },

  // Cards
  cardEnter: { opacity: [0, 1], y: [24, 0], scale: [0.96, 1] },
  cardHover: { scale: [1, 1.02], boxShadow: ["0 1px 2px rgba(0,0,0,0.3)", "0 8px 24px rgba(0,0,0,0.5)"] },
  cardLeave: { opacity: [1, 0], scale: [1, 0.96] },

  // Modal
  modalEnter: { opacity: [0, 1], scale: [0.94, 1], y: [16, 0] },
  modalLeave: { opacity: [1, 0], scale: [0.96, 0.94], y: [0, 8] },

  // Sidebar backdrop
  backdropEnter: { opacity: [0, 1] },
  backdropLeave: { opacity: [1, 0] },

  // Toast
  toastEnter: { opacity: [0, 1], y: [24, 0] },
  toastLeave: { opacity: [1, 0], y: [0, 24] },

  // Stagger delays
  getStaggerDelay: (index, base = 60) => index * base,
};

// =============================================================================
// PAGE TRANSITION ANIMATIONS
// =============================================================================
async function animatePageEnter(panel) {
  if (!panel || typeof Motion === "undefined") {
    if (panel) panel.style.display = "block";
    return;
  }
  panel.style.display = "block";
  panel.style.opacity = "0";
  panel.style.transform = "translateY(12px)";

  await Motion.animate(panel, ANIMATION_PRESETS.pageEnter, {
    duration: 280,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  }).finished;
  panel.style.opacity = "";
  panel.style.transform = "";
}

async function animatePageExit(panel) {
  if (!panel || typeof Motion === "undefined") {
    if (panel) panel.style.display = "none";
    return;
  }
  try {
    await Motion.animate(panel, ANIMATION_PRESETS.pageExit, {
      duration: 180,
      easing: "cubic-bezier(0.4, 0, 1, 1)",
    }).finished;
  } catch (e) {
    // ignore
  }
  panel.style.display = "none";
  panel.style.opacity = "";
  panel.style.transform = "";
}

// =============================================================================
// CARD ANIMATIONS
// =============================================================================
async function animateCardEntrance(cards) {
  if (!cards || cards.length === 0 || typeof Motion === "undefined") return;

  const anims = [];
  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(24px) scale(0.96)";

    const delay = ANIMATION_PRESETS.getStaggerDelay(i, 50);
    const anim = Motion.animate(
      card,
      { opacity: [0, 1], y: [24, 0], scale: [0.96, 1] },
      {
        duration: 320,
        delay: delay / 1000,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      }
    );
    anims.push(anim);
  });

  await Promise.all(anims.map(a => a.finished).catch(() => {}));
  cards.forEach(card => {
    card.style.opacity = "";
    card.style.transform = "";
  });
}

function setupCardHoverAnimations() {
  if (typeof Motion === "undefined") return;

  document.querySelectorAll(".notion-card").forEach(card => {
    // Remove inline styles on mouseout
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.boxShadow = "";
    });

    card.addEventListener("mouseenter", () => {
      // Subtle lift effect via CSS transition (more performant than JS)
      card.style.transform = "translateY(-2px)";
      card.style.boxShadow = "var(--shadow-md)";
    });
  });
}

// =============================================================================
// MODAL ANIMATIONS
// =============================================================================
async function animateModalEnter(modal) {
  if (!modal || typeof Motion === "undefined") {
    if (modal) {
      modal.classList.add("open");
      modal.style.opacity = "1";
      modal.style.transform = "";
    }
    return;
  }

  const container = modal.querySelector(".notion-modal-container");
  if (!container) {
    modal.classList.add("open");
    return;
  }

  // Animate backdrop
  await Motion.animate(modal, { opacity: [0, 1] }, {
    duration: 200,
    easing: "ease-out",
  }).finished.catch(() => {});

  // Animate container
  container.style.opacity = "0";
  container.style.transform = "translateY(16px) scale(0.94)";

  await Motion.animate(container, ANIMATION_PRESETS.modalEnter, {
    duration: 280,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  }).finished.catch(() => {});

  container.style.opacity = "";
  container.style.transform = "";
  modal.classList.add("open");
}

async function animateModalLeave(modal) {
  if (!modal || typeof Motion === "undefined") {
    if (modal) modal.classList.remove("open");
    return;
  }

  const container = modal.querySelector(".notion-modal-container");
  const anims = [];

  if (container) {
    container.style.opacity = "1";
    container.style.transform = "translateY(0) scale(1)";
    anims.push(
      Motion.animate(container, ANIMATION_PRESETS.modalLeave, {
        duration: 180,
        easing: "cubic-bezier(0.4, 0, 1, 1)",
      }).finished.catch(() => {})
    );
  }

  anims.push(
    Motion.animate(modal, { opacity: [1, 0] }, {
      duration: 200,
      easing: "ease-in",
    }).finished.catch(() => {})
  );

  await Promise.all(anims);
  modal.classList.remove("open");
  if (container) {
    container.style.opacity = "";
    container.style.transform = "";
  }
}

// =============================================================================
// TOAST ANIMATIONS
// =============================================================================
let toastHideTimeout = null;

async function animateToastEnter(toast) {
  if (!toast || typeof Motion === "undefined") {
    if (toast) {
      toast.classList.add("show");
      toast.style.transform = "";
    }
    return;
  }

  toast.classList.add("show");
  toast.style.opacity = "0";
  toast.style.transform = "translateX(-50%) translateY(24px)";

  await Motion.animate(toast, ANIMATION_PRESETS.toastEnter, {
    duration: 300,
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  }).finished.catch(() => {});

  toast.style.opacity = "";
  toast.style.transform = "";
}

async function animateToastLeave(toast) {
  if (!toast || typeof Motion === "undefined") {
    if (toast) toast.classList.remove("show");
    return;
  }

  toast.style.opacity = "1";
  toast.style.transform = "translateX(-50%) translateY(0)";

  await Motion.animate(toast, ANIMATION_PRESETS.toastLeave, {
    duration: 250,
    easing: "cubic-bezier(0.4, 0, 1, 1)",
  }).finished.catch(() => {});

  toast.classList.remove("show");
  toast.style.opacity = "";
  toast.style.transform = "";
}

function showToastAnimated(msg) {
  if (!toast) return;
  if (toastHideTimeout) clearTimeout(toastHideTimeout);
  toast.textContent = msg;
  animateToastEnter(toast);
  toastHideTimeout = setTimeout(() => {
    animateToastLeave(toast);
  }, 2500);
}

// =============================================================================
// ACCORDION ANIMATIONS
// =============================================================================
async function animateAccordionOpen(panel) {
  if (!panel || typeof Motion === "undefined") {
    if (panel) {
      panel.style.display = "flex";
      panel.style.maxHeight = "none";
    }
    return;
  }

  panel.style.display = "flex";
  panel.style.overflow = "hidden";
  panel.style.maxHeight = "0";
  panel.style.opacity = "0";

  // Force reflow
  panel.getBoundingClientRect();

  await Motion.animate(
    panel,
    { maxHeight: [0, panel.scrollHeight + "px"], opacity: [0, 1] },
    {
      duration: 280,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
    }
  ).finished.catch(() => {});

  panel.style.maxHeight = "none";
  panel.style.overflow = "";
  panel.style.opacity = "";
}

async function animateAccordionClose(panel) {
  if (!panel || typeof Motion === "undefined") {
    if (panel) panel.style.display = "none";
    return;
  }

  panel.style.maxHeight = panel.scrollHeight + "px";
  panel.style.overflow = "hidden";

  await Motion.animate(
    panel,
    { maxHeight: [panel.scrollHeight + "px", 0], opacity: [1, 0] },
    {
      duration: 220,
      easing: "cubic-bezier(0.4, 0, 1, 1)",
    }
  ).finished.catch(() => {});

  panel.style.display = "none";
  panel.style.maxHeight = "";
  panel.style.overflow = "";
  panel.style.opacity = "";
}

// =============================================================================
// SCROLL ANIMATIONS (Intersection Observer)
// =============================================================================
let scrollObserver = null;

function setupScrollRevealAnimations() {
  if (typeof Motion === "undefined" || typeof IntersectionObserver === "undefined") return;

  if (scrollObserver) scrollObserver.disconnect();

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.opacity = "0";
          el.style.transform = "translateY(20px)";
          Motion.animate(
            el,
            { opacity: [0, 1], y: [20, 0] },
            {
              duration: 400,
              easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            }
          ).finished.then(() => {
            el.style.opacity = "";
            el.style.transform = "";
          });
          scrollObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  // Observe timeline nodes, bento cards, etc.
  document.querySelectorAll(
    ".timeline-node, .profile-card-box, .skills-card-box, .retrospective-spotlight-card, .hero-visual-card, .hero-narrative-card"
  ).forEach(el => {
    scrollObserver.observe(el);
  });
}

// =============================================================================
// MAZE GAME ANIMATIONS
// =============================================================================
function animateMazePlayer(canvas, fromR, fromC, toR, toC) {
  if (typeof Motion === "undefined" || !canvas) return;

  const cellW = canvas.width / 15; // MAZE_GRID columns
  const cellH = canvas.height / 9; // MAZE_GRID rows

  const fromX = fromC * cellW + cellW / 2;
  const fromY = fromR * cellH + cellH / 2;
  const toX = toC * cellW + cellW / 2;
  const toY = toR * cellH + cellH / 2;

  // Motion One doesn't directly support canvas text animation easily,
  // so we use a simple CSS-based approach instead via requestAnimationFrame
  // The canvas redraws happen at 60fps via drawDevMaze()
  // For a smoother feel, we draw a trail effect
}

// =============================================================================
// UTILITY: WAIT FOR MOTION LIBRARY
// =============================================================================
function waitForMotion(timeout = 3000) {
  return new Promise((resolve) => {
    if (typeof Motion !== "undefined") {
      resolve();
      return;
    }
    const start = Date.now();
    const check = setInterval(() => {
      if (typeof Motion !== "undefined") {
        clearInterval(check);
        resolve();
        return;
      }
      if (Date.now() - start > timeout) {
        clearInterval(check);
        resolve(); // proceed without motion
      }
    }, 50);
  });
}

// =============================================================================
// WRAPPER: Replace showToast with animated version
// =============================================================================
function initMotionAnimations() {
  waitForMotion().then(() => {
    if (typeof Motion === "undefined") {
      console.warn("Motion One not loaded — animations disabled");
      return;
    }

    // Replace showToast globally
    const originalShowToast = window.showToast;
    window.showToast = function (msg) {
      showToastAnimated(msg);
    };

    // Setup card hover
    setupCardHoverAnimations();

    // Setup scroll reveal
    setupScrollRevealAnimations();

    // Re-setup hover after card renders
    const origRenderProjects = window.renderProjects;
    if (origRenderProjects) {
      window.renderProjects = function () {
        origRenderProjects();
        setTimeout(() => {
          setupCardHoverAnimations();
          // Animate new cards
          const cards = document.querySelectorAll("#projects-grid .notion-card");
          animateCardEntrance(Array.from(cards));
        }, 50);
      };
    }

    const origRenderFeatured = window.renderFeaturedProjects;
    if (origRenderFeatured) {
      window.renderFeaturedProjects = function () {
        origRenderFeatured();
        setTimeout(() => {
          setupCardHoverAnimations();
          const cards = document.querySelectorAll(".featured-cards-grid .notion-card");
          animateCardEntrance(Array.from(cards));
        }, 50);
      };
    }

    console.log("Motion One animations initialized");
  });
}
