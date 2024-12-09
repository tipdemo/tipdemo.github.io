document.addEventListener("DOMContentLoaded", () => {
    const navbarLogo = document.getElementById("navbar-logo");
    const menuLinksContainer = document.getElementById("menu-links");
    const fullscreenMenu = document.getElementById("fullscreen-menu");
    const closeMenu = document.getElementById("close-menu");
    const hamburgerMenu = document.getElementById("hamburger-menu");
  
    // Voeg het logo toe
    const logoSrc = "https://www.tipdemo.nl/assets/logo6.svg";
    const logoAlt = "Logo";
    const logoLink = "https://www.tipdemo.nl/index.html"; // Link naar de homepagina

    if (navbarLogo) {
      const logoAnchor = document.createElement("a");
      logoAnchor.href = logoLink; // Voeg de link toe aan het logo
      logoAnchor.appendChild(navbarLogo.cloneNode(true)); // Voeg het logo toe aan de link
      navbarLogo.replaceWith(logoAnchor); // Vervang het originele logo met de link
      const updatedNavbarLogo = logoAnchor.querySelector("img");
      updatedNavbarLogo.src = logoSrc;
      updatedNavbarLogo.alt = logoAlt;
    } else {
      console.error("Navbar-logo ontbreekt in de DOM.");
    }

// Links configuratie
const links = [
    { href: "https://www.tipdemo.nl/index.html", icon: "fas fa-home", text: "Home" },
    { href: "https://www.tipdemo.nl/examples/index.html", icon: "fas fa-play", text: "Demo's" },
    { href: "https://www.tipdemo.nl/research/index.html", icon: "fas fa-flask", text: "Onderzoek" },
    { hr: true }, // Voeg een scheidingslijn toe
    { href: "https://www.tipdemo.nl/about/index.html", icon: "fas fa-info-circle", text: "Over" },
    { href: "https://www.tipdemo.nl/contact/index.html", icon: "fas fa-comments", text: "Contact" },
  ];
  
  // Dynamisch links genereren
  if (menuLinksContainer) {
    links.forEach((link) => {
      if (link.hr) {
        // Voeg een scheidingslijn toe
        const hr = document.createElement("hr");
        hr.className = "nav-separator"; // Optionele klasse voor styling
        menuLinksContainer.appendChild(hr);
      } else {
        // Voeg een link toe
        const li = document.createElement("li");
        li.innerHTML = `
          <a href="${link.href}">
            <i class="${link.icon}"></i> ${link.text}
          </a>
        `;
        menuLinksContainer.appendChild(li);
      }
    });
  } else {
    console.error("Menu-links container ontbreekt in de DOM.");
  }
  
 // Menu functionaliteit
 if (hamburgerMenu && fullscreenMenu && closeMenu) {
    // Open het menu
    hamburgerMenu.addEventListener("click", () => {
      fullscreenMenu.classList.add("active");
    });

    // Sluit het menu
    closeMenu.addEventListener("click", () => {
      fullscreenMenu.classList.remove("active");
    });
  } else {
    console.error("Een of meer elementen voor het menu ontbreken in de DOM.");
  }
});