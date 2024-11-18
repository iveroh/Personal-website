/**
 *
 * Navbar
 *
 */

function createNavbar() {
  // Select the header element
  const header = document.querySelector("header");

  // Create the nav element
  const nav = document.createElement("nav");

  // Define the navigation items
  const navItems = [
    { text: "HOME", href: "/index.html" },
    { text: "ABOUT", href: "/01-pages/01-00-about/about.html" },
    { text: "ARTICLES", href: "/01-pages/02-00-articles/navigation.html" },
    { text: "CONTACT", href: "/01-pages/03-00-contact/contact.html" },
    { text: "FAQ", href: "/01-pages/04-00-faq/faq.html" },
  ];
  // Loop through the nav items and create links
  navItems.forEach((item) => {
    const link = document.createElement("a");
    link.textContent = item.text;
    link.href = item.href;
    nav.appendChild(link);
  });

  // Append the nav to the header
  header.appendChild(nav);
}

/**
 *
 * Footer
 *
 */

function createFooter() {
  const footer = document.querySelector("footer");

  // Create wrapper for footer content
  const footerWrapper = document.createElement("div");
  footerWrapper.classList.add("footer-wrapper");

  // Left list (Links)
  const linksSection = document.createElement("ul");
  linksSection.classList.add("footer-section", "footer-links");
  const links = ["Home", "About", "Services", "Contact"];
  links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = link;
    a.href = `#${link.toLowerCase()}`;
    li.appendChild(a);
    linksSection.appendChild(li);
  });

  // Logo in the center
  const logoSection = document.createElement("div");
  logoSection.classList.add("footer-section", "footer-logo");
  const logo = document.createElement("img");
  logo.src = "/11-resources/02-images/logo-white.png";
  logo.alt = "Logo";
  logoSection.appendChild(logo);

  // Right list (Social media)
  const socialSection = document.createElement("ul");
  socialSection.classList.add("footer-section", "footer-social");
  const socialLinks = [
    {
      name: "INSTAGRAM",
      href: "https://instagram.com/iverheggelund",
      icon: "/11-resources/02-images/instagram-logo.png",
    },
    {
      name: "GITHUB",
      href: "https://github.com/iveroh",
      icon: "/11-resources/02-images/github-logo.png",
    },
    {
      name: "FACEBOOK",
      href: "https://facebook.com/iverheggelund",
      icon: "/11-resources/02-images/facebook-logo.png",
    },
  ];
  socialLinks.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.target = "_blank"; // Open link in new tab

    const img = document.createElement("img");
    img.src = link.icon;
    img.alt = `${link.name} logo`;
    img.classList.add("social-icon");

    const span = document.createElement("span");
    span.textContent = link.name;

    a.appendChild(img);
    a.appendChild(span);
    li.appendChild(a);
    socialSection.appendChild(li);
  });

  // Append all sections to the footer wrapper
  footerWrapper.appendChild(linksSection);
  footerWrapper.appendChild(logoSection);
  footerWrapper.appendChild(socialSection);

  // Add footer wrapper to footer
  footer.appendChild(footerWrapper);

  // Footer copyright
  const copyright = document.createElement("p");
  copyright.textContent = "© 2024 IOH. All rights reserved.";
  footer.appendChild(copyright);
}

/**
 *
 * Articles appearing animation
 *
 */
document.addEventListener("DOMContentLoaded", () => {
  const contentBlocks = document.querySelectorAll(".content-block");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  contentBlocks.forEach((block) => observer.observe(block));
});

/**
 *
 * Navbar sticky activation
 *
 */
//activate sticky
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const topContent = document.querySelector(".frontpage");
  const navbarPlaceholder = document.createElement("div");

  // Set placeholder height equal to the navbar height
  const updateNavbarPlaceholder = () => {
    navbarPlaceholder.style.height = `${navbar.offsetHeight}px`;
  };

  // Insert the placeholder and ensure it starts hidden
  navbarPlaceholder.style.display = "none";
  navbar.parentNode.insertBefore(navbarPlaceholder, navbar);

  // Toggle sticky state based on scroll position
  const toggleStickyNavbar = () => {
    const triggerPoint = topContent.getBoundingClientRect().bottom <= 0;

    if (triggerPoint) {
      navbar.classList.add("sticky");
      navbarPlaceholder.style.display = "block";
    } else {
      navbar.classList.remove("sticky");
      navbarPlaceholder.style.display = "none";
    }
  };

  // Update placeholder height on load and resize to handle dynamic layouts
  updateNavbarPlaceholder();
  window.addEventListener("resize", updateNavbarPlaceholder);

  // Attach scroll listener and run once on load
  window.addEventListener("scroll", toggleStickyNavbar);
  toggleStickyNavbar();
});

//Run
createNavbar();
createFooter();
