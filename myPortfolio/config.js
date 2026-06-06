const PORTFOLIO = {
  name: "Gokul",
  nameAlt: "கோகுல்",
  profession: "Founder Office Generalist · Builder",
  tagline: "Most people plan. I build.",
  bio: `I'm an engineer who got frustrated waiting for Seniors approval and started building it. My work sits at the intersection of deep engineering intuition and AI, identifying problems that cost real money and shipping tools that solve them, fast.
 
I don't fit in a lane.I do have immense knowledge Vehicle dynamics. GenAI. Data products. PLM pipelines, Digital Electronic, Embeededs Systems. That's not a lack of focus it's a deliberate bet that the most valuable person in a founding team is the one who can hold the full picture and move on all of it.`,
  avatar: "utils/myimage.png",
  contact: {
    email: "gokul@thunivin.com",
    github: "https://github.com/goku03l",
    linkedin: "https://www.linkedin.com/in/goku03l",
    instagram: "",
    twitter: "",
  },
  skills: [
    { category: "Engineering", items: ["Automobile Engineering", "Embedded Systems", "Vehicle Dynamics", "PLM"] },
    { category: "Build & Tech", items: ["GenAI", "AI/ML", "Data Science", "Rapid Prototyping"] },
    { category: "Founder Skills", items: ["0→1 Product Building", "Problem Scoping", "Cross-functional Ownership","Process Restructuring"] },
  ],
  projects: [
    {
      title: "IntelliCAD — Prompt to CAD",
      description: "Engineers waste thousands of hours clicking through CAD tools to model ideas they already have in their heads. I fixed that.\n\nIntelliCAD lets you describe a 3D geometry in plain language and get a production-ready CAD file — no manual sketches, no constraint dragging. You talk to it like a peer, it ships the geometry. The interface CAD software should have built a decade ago.",
      tags: ["GenAI", "Industry Problem"],
      featured: true,
      youtube: "https://youtu.be/56AVSxNFZ3c?si=X4x83NZvaoZ85_z_",
      image: "",
      link: "https://intellicad-ap6znq2zrc7bw7zzxddkru.streamlit.app/",
    },
    {
      title: "DrawingDIFF — See the Shift. Skip the Squint.",
      description: "In high-stakes engineering, a missed revision doesn't just slow things down — it can cost millions. DrawingDIFF kills the 'spot the difference' problem in drawing reviews entirely.\n\nUpload two revisions, get a pixel-perfect overlay with every moved line and modified dimension highlighted in high contrast, plus an auto-generated audit trail ready to export. Built for environments where a misread millimetre has real consequences.",
      tags: ["GenAI", "Industry Problem"],
      featured: true,
      youtube: "https://youtu.be/MfWPskO2LjM",
      image: "utils/drawdiff.png",
      link: "https://drawingdiff-dvaacmnaapwuvdhzt7zvo5.streamlit.app/",
    },
    {
      title: "Tamil Nadu Political Sentiment Dashboard",
      description: "Turned 10,000+ tweets into a live political intelligence layer for Tamil Nadu's election cycle. The dashboard maps sentiment shifts by party, tracks narrative momentum in real time, and surfaces what the mainstream media consistently lags behind on.\n\nData journalism meets political analytics — built from scratch in a weekend to prove a point.",
      tags: ["Experimental"],
      featured: false,
      youtube: "",
      image: "utils/sm.png",
      link: "https://smelectiondashboard-djs8th6wuyojv78q4dbczr.streamlit.app/",
    },
  ],
  blogs: [
    {
      title: "Danke SEB!",
      excerpt: "A proper engineering autopsy of Sebastian Vettel's career — what the lap times, car data, and team dynamics actually tell you about one of the most technically intelligent drivers Formula 1 has ever seen.",
      date: "July 30, 2022",
      link: "https://explaining-engineering-f1.blogspot.com/2022/07/danke-seb.html",
      tags: ["Formula 1"],
    },
    {
      title: "Aerodynamics Are for Winners",
      excerpt: "Horsepower gets you to the grid. Aerodynamics wins you the race. A breakdown of the invisible forces — active aero, ground effect, drag reduction — that separate the podium from the pack in modern motorsport.",
      date: "September 6, 2020",
      link: "https://explaining-engineering-f1.blogspot.com/2020/09/aerodynamics-are-for-winners.html",
      tags: ["Formula 1", "Explaining Engineering"],
    },
    {
      title: "Tyre Dynamics — The Dark Art",
      excerpt: "The contact patch is a 200 cm² battlefield of heat, chemistry, and physics that determines whether you stick the apex or hit the barrier. A deep dive into slip angles, load sensitivity, and hysteresis — the stuff tyre engineers don't put in press releases.",
      date: "August 23, 2020",
      link: "https://explaining-engineering-f1.blogspot.com/2020/08/tyre-dynamics-dark-art.html",
      tags: ["Automobile", "Explaining Engineering"],
    },
  ],
};