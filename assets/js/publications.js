// assets/js/publications.js

document.addEventListener("DOMContentLoaded", () => {
  renderSidebarFromSiteData(siteData);
  renderPublications(pubData);
  setupThemeToggle();
});

function renderSidebarFromSiteData(data) {
  const { profile, contact, profiles } = data;

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

  // Contact
  const contactList = document.getElementById("contactList");
  contact.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="label">${item.label}:</span><br>${item.html}`;
    contactList.appendChild(li);
  });

  // Profiles
  const profilesList = document.getElementById("profilesList");
  profiles.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.html;
    profilesList.appendChild(li);
  });
}

function renderPublications(pubData) {
  const container = document.getElementById("pubsSection");
  container.innerHTML = ""; // clear, in case

  pubData.groups
    .sort((a, b) => b.year - a.year) // newest year first
    .forEach((group) => {
      const yearHeading = document.createElement("h3");
      yearHeading.textContent = group.year;
      yearHeading.style.marginTop = "12px";
      yearHeading.style.marginBottom = "6px";
      container.appendChild(yearHeading);

      const list = document.createElement("ul");
      list.className = "pub-list";

      group.items.forEach((pub) => {
        const li = document.createElement("li");

        // Title + meta
        const titleDiv = document.createElement("div");
        titleDiv.className = "pub-title";
        titleDiv.textContent = pub.title;
        li.appendChild(titleDiv);

        const metaDiv = document.createElement("div");
        metaDiv.className = "pub-meta";
        metaDiv.textContent = `${pub.authors} — ${pub.venue}`;
        li.appendChild(metaDiv);

        // Links row
        const links = [];
        if (pub.pdfUrl) {
          links.push(
            `<a href="${pub.pdfUrl}" target="_blank" rel="noreferrer">PDF</a>`
          );
        }
        if (pub.codeUrl) {
          links.push(
            `<a href="${pub.codeUrl}" target="_blank" rel="noreferrer">Code</a>`
          );
        }
        if (pub.pubUrl) {
          links.push(
            `<a href="${pub.pubUrl}" target="_blank" rel="noreferrer">Publisher</a>`
          );
        }

        if (links.length > 0) {
          const linkDiv = document.createElement("div");
          linkDiv.className = "small";
          linkDiv.style.marginTop = "4px";
          linkDiv.innerHTML = links.join(" · ");
          li.appendChild(linkDiv);
        }

        list.appendChild(li);
      });

      container.appendChild(list);
    });
}

/* Theme toggle (same behaviour as main page) */
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
