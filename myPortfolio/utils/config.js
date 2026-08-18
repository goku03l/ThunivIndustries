const RESUME = {

  /* ── HEADER ─────────────────────────────────────── */
  name: "Gokul Kumar",
  tagline: "Product Manager | Founder Office| 0-to-1 Builder",

  contact: [
    { label: "Email",    value: "kgokul371c@gmail.com",        href: "mailto:kgokul371c@gmail.com" },
    { label: "Phone",    value: "+91 98849 90139",           href: "tel:+919884990139" },
    { label: "Location", value: "Gurugram, India",           href: null },
    { label: "LinkedIn", value: "linkedin.com/in/goku03l",   href: "https://linkedin.com/in/goku03l" },
    { label: "GitHub",   value: "github.com/goku03l",        href: "https://github.com/goku03l" },
    { label: "Portfolio",  value: "Portfolio:thunivin.com",              href: "https://thunivin.com/myPortfolio" },
  ],

  /* ── SUMMARY ─────────────────────────────────────── */
  summary: [
    "Generalist builder and technical program manager working across code, hardware, and AI systems. Specializes in 0-to-1 execution - taking a fuzzy problem and shipping a working solution, often without a playbook or prior art. Experienced in AI/ML product development, LLM tooling, NLP systems, process optimization, and cross-functional ownership from requirements to post-launch adoption. Seeking a Founder Office, Chief of Staff, or 0-to-1 execution role at an early-stage startup in AI/ML, B2B SaaS, or deep-tech where I can act as a force multiplier for the founding team's vision.",
    "Mechanical engineer by degree. AI practitioner by choice. Builder by instinct.",
    "<strong>Looking for Corporate to StartUp transition</strong>"
  ],

  /* ── WORK EXPERIENCE ─────────────────────────────── */
  experience: [
    {
      title:  "Product Manager - Engineering Intelligence",
      org:    "Maruti Suzuki India Limited, Gurugram",
      period: "Apr 2025 - Present",
      bullets: [
        "Drove digital transformation in a legacy automotive environment by taking 0-1 ownership of the AI/ML product roadmap—translating complex business needs into technical requirements and managing cross-functional teams and external vendors.",
        "Conceptualized, built, and launched 2 enterprise platforms end-to-end within 12 months: Smart Pulse (social sentiment analysis) and Forge AI (GenAI-powered test report automation).",
        "Led complete product lifecycles—from PRD authoring and KPI definition to UAT and change management—successfully onboarding 2,500+ legacy users and replacing decades-old manual workflows.",
      ],
    },
    {
      title:  "Digital Transformation Analyst - PLM and AI",
      org:    "Renault Nissan TBCI (Global Capability Centre), Chennai",
      period: "Jun 2023 - Apr 2025",
      bullets: [
        "Part of a Renaultion Virtual Twin (Renault + Revolution) Program at Renault Group a strategic digital transformation initiative redefining how vehicles are engineered through a digital-first approach.",
        "Used Advanced Machine Learning algorithms to automate existing manual tasks which took 100's of man hours",
        "From understanding business requirements and evaluating technical feasibility to designing, developing, and validating robust business logic implementations. Collaborated closely with cross-functional stakeholders to translate engineering needs into scalable digital solutions.",
      ],
    },
  ],

  /* ── SKILLS ──────────────────────────────────────── */
  skills: [
    { category: "AI and ML",          items: "LLMs, Prompt Engineering, NLP, Sentiment Classification, Scikit-learn, OpenAI APIs, Machine Learning, RAG" },
    { category: "Programming",        items: "Python, JavaScript" },
    { category: "Product and Program",items: "PRD Writing, Sprint Planning, KPI Definition, UAT, Stakeholder Management, 0-to-1 Product Development, Post-Launch Adoption" },
    { category: "Tools and Platforms",items: "Streamlit, 3DEXPERIENCE (Dassault), Scikit-learn, X API, YouTube API, Claude, Cursor" },
    { category: "Domain",             items: "Manufacturing, Automotive, AI Transformation, PLM, Process Optimization, Engineering Design" },
  ],

  /* ── EDUCATION ───────────────────────────────────── */
  education: [
    {
      degree: "B.Tech, Mechanical Engineering - CGPA: 9.05 / 10",
      org:    "B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai",
      period: "2019 - 2023",
    },
  ],

  /* ── PROJECTS ────────────────────────────────────── */
  projects: [
    {
      title:       "IntelliCAD",
      type:        "Personal Project",
      subtitle:    "LLM-powered Text-to-CAD Generation",
      description: "Converts natural language descriptions of 3D geometry into ready-made CAD files using LLMs and OpenAI APIs - eliminating manual sketching and constraint-dragging for engineers.",
      stack:       "Python, LLMs, Prompt Engineering, OpenAI APIs, Streamlit",
      links: [
        { label: "GitHub",     href: "https://github.com/goku03l/IntelliCAD" },
        { label: "Live App",   href: "https://intellicad-ap6znq2zrc7bw7zzxddkru.streamlit.app/" },
        { label: "Demo Video", href: "https://youtu.be/56AVSxNFZ3c" },
      ],
    },
    {
      title:       "DrawingDIFF",
      type:        "Personal Project",
      subtitle:    "Engineering Drawing Version Comparison and Audit Tool",
      description: "Upload two drawing revisions to get a high-contrast pixel overlay highlighting every changed line and dimension, plus an auto-generated audit trail ready for export.",
      stack:       "Python, LLMs, OpenAI APIs, Streamlit, Computer Vision",
      links: [
        { label: "GitHub",     href: "https://github.com/goku03l/DrawingDIFF" },
        { label: "Live App",   href: "https://drawingdiff-dvaacmnaapwuvdhzt7zvo5.streamlit.app/" },
        { label: "Demo Video", href: "https://youtu.be/MfWPskO2LjM" },
      ],
    },
    {
      title:       "Election Pulse",
      type:        "Freelance",
      subtitle:    "Social Media Sentiment Platform for Political Analytics",
      description: "Built for a political party client: ingested unstructured social media data via X API and YouTube API and transformed it into actionable sentiment dashboards for campaign teams.",
      stack:       "Python, NLP, Sentiment Classification, X API, YouTube API, Analytics",
      links:       [],
    },
  ],

};
