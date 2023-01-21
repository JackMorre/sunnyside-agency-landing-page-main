const header = document.querySelector(".header");
const menuBtn = document.querySelector(".icon-container");

menuBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
});
