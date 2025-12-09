// assets/js/sidebar.js

function initSidebar(mode, siteData) {
  const { profile, contact, profiles } = siteData;
  const sidebar = document.getElementById("sidebar");

  // Basic skeleton
  sidebar.innerHTML = `
    <header class="sidebar-header">
      <div class="avatar">
        <span id="avatarInitials"></span>
      </div>
      <div class="sidebar-text">
        <div class="name" id="name"></div>
        <div class="title" id="title"></div>
        <div class="location" id="location"></div>
      </div>
      <button id="themeToggle" class="theme-toggle" type="button">
        <span id="themeIcon">🌙</span>
      </button>
    </header>

    <div class="chip-row" id="keywords"></div>

    <section class="sidebar-section">
      <h3>Contact</h3>
      <ul id="contactList"></ul>
    </section>

    <section class="sidebar-section">
      <h3>Profiles &amp; CV</h3>
      <ul id="profilesList"></ul>
    </section>

    <nav class="nav" id="nav" aria-label="Sidebar navigation"></nav>
  `;

  // Fill basics
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

  // Nav: depends on page mode
  const nav = document.getElementById("nav");
  if (mode === "home") {
    // Leave empty here; main.js will populate section nav (About, Research, etc.)
  } else if (mode === "publications") {
    nav.innerHTML = `
      <a href="./"><button type="button">Home</button></a>
      <button type="button" class="active">Publications</button>
    `;
  }
}
