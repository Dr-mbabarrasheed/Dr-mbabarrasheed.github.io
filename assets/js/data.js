// assets/js/data.js

const siteData = {
  profile: {
    initials: "MBR",
    photoUrl: "assets/img/profile.jpg",   // <-- NEW
    name: "Muhammad Babar Rasheed",
    title: "GET-COFUND Marie Curie Fellow,",
    location: "Universidad de Alcalá, Madrid, Spain",
    keywords: [
      
      "Energy–Water–Hydrogen Nexus",
      "Smart Grids",
      "AI & Optimization",
      "Blockchain Energy Trading"
    ]
  },

contact: [
  {
    label: "Email",
    icon: "bi bi-envelope-fill",
    html: '<a href="mailto:muhammad.rasheed@uah.es">muhammad.rasheed@uah.es</a> <br> <a href="mailto:babarmeher@gmail.com">babarmeher@gmail.com</a>'
  },
  {
    label: "Phone (ES)",
    icon: "bi bi-telephone-fill",
    html: "(+34) 637559770"
  },
  {
    label: "Location",
    icon: "bi bi-geo-alt-fill",
    html: "Alcalá de Henares, Spain."
  }
],

profiles: [
  {
    name: "Google Scholar",
    icon: "bi bi-mortarboard",
    url: "https://scholar.google.com/citations?user=E1Mc2_4AAAAJ&hl=en&oi=sra"
  },
  {
    name: "ORCID",
    icon: "bi bi-patch-check-fill",
    url: "https://orcid.org/0000-0002-9911-0693"
  },
 
  {
    name: "LinkedIn",
    icon: "bi bi-linkedin",
    url: "https://www.linkedin.com/in/m-rasheed-389a0534/"
  },
  {
    name: "ResearchGate",
    icon: "bi bi-search",
    url: "https://www.researchgate.net/profile/Muhammad-Rasheed-9"
  },
  {
    name: "GitHub",
    icon: "bi bi-github",
    url: "https://github.com/Dr-mbabarrasheed"
  },
  {
    name: "CV",
    icon: "bi bi-file-earmark-person-fill",
    url: "Babar_CV.pdf"
  }
],

  sections: [
    {
      id: "about",
      navLabel: "About",
      title: "About",
      subtitle: "Profile",
      type: "text",
      paragraphs: [
        "I am an academic researcher at Universidad de Alcalá, Madrid, Spain and I am specialising in electronics engineering, optimisation algorithms, and intelligent energy systems.",
        "My background spans BS and MS degrees in Electrical / Electronics Engineering and a PhD in Computer Engineering (COMSATS University Islamabad), including visiting doctoral research at Dartmouth College, USA. I am a Fellow of the Higher Education Academy (FHEA) and a Senior Member of IEEE. My research addresses AI-enabled optimisation, multi-agent smart grids, the energy–water–hydrogen nexus, and blockchain-based energy trading.",
        "I have led and contributed to multi-institutional projects with more than €1.2M in funding from agencies such as Horizon 2020 MSCA, Leverhulme Trust, Spanish MICINN, King Abdulaziz University, and the Higher Education Commission of Pakistan."
      ],
      metrics: [
        "62+ peer-reviewed publications",
        "h-index: 27",
        "i10-index: 50",
        "~2475+ citations",
        "UK Global Talent Visa",
        "Marie Curie COFUND Fellow"
      ]
    },

    {
      id: "experience",
      navLabel: "Experience",
      title: "Experience",
      subtitle: "Academic & Professional",
      type: "timeline",
      items: [
        // {
        //   role: "Lecturer (Assistant Professor), Engineering & Technology",
        //   org: "University of Gloucestershire, UK",
        //   meta: "May 2023 – Present · Full-time",
        //   description:
        //     "Teaching and research in machine learning, electronics, and automation; supervision of undergraduate, MSc and PhD students; curriculum design and modernisation; QR-funded research on AI / energy systems; Associate Editor (Wiley); FHEA fellowship.",
        //   pills: ["Teaching & research", "ML & optimisation", "Student supervision", "Research funding"]
        // },
        {
          role: "Marie Curie COFUND Fellow (MSCA)",
          org: "Universidad de Alcalá, Spain",
          meta: "Jan 2021 – May 2023",
          description:
            "Postdoctoral research on intelligent energy systems and smart-grid optimisation, including energy-water-food / hydrogen nexus modelling and AI-based scheduling.",
          pills: []
        },
        {
          role: "Visiting Researcher",
          org: "Durham University, UK",
          meta: "Jan 2023 – Mar 2023",
          description: "Short-term visit focusing on collaborative research in optimisation and energy systems.",
          pills: []
        },
        {
          role: "Associate Professor / Assistant Professor (Research)",
          org: "University of Lahore, Pakistan",
          meta: "Aug 2017 – Jan 2021 · Acting HoD",
          description:
            "Leadership in Engineering, including acting HoD; taught machine learning, optimisation and power systems; supervised numerous final-year and postgraduate projects.",
          pills: []
        },
        {
          role: "Research Associate",
          org: "COMSATS University Islamabad, Pakistan",
          meta: "Feb 2012 – Aug 2017",
          description:
            "Research in smart grids, wireless sensor networks, and energy management; contributed to multiple funded projects and publications during PhD.",
          pills: []
        },
        {
          role: "Visiting Doctoral Researcher",
          org: "Dartmouth College, USA",
          meta: "Sep 2016 – Mar 2017",
          description:
            "Visiting research at the Laboratory for Intelligent Integrated Networks of Engineering Systems (LIINES) on optimisation and smart-grid applications.",
          pills: []
        }
      ]
    },

    {
      id: "education",
      navLabel: "Education",
      title: "Education",
      subtitle: "Degrees & Training",
      type: "timeline",
      items: [
        {
          role: "PhD in Computer Engineering",
          org: "COMSATS University Islamabad (CUI), Pakistan",
          meta: "Awarded: Dec 2017",
          description:
            "Doctoral research on intelligent energy management, optimisation and control, including demand-side management and smart-grid algorithms."
        },
        {
          role: "MS in Electrical Engineering",
          org: "COMSATS University Islamabad (CUI), Pakistan",
          meta: "Awarded: Mar 2013",
          description:
            "Focus on network optimisation, energy-aware wireless sensor networks, and MAC-layer protocols."
        },
        {
          role: "Bachelor in Electronics",
          org: "University of Sindh, Pakistan",
          meta: "Awarded: Apr 2010",
          description: ""
        },
        {
          role: "Fellow of Higher Education Academy (FHEA)",
          org: "Advance HE / IET, UK",
          meta: "Awarded: May 2024",
          description:
            "Recognition of sustained excellence in teaching and learning in higher education, aligned with the UK Professional Standards Framework."
        }
      ]
    },

     {
      id: "research",
      navLabel: "Research",
      title: "Research",
      subtitle: "Interests & Highlights",
      type: "text",
      paragraphs: [
        "My research focuses on data-driven and optimisation-based methods for sustainable energy and intelligent infrastructure. I work across demand response, load forecasting, electric vehicles, and integrated energy–water–hydrogen planning, often using machine learning, metaheuristics, and multi-agent systems.",
        "I collaborate with partners in the UK, Spain, Saudi Arabia, China, the USA, and Pakistan, including Durham, Lancaster, Glasgow, Dartmouth, King Abdulaziz University and COMSATS. I also serve as Associate Editor for Wiley’s Fellow in Engineering and review articles for IEEE, Elsevier, Wiley, MDPI and others."
      ],
      pills: [
        "AI-enabled optimization",
        "Multi-agent systems",
        "Smart grids & microgrids",
        "Energy–water–hydrogen nexus",
        "Electric vehicle charging",
        "Blockchain energy trading",
        "Demand response",
        "Load forecasting"
      ]
    },

    {
      id: "publications",
      navLabel: "Publications",
      title: "Selected Publications",
      subtitle: "Recent & Representative",
      type: "publications",
      intro:
  'These are selected works from my full publication list. For the complete list, visit the <a href="publications.html">Publications page</a> or check my <a href="https://scholar.google.com/citations?user=E1Mc2_4AAAAJ&hl=en&oi=sra" target="_blank">Google Scholar</a>.',
      maxItem: 4
    },

    {
  id: "contact",                  // keep same id so the sidebar "Contact" still works
  navLabel: "Contact",            // label in the sidebar nav (you can rename later)
  title: "Research & Teaching at a Glance",
  subtitle: "Visual overview",
  type: "diagrams",               // <-- NEW type
  boxes: [
    {
      heading: "Smart Energy Systems",
      text: "High-level view of my work on smart grids, demand response, EV charging, and the energy–water–hydrogen nexus.",
      img: "assets/img/EnergyReports.png"
    },
    {
      heading: " Wireless Sensor Networks",
      text: "High-level view of my work on Wireless Sensor Networks.",
      img: "assets/img/WSN.png"
    },
    {
      heading: "Teaching & Supervision",
      text: "Modules, supervision and student projects across energy systems, optimisation, and machine learning.",
      img: null // e.g. "assets/img/diagram-teaching.svg"
    },
    {
      heading: "Teaching & Supervision",
      text: "Modules, supervision and student projects across energy systems, optimisation, and machine learning.",
      img: null // e.g. "assets/img/diagram-teaching.svg"
    }
  ]
}
  ]
};
