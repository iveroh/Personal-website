/*
/*
/* JavaScript file for 00-00-index
/*
*/

//opening index.html fade
window.onload = function () {
  const whiteBox = document.querySelector(".frontpage-fader");
  setTimeout(() => {
    whiteBox.style.opacity = "0";
  }, 500);
};

//Activates navbar .sticky when scroll is beyond top page
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const topContent = document.querySelector(".frontpage"); // Adjusted to your top content section
  const navbarHeight = navbar.offsetHeight;

  // Create a placeholder to reserve space when navbar becomes fixed
  const navbarPlaceholder = document.createElement("div");
  navbarPlaceholder.style.height = `${navbarHeight}px`;
  navbarPlaceholder.style.display = "none"; // Initially hidden

  // Insert the placeholder right before the navbar
  navbar.parentNode.insertBefore(navbarPlaceholder, navbar);

  window.addEventListener("scroll", function () {
      if (window.scrollY >= topContent.offsetHeight) {
          navbar.classList.add("sticky");
          navbarPlaceholder.style.display = "block"; // Show placeholder to prevent layout shift
      } else {
          navbar.classList.remove("sticky");
          navbarPlaceholder.style.display = "none"; // Hide placeholder
      }
  });
});

const slider = document.querySelector('.image-slider');
const images = document.querySelectorAll('.image-slider img');
let index = 0;

function slideImages() {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(slideImages, 3000); // Slide every 3 seconds
