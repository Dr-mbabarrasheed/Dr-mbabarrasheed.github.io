// assets/js/data.js

const siteData = {
  profile: {
    initials: "MBR",
    name: "Muhammad Babar Rasheed",
    title: "Lecturer (Assistant Professor), Engineering & Technology",
    location: "University of Gloucestershire, UK",
    keywords: [
      "AI & Optimization",
      "Smart Grids",
      "Energy–Water–Hydrogen Nexus",
      "Blockchain Energy Trading"
    ]
  },

  contact: [
    {
      label: "Email",
      html: '<a href="mailto:muhammad.rasheed@uah.es">muhammad.rasheed@uah.es</a>'
    },
    {
      label: "Phone (ES)",
      html: "(+34) 637 55 97 70"
    },
    {
      label: "Location",
      html: "Cheltenham, UK & Alcalá de Henares, Spain"
    }
  ],

  profiles: [
    {
      label: "Download full CV (PDF)",
      html: '<a href="CV.pdf" target="_blank" rel="noreferrer">📄 CV.pdf</a>'
    },
    {
      label: "Google Scholar",
      html:
        '<a href="https://scholar.google.es/citations?user=Rjj2sDMAAAAJ&hl=es" target="_blank" rel="noreferrer">' +
        "Scholar profile</a>"
    },
    {
      label: "ORCID",
      html:
        '<a href="https://orcid.org/0000-0002-9911-0693" target="_blank" rel="noreferrer">' +
        "0000-0002-9911-0693</a>"
    },
    {
      label: "GitHub",
      html: '<a href="#" target="_blank">add GitHub link</a>'
    },
    {
      label: "LinkedIn",
      html: '<a href="#" target="_blank">add LinkedIn link</a>'
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
        "I am an academic, researcher, and educator specialising in electronics engineering, optimisation algorithms, and intelligent energy systems. I currently serve as Lecturer (Assistant Professor) in Engineering and Technology at the University of Gloucestershire, combining teaching, research, and student supervision at Levels 3–7.",
        "My background spans BS and MS degrees in Electrical / Electronics Engineering and a PhD in Computer Engineering (COMSATS University Islamabad), including visiting doctoral research at Dartmouth College, USA. I am a Fellow of the Higher Education Academy (FHEA) and a Senior Member of IEEE. My research addresses AI-enabled optimisation, multi-agent smart grids, the energy–water–hydrogen nexus, and blockchain-based energy trading.",
        "I have led and contributed to multi-institutional projects with more than €1.2M in funding from agencies such as Horizon 2020 MSCA, Leverhulme Trust, Spanish MICINN, King Abdulaziz University, and the Higher Education Commission of Pakistan."
      ],
      metrics: [
        "62+ peer-reviewed publications",
        "h-index: 26",
        "i10-index: 45",
        "~2200+ citations",
        "UK Global Talent Visa",
        "Marie Curie COFUND Fellow"
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
      id: "experience",
      navLabel: "Experience",
      title: "Experience",
      subtitle: "Academic & Professional",
      type: "timeline",
      items: [
        {
          role: "Lecturer (Assistant Professor), Engineering & Technology",
          org: "University of Gloucestershire, UK",
          meta: "May 2023 – Present · Full-time",
          description:
            "Teaching and research in machine learning, electronics, and automation; supervision of undergraduate, MSc and PhD students; curriculum design and modernisation; QR-funded research on AI / energy systems; Associate Editor (Wiley); FHEA fellowship.",
          pills: ["Teaching & research", "ML & optimisation", "Student supervision", "Research funding"]
        },
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
      id: "publications",
      navLabel: "Publications",
      title: "Selected Publications",
      subtitle: "Recent & Representative",
      type: "publications",
      intro:
        "Below is a short selection; your full list is available in the downloadable CV and on Google Scholar.",
      items: [
        {
          title:
            "An Optimization Cost Strategy for Storage-Enabled Hydrogen Flow Network using Monte Carlo Simulation",
          venue: "Journal of Energy Storage, 2025",
          authors: "M. B. Rasheed et al."
        },
        {
          title:
            "Blockchain-Based Energy Trading with Multi-Factor Trust: Ensuring Fairness and Security in Peer-to-Peer Energy Trading with Blockchain Technology",
          venue: "Sustainable Energy, Grids and Networks, 2025",
          authors: "M. Zulfiqar, M. B. Rasheed et al."
        },
        {
          title:
            "A Game-Theoretic Approach to Mitigate Charging Anxiety for EV Users through Multi-parameter Dynamic Pricing and Real-time Traffic Flow",
          venue: "Energy, 2024",
          authors: "M. B. Rasheed et al."
        }
        // Add more publications from CV as needed
      ]
    },

    {
      id: "contact",
      navLabel: "Contact",
      title: "Contact & Links",
      subtitle: "Get in touch",
      type: "contact",
      cards: [
        {
          heading: "Email",
          body:
            "For collaboration, supervision, or speaking invitations, please reach out via:",
          html:
            '<a href="mailto:muhammad.rasheed@uah.es">muhammad.rasheed@uah.es</a>'
        },
        {
          heading: "Google Scholar",
          body: "Publication list, citation metrics, and co-author network:",
          html:
            '<a href="https://scholar.google.es/citations?user=Rjj2sDMAAAAJ&hl=es" target="_blank" rel="noreferrer">View on Scholar</a>'
        },
        {
          heading: "Other profiles",
          body: "Replace the placeholders below with your real URLs:",
          html:
            '<ul class="small" style="margin-left: 16px; margin-top: 4px;">' +
            "<li>GitHub: https://github.com/your-username</li>" +
            "<li>LinkedIn: https://www.linkedin.com/in/your-profile</li>" +
            "</ul>"
        }
      ]
    }
  ]
};
