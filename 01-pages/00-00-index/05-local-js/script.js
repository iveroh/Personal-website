//opening index.html fade
window.onload = function () {
  const whiteBox = document.querySelector(".frontpage-fader");
  setTimeout(() => {
    whiteBox.style.opacity = "0";
  }, 1500);
};
