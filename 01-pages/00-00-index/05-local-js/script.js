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
  }, 1500);
};

//Sticks navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const topContent = document.querySelector(".top-content");

  window.addEventListener("scroll", function () {
      // Check if the scroll position is past the top content section
      if (window.scrollY >= topContent.offsetHeight) {
          navbar.classList.add("sticky"); // Make navbar sticky
      } else {
          navbar.classList.remove("sticky"); // Remove sticky behavior when above top content
      }
  });
});
