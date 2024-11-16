//Creates the nav and footer in all elements

//lists to make links to navigate the pages.
//0: class, 1: href, 2: html, 3; target
let navList = [
  ["home", "/01-pages/00-00-index/index.html", "HOME", ""],
  ["article", "navigation.html", "ARTICLES", ""],
  ["about", "about.html", "ABOUT", ""],
  ["contact-us", "contact.html", "Contact us", ""],
];

let socialList = [
  ["facebook logo", "https://www.facebook.com/", "", "_blank"],
  ["instagram logo", "https://www.instagram.com/", "", "_blank"],
  ["github logo", "https://www.github.com/", "", "_blank"],
  ["discord logo", "https://www.discord.com/", "", "_blank"],
];

//Reusible function that makes html code for links.
//Is used 3 times to create all the links in nav and footer
//Takes in a list written like those above and where to append the html elements created
function createLinks(list, place) {
  //creating articles
  for (let el in list) {
    const klasse = list[el][0];
    const link = list[el][1];
    const name = list[el][2];
    const target = list[el][3];
    place.innerHTML += `   
        <a href="${link}" class="${klasse}" target="${target}">${name}</a>`;
  }
}

//creating navbar
function navbar() {
  //collecting elements from DOM
  const header = document.querySelector("header");
  const navbar = document.createElement("nav");

  //Img for navbar and toggle class for mobile version
  header.innerHTML += '<img src="img/logos/navbar.svg" class="pulldown-button" alt="pulldown menu">';
  const pulldown = document.querySelector(".pulldown-button");
  pulldown.addEventListener("click", () => {
    navbar.classList.toggle("toggle");
    header.classList.toggle("toggle-header");
  })

  //appending navbar
  header.append(navbar);

  //creating links
  createLinks(navList, navbar);
}

//Function for footer
function footer() {
  //getting footer from Dom
  const footer = document.querySelector("footer");

  //DIV FOR CONTACT INFO (left)
  const contactDiv = document.createElement("div");
  contactDiv.classList = "contact-div";
  footer.append(contactDiv);

  contactDiv.innerHTML += `
  <h3>Contact information</h3>
  <p>Epost:</p>
  <p>studyHow@wedongivashit.no</p>
  <p>Tlf</p>
  <p>605-475-6961</p>
  <p>Adress:</p>
  <a href="https://maps.app.goo.gl/LzLRzUTYwhejVio26" target="_blank">Slottsplassen 1, 0010 Oslo</a>
  `;

  //DIV FOR SOCIAL LINKS AND LOGO (center)
  //making to divs to add links and logos
  const centerDiv = document.createElement("div");
  centerDiv.classList = "center-div";
  footer.append(centerDiv);

  const socialDiv = document.createElement("div");
  socialDiv.classList = "social-div";
  centerDiv.append(socialDiv);

  //create social links
  createLinks(socialList, socialDiv);

  //adding logo
  centerDiv.innerHTML += `
  <img src="img/anlain_logo.svg" alt="Logo of Ånlain">
  <p>&copy;gruppe 4 2023</p>`;
  
  //DIV FOR NAVIGATION (right)
  const navDiv = document.createElement("div");
  navDiv.classList = "navigation-div";
  footer.append(navDiv);

  //create navigation links
  createLinks(navList, navDiv);

  //Link to sitemap
  navDiv.innerHTML += '<a href="sitemap.html" class="sitemap">Sitemap</a>'
}
//Calling the function
footer();
navbar();
