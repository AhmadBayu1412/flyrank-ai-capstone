# Retrospective: From Prompter to AI Systems Builder

**Author:** Ahmad Bayu Samudera  
**Track:** General AI Fluency  
**Submission:** Final Capstone Checkpoint (Assignment 8.2 / FL-10)  
**Hours Log:** 4 hours/day = 28 hours/week x 7 weeks = 196 hours  

---

### **Reflection Message to My Week 1 Self**  

If I had the chance to send a message to my Week 1 self, it would be:  
> *"Learning AI Fluency does not guarantee you an immediate job, nor does it guarantee you will understand how to build an application from scratch to mastery instantly. AI Fluency teaches you that work must be done iteratively, and that you need to create a design/ADR before building a real-world application. So keep learning AI Fluency. Not only because it is essential in keeping you in control as a human, but also because it will guide you to understand how to work with AI efficiently, effectively, ethically, and safely. Don't expect an application to be built with just one 'magic prompt'."*

---

### 1. Initial Plan vs. Reality on the Ground (Planned vs. Reality)

Starting in Week 1, I was immediately confronted with the reality that 'building applications is complex,' and it wasn't at all like what I initially imagined. I thought I would learn step by step, understanding JavaScript, React, Next.js, and other tools from scratch, and then build real-world applications with a solid grasp of the fundamentals.

Over time, I grew accustomed to the pace and focused on the assigned tasks:
- **Week 1 – Week 6 (Portfolio & Engineering Mindset):** Reconstructing how I view a portfolio through the **Portfolio** project. A good portfolio does not merely display a profile, experience, and contact information; a good portfolio is honest, showcases the work process, and explains what we actually built.
- **Week 5 – Week 6 (Nexus AI & NusantaraBrief AI):** Through the **Nexus AI** project, I learned how to build a chatbot like ChatGPT and Claude, and through **NusantaraBrief AI**, I learned how to build an automated news workflow. I initially never imagined that creating something extraordinary with AI was this achievable. I learned how to handle errors and persevere to build applications that are useful and user-friendly.
- **Week 7 – Week 8 (Resilience, Testing, & Deployment):** I learned the stages of refining applications built with AI assistance, whether performing testing or deploying to Netlify and Vercel.

I learned not to settle for what has just been built and to continuously iterate and refine. Moving forward, my goal is to build AI-assisted applications effectively, efficiently, safely, and with full accountability.

---

### 2. Three Most Valuable Lessons (*Transferable Skills*)

Across the series of FlyRank assignments from Week 1 to Week 8, there are several valuable skills I learned:

1. **Architecture Design & Context Engineering (ADR & Specs):**  
   Through drafting ADRs (Architecture Decision Records), requirements documents, implementation plans, and `agent.md`, I learned that preparation before building an application is critical. Steering an AI is no simple task; everything must be verified, especially the business logic and UI/UX. While AI understands what we ask, it tends to take the easiest or most concise route. Furthermore, AI has context window limitations. ADRs and requirements documents help the AI focus only on the specific files needed to understand the project at hand.

2. **Accessibility & Human-Centered Experience (Mobile Testing & Crit):**  
   No matter how advanced the generated code is, an AI only knows whether the code runs or throws an error. It cannot truly understand how the user interface (UI) and user experience (UX) feel when experienced in a real-world application, or whether it meets user needs. If the interface is cluttered or confusing, the application won't be usable and will hurt the product. From this, I learned that UI and UX must always be refined and tested from the perspective of real human users.

3. **System Guardrails & Data Sanitization:**  
   AI outputs are not always consistent, safe, or clean. Malformed formatting or security gaps can easily slip past an AI. Therefore, I must explicitly define test pipelines, enforce security guardrails, handle error states, and refactor code to ensure the final output is clean, robust, and verifiable.

---

### 3. Future Roadmap (*What I'd Build Next*)

After completing this Capstone milestone, my development roadmap—specifically for **NusantaraBrief AI**—includes:

1. **Cloud Migration & Scheduled Orchestration:** Migrating *NusantaraBrief AI* from the local environment to n8n Cloud (scheduled) so that the news briefing workflow runs autonomously without depending on my local machine being turned on.

2. **Multi-Source Semantic Filtering & Scoring:** Expanding the system's ability to curate news from more sources, categorize items, and adjust relevance weighting so it surfaces only high-signal, credible news useful for decision-making.

Overall, this 8-week journey transformed me: from a casual prompter into an **AI Systems Builder** who thinks in terms of architecture, resilience, and real-world impact.