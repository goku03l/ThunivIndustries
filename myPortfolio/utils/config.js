const RESUME = {

  /* ── HEADER ─────────────────────────────────────── */
  name: "Gokul Kumar",
  tagline: "Startup Founder · Ex-PM, Maruti Suzuki · Founder's Office / 0-to-1 Builder",

  contact: [
    { label: "Email",    value: "kgokul371c@gmail.com",        href: "mailto:kgokul371c@gmail.com" },
    { label: "Phone",    value: "+91 98849 90139",           href: "tel:+919884990139" },
    { label: "Location", value: "Gurugram, India",           href: null },
    { label: "LinkedIn", value: "linkedin.com/in/goku03l",   href: "https://linkedin.com/in/goku03l" },
    { label: "GitHub",   value: "github.com/goku03l",        href: "https://github.com/goku03l" },
    { label: "Portfolio",  value: "Portfolio:thunivin.com",              href: "https://thunivin.com" },
  ],

  /* ── SUMMARY ─────────────────────────────────────── */
  summary: [
    "Founder of Thuniv Industries, an AI product studio building for engineering, construction, and B2B sales teams. Started it nights and weekends in March 2026 while still a Product Manager at Maruti Suzuki, then left that role in July 2026 to build full-time. Six months in: one product is a working MVP, the other has paying customers and recurring revenue.",
    "Solo across product, engineering, and go-to-market so far - no co-founder yet. Now looking for a Founder's Office, Chief of Staff, or 0-to-1 execution role at a funded early-stage startup, to learn how a team does what one person can't, sharpen what a solo build doesn't force, and find the right co-founder along the way.",
    "<strong>Solo founder with early revenue, looking for a season in someone else's Founder's Office before going all-in again.</strong>"
  ],

  /* ── WORK EXPERIENCE ─────────────────────────────── */
  experience: [
    {
      title:  "Founder",
      org:    "Thuniv Industries",
      period: "Mar 2026 - Present",
      bullets: [
        "Left a Product Manager role to build full-time, after validating demand nights and weekends for four months.",
        "Shipped ThadamIQ, an autonomous AI sales agent that lets small manufacturers sell direct instead of through a distributor - 3 paying licences and ~₹15k MRR to date, sold and supported solo.",
        "Built PLMC to a working MVP: an AI-native PLM/BOM platform for construction, with an assistant that can act on project data under a two-phase confirm safeguard.",
        "Running product, engineering, and sales as a team of one - now looking to pair that with Founder's Office to learn what a solo build can't teach.",
      ],
    },
    {
      title:  "Product Manager - Engineering Efficiency",
      org:    "Maruti Suzuki India Limited, Gurugram",
      period: "Apr 2025 - Jul 2026",
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
    { category: "Founder / 0-to-1",   items: "Solo 0-to-revenue execution, Customer acquisition, Pricing & GTM, Full-stack product ownership, Bootstrapped shipping" },
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
