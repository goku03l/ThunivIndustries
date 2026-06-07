/* ═══════════════════════════════════════════════════════════════
   RESUME CONFIG  the ONLY file you ever edit.

   RULES:
   • Every field marked "(optional)" can be deleted entirely.
   • Sections (builds, principles, timeline, looking) can be
     empty arrays / omitted  the renderer skips them gracefully.
   • Builds: only `title` is required. Add as many as you want.
   • New build fields supported out-of-the-box:
       url      – link shown on card
       tags     – string array, rendered as chips
       status   – e.g. "Live", "WIP", "Archived"
   • labels   – (optional) override section heading text
   • identity – add linkedin / website / stampYear / stampLabel
═══════════════════════════════════════════════════════════════ */

const CONFIG = {

  /* ── IDENTITY ─────────────────────────────────────────── */
  identity: {
    name:       "Gokul Kumar",
    eyebrow:    "Founder Office · Chief of Staff · 0→1",   // (optional)
    tagline:    "I know how to build things from scratch, but I want to learn how to survive the early days. I’m looking to lock into a startup bunker with a founder, act as a force multiplier for their vision, and earn the scars it takes to scale a company from the ground up.", // (optional)
    email:      "gokul@thunivin.com",                      // (optional)
    phone:      "9884990139",                              // (optional)
    location:   "Gurugram, India",                         // (optional)
    github:     "github.com/goku03l",                      // (optional)
    linkedin:  "linkedin.com/in/goku03l/",            // (optional)
    website:   "thunivin.com",                          // (optional)
    stampYear: "2026",                                  // (optional  defaults to 2025)
    stampLabel:"Open to\nopportunities",                // (optional)
  },

  /* ── ABOUT  any number of paragraphs ────────────────── */
  about: [
    { text: "I am a generalist builder who works across code, hardware, and circuits. But while I love designing components, and manage projects, my engineering instinct ultimately pulled me toward process optimization. Legacy manufacturing is slow and inefficient. To me, a sluggish corporate process is just a poorly engineered machine. I step in to clear the noise, eliminate structural bottlenecks, and force traditional industries to modernize through AI. I don’t just write software or design parts. I fix the macro-machine", bold: true },
    { text: "I write code, define products, run sprints, and own outcomes  often all in the same week. Across LLM tooling, NLP, and ML systems  mostly with no playbook and no safety net." },
    { text: "Mechanical engineer by degree. AI practitioner by choice. Builder by instinct.", italic: true },
  ],

  /* ── BUILDS  add as many as you want ────────────────────
     Required:  title
     Optional:  subtitle, story, company, impact, stack,
                role, url, tags, status
  ───────────────────────────────────────────────────────── */

  layout: {
    sidebarWidth: "280px",  // 210px default → go up to ~320px max before it crowds the main
  },
  builds: [
    {
      title:    "IntelliCAD",
      subtitle: "LLM-powered Text to CAD generation",
      story:    "Just wanted to try things out of my curiosity.,Engineers waste thousands of hours clicking through CAD tools to model ideas they already have in their heads. I fixed that. IntelliCAD lets you describe a 3D geometry in plain language and get a ready-madela CAD file  no manual sketches, no constraint dragging. You talk to it like a peer, it ships the geometry. The interface CAD software should have built a decade ago.",
      company:  "Personal",
      stack:    "LLMs · Prompt Eng · Python · OpenAI APIs",
      role:     "Personal Project",
      links: [                                  // (optional)  add as many as you want
        { url: "https://github.com/goku03l/IntelliCAD", label: "GitHub" },
        { url: "https://intellicad-ap6znq2zrc7bw7zzxddkru.streamlit.app/",label: "Application" },
        { url: "https://youtu.be/56AVSxNFZ3c?si=B2PBN5J1O2j2utpr",label: "Demo Video" },
      ],
    },
    {
      title:    "ForgeAI",
      subtitle: "LLM-powered document & report generation",
      story:    "Nobody asked me to build this. I spotted the pain point, recruited 3 engineers without a mandate, framed the problem from scratch, and shipped an LLM system that replaced a manual error-prone process across the entire engineering org.",
      company:  "Maruti Suzuki · 2025",
      impact:   "~20,000 man-hours saved",
      stack:    "LLMs · Prompt Eng · Python · OpenAI APIs",
      role:     "Conceived · Resourced · Shipped",
    },
    {
      title:    "Smart Pulse",
      subtitle: "Social media sentiment & insight platform",
      story:    "Turned unstructured social media noise into dashboards business teams open every morning. Owned the full arc  PRD, KPIs, UAT, post-launch adoption.",
      company:  "Maruti Suzuki · 2025",
      impact:   "2,500+ internal users",
      stack:    "NLP · Sentiment Classification · Analytics",
      role:     "Product Owner · PM · Adoption Lead",
    },
    {
      title:    "Election Pulse",
      subtitle: "Social media sentiment & insight platform for Elections",
      story:    "A freelance project for a Political Party. Turned unstructured social media noise into dashboards business teams open every morning.",
      company:  "Freelance",
      stack:    "NLP · Sentiment Classification · Analytics · X API · Youtube API",
      role:     "Developer · Freelance · Business Analyst",
    },
    {
      title:    "ML Clash Detection",
      subtitle: "Automated vehicle design validation",
      story:    "Replaced manual triage of thousands of vehicle design clashes. Built an ML classifier that auto-categorised every clash  cutting lead time by 70% and manual effort by 95%.",
      company:  "Renault Nissan Tech · 2023–25",
      impact:   "70% faster · 95% less manual",
      stack:    "Python · Scikit-learn · 3DEXPERIENCE",
      role:     "Built end-to-end",
    },
    {
      title:    "DrawDIFF",
      subtitle: "Compare two similar drawings, and do version change analysis",
      story:    "Attempt to challenge my organisation to solve this usecase, In high-stakes engineering, a missed revision doesn't just slow things down  it can cost millions. DrawingDIFF kills the 'spot the difference' problem in drawing reviews entirely. Upload two revisions, get a pixel-perfect overlay with every moved line and modified dimension highlighted in high contrast, plus an auto-generated audit trail ready to export. Built for environments where a misread millimetre has real consequences.",
      company:  "Personal",
      stack:    "LLMs · Prompt Eng · Python · OpenAI APIs",
      role:     "Personal Project",
      links: [                                  // (optional)  add as many as you want
        { url: "https://github.com/goku03l/DrawingDIFF", label: "GitHub" },
        { url: "https://drawingdiff-dvaacmnaapwuvdhzt7zvo5.streamlit.app/",label: "Application" },
        { url: "https://youtu.be/MfWPskO2LjM?si=jt7FonFJiFlNe4y",label: "Demo Video" },
      ],
    },


  ],

  /* ── PRINCIPLES  any number ──────────────────────────── */
  principles: [
    { headline: "Start with the problem.",  body: "Most of what I've built began as something I noticed was broken not a task assigned to me. ForgeAI didn't have a ticket." },
    { headline: "Comfortable with fog.",    body: "At Maruti,Renault, there was no AI team, no prior art, no template, No process. I figured it out. Founder office roles should feel the same." },
    { headline: "Close the loop.",          body: "Involved myself across all the stages from requirment collection to delivery" },
    { headline: "Code + boardroom.",        body: "I can go from whiteboard to working prototype and brief a business head on outcomes the next morning." },
  ],

  /* ── TIMELINE  any number of entries ────────────────── */
  timeline: [
    { period: "Apr 2025 → now",      role: "Technical Program Manager  AI & ML",       org: "Maruti Suzuki India Limited, Gurugram" },
    { period: "Jun 2023 – Apr 2025", role: "Digital Transformation Analyst  PLM & AI", org: "Renault Nissan TBCI (GCC), Chennai" },
    { period: "2019 – 2023",         role: "B.Tech Mechanical Engineering · 9.05 CGPA", org: "B.S. Abdur Rahman Crescent Institute, Chennai" },
  ],

  /* ── LOOKING  entire block optional ─────────────────── */
  looking: {
    headline: "A Founder Office, or 0→1 execution role at an early-stage startup or builder, strategist, operator, all at once.",
    body:     "Ideally AI/ML, B2B SaaS, or deep-tech, but the problem matters more than the sector. I want to be close to the founding team, own real outcomes, and eventually build my own.",
    cta:      "If you're a founder who needs someone who can think with you on Monday and ship with you on Friday, let's talk.",
  },

  /* ── LABELS  (optional) override section headings ───── */
  // labels: {
  //   builds:     "Things I've Actually Built",
  //   principles: "How I Think & Work",
  //   looking:    "What I'm Looking For",
  // },

};