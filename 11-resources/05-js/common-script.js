/**
 *
 * STANDARD: JavaScript file, creates standard navbar and footer in all elements
 * that apply the script
 *
 */

/**
 *
 * Lists to be used in createLinks() function
 *
 */

let navList = [
  ["home", "index.html", "Iver Heggelund | IOH", ""],
  ["article", "navigation.html", "Articles | IOH", ""],
  ["about", "about.html", "About | IOH", ""],
  ["contact", "contact.html", "Contact | IOH", ""],
];

let socialList = [
  ["facebook logo", "https://www.facebook.com/", "", "_blank"],
  ["instagram logo", "https://www.instagram.com/", "", "_blank"],
  ["github logo", "https://www.github.com/", "", "_blank"],
  ["discord logo", "https://www.discord.com/", "", "_blank"],
];

/**
 * Takes in a list written like those above and where to append the html elements created
 *
 * @param {*} list
 * @param {*} place
 */

function createLinks(list, place) {
  for (let el in list) {
    const klasse = list[el][0];
    const link = list[el][1];
    const name = list[el][2];
    const target = list[el][3];
    place.innerHTML += `   
          <a href="${link}" class="${klasse}" target="${target}">${name}</a>`;
  }
}

/**
 *
 * NAVBAR: Creates navbar
 *
 */
function navbar() {
  //collecting elements from DOM
  const header = document.querySelector("header");
  const navbar = document.createElement("nav");

  header.innerHTML +=
    '<img src="img/logos/navbar.svg" class="pulldown-button" alt="pulldown menu">';
  const pulldown = document.querySelector(".pulldown-button");
  pulldown.addEventListener("click", () => {
    navbar.classList.toggle("toggle");
    header.classList.toggle("toggle-header");
  });

  //appending navbar
  header.append(navbar);

  //creating links
  createLinks(navList, navbar);
}
