// assets/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  initSidebar("home", siteData);
  renderNav(siteData.sections);
  renderSections(siteData.sections);
  setupThemeToggle();
  setupIntersectionObserver();
});

function renderSidebar(data) {
  const { profile, contact, profiles } = data;

  // Basic profile
  document.getElementById("avatarInitials").textContent = profile.initials;
  document.getElementById("name").textContent = profile.name;
  document.getElementById("title").textContent = profile.title;
  document.getElementById("location").textContent = profile.location;

  // Keywords
  const keywordsContainer = document.getElementById("keywords");
  profile.keywords.forEach((kw) => {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.textContent = kw;
    keywordsContainer.appendChild(chip);
  });

  // Contact list
  const contactList = document.getElementById("contactList");
  contact.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="label">${item.label}:</span><br>${item.html}`;
    contactList.appendChild(li);
  });

  // Profiles list
  const profilesList = document.getElementById("profilesList");
  profiles.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.html;
    profilesList.appendChild(li);
  });
}

function renderNav(sections) {
  const nav = document.getElementById("nav");
  sections.forEach((sec, idx) => {
    const btn = document.createElement("button");
    btn.textContent = sec.navLabel;
    btn.dataset.target = sec.id;
    if (idx === 0) btn.classList.add("active");
    btn.type = "button";

    btn.addEventListener("click", () => {
      const target = document.getElementById(sec.id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    nav.appendChild(btn);
  });
}


function renderSections(sections) {
  const content = document.getElementById("content");

  sections.forEach((sec) => {
    const sectionEl = document.createElement("section");
    sectionEl.id = sec.id;
    sectionEl.className = "section";

    const header = document.createElement("div");
    header.className = "section-header";
    header.innerHTML = `
      <h2 class="section-title">${sec.title}</h2>
      <span class="section-kicker">${sec.subtitle || ""}</span>
    `;
    sectionEl.appendChild(header);

    if (sec.type === "text") {
      sec.paragraphs.forEach((p) => {
        const para = document.createElement("p");
        para.textContent = p;
        sectionEl.appendChild(para);
      });

      if (sec.metrics && sec.metrics.length) {
        const metrics = document.createElement("div");
        metrics.className = "inline-metrics";
        sec.metrics.forEach((m) => {
          const badge = document.createElement("span");
          badge.className = "badge";
          badge.textContent = m;
          metrics.appendChild(badge);
        });
        sectionEl.appendChild(metrics);
      }

      if (sec.pills && sec.pills.length) {
        const pillRow = document.createElement("div");
        pillRow.className = "pill-row";
        sec.pills.forEach((p) => {
          const pill = document.createElement("span");
          pill.className = "pill";
          pill.textContent = p;
          pillRow.appendChild(pill);
        });
        sectionEl.appendChild(pillRow);
      }
    }

    if (sec.type === "timeline") {
      const timeline = document.createElement("div");
      timeline.className = "timeline";

      sec.items.forEach((item) => {
        const itemEl = document.createElement("article");
        itemEl.className = "timeline-item";

        const header = document.createElement("div");
        header.className = "timeline-header";
        header.innerHTML = `
          <div>
            <div class="timeline-role">${item.role}</div>
            <div class="timeline-org">${item.org}</div>
          </div>
          <div class="timeline-meta">${item.meta || ""}</div>
        `;
        itemEl.appendChild(header);

        if (item.description) {
          const desc = document.createElement("p");
          desc.textContent = item.description;
          itemEl.appendChild(desc);
        }

        if (item.pills && item.pills.length) {
          const pillRow = document.createElement("div");
          pillRow.className = "pill-row";
          item.pills.forEach((p) => {
            const pill = document.createElement("span");
            pill.className = "pill";
            pill.textContent = p;
            pillRow.appendChild(pill);
          });
          itemEl.appendChild(pillRow);
        }

        timeline.appendChild(itemEl);
      });

      sectionEl.appendChild(timeline);
    }

    if (sec.type === "publications") {
      if (sec.intro) {
        const para = document.createElement("p");
        para.className = "small";
        para.textContent = sec.intro;
        sectionEl.appendChild(para);
      }

      const ul = document.createElement("ul");
      ul.className = "pub-list";

      sec.items.forEach((pub) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <div class="pub-title">${pub.title}</div>
          <div class="pub-meta"><strong>${pub.venue}</strong> – ${pub.authors}</div>
        `;
        ul.appendChild(li);
      });

      sectionEl.appendChild(ul);
    }

    if (sec.type === "contact") {
      const grid = document.createElement("div");
      grid.className = "contact-grid";

      sec.cards.forEach((card) => {
        const c = document.createElement("div");
        c.className = "contact-card";
        c.innerHTML = `
          <h4>${card.heading}</h4>
          <p>${card.body}</p>
          <p>${card.html}</p>
        `;
        grid.appendChild(c);
      });

      sectionEl.appendChild(grid);
    }

    content.appendChild(sectionEl);
  });
}

/* Theme toggle with localStorage */
function setupThemeToggle() {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    body.classList.add("dark");
    themeIcon.textContent = "☀️";
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    themeIcon.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

/* Active nav on scroll like tuhoang.me */
function setupIntersectionObserver() {
  const sections = document.querySelectorAll(".section");
  const navButtons = document.querySelectorAll(".nav button");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navButtons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.target === id);
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach((sec) => observer.observe(sec));
}
