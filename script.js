const openMenu = document.getElementById("menu-icon");
const closeMenu = document.getElementById("close-icon");
const navBar = document.querySelector(".navbar");

openMenu.addEventListener("click", () => {
  navBar.classList.add("open");
  openMenu.classList.add("hidden");
  closeMenu.classList.add("visible");
});

closeMenu.addEventListener("click", () => {
  navBar.classList.remove("open");
  openMenu.classList.remove("hidden");
  closeMenu.classList.remove("visible");
});
