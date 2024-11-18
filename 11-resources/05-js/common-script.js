function createNavbar() {
  // Select the header element
  const header = document.querySelector("header");

  // Create the nav element
  const nav = document.createElement("nav");

  // Define the navigation items
  const navItems = [
    { text: "HOME", href: "/01-pages/00-00-index/index.html" },
    { text: "ABOUT", href: "/01-pages/01-00-about/about.html" },
    { text: "ARTICLES", href: "/01-pages/02-00-articles/navigation.html" },
    { text: "CONTACT", href: "/01-pages/03-00-contact/contact.html" },
    { text: "FAQ", href: "/01-pages/04-00-faq/faq.html"}
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


    // Function to create the footer
    function createFooter() {
      // Select the footer element
      const footer = document.querySelector('footer');

      // Create the contact information section
      const contactSection = document.createElement('div');
      contactSection.classList.add('footer-section', 'contact-info');

      const contactTitle = document.createElement('h3');
      contactTitle.textContent = 'Contact Information';
      contactSection.appendChild(contactTitle);

      const contactDetails = [
        'Email: iveroprandheggelund@gmail.com',
      ];

      contactDetails.forEach(info => {
        const p = document.createElement('p');
        p.textContent = info;
        contactSection.appendChild(p);
      });

      // Create the social links section
      const socialSection = document.createElement('div');
      socialSection.classList.add('footer-section', 'social-links');

      const socialTitle = document.createElement('h3');
      socialTitle.textContent = 'Media';
      socialSection.appendChild(socialTitle);

      const socialLinks = [
        { name: 'Instagram', href: 'https://instagram.com', icon: '📸' },
        { name: 'GitHub', href: 'https://github.com', icon: '💻' },
        { name: 'Facebook', href: 'https://facebook.com', icon: '📘' },
      ];

      socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.href;
        a.target = '_blank'; // Open link in a new tab
        a.textContent = `${link.icon} ${link.name}`;
        socialSection.appendChild(a);
      });

      // Append both sections to the footer
      footer.appendChild(contactSection);
      footer.appendChild(socialSection);
    }

    document.addEventListener("DOMContentLoaded", () => {
      const contentBlocks = document.querySelectorAll(".content-block");
    
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("appear");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the block is visible
      );
    
      contentBlocks.forEach(block => observer.observe(block));
    });

    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector("nav");
    
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      });
    });
    

//Run
createNavbar();
createFooter();
