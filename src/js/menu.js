const burger = document.querySelector(".burger");
const header = document.querySelector(".header");
const menuContainer = document.querySelector(".menu-container");

burger.addEventListener("click", () => {
  if (burger.classList.contains("burger-active")) {
    burger.classList.remove("burger-active");
    menuContainer.classList.remove("menu-is-open");
    header.style.position = "absolute";
    document.body.style.overflow = "auto";
  } else {
    burger.classList.add("burger-active");
    menuContainer.classList.add("menu-is-open");
    header.style.position = "fixed";
    document.body.style.overflow = "hidden";
  }
});

menuContainer.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    burger.classList.remove("burger-active");
    menuContainer.classList.remove("menu-is-open");
    header.style.position = "absolute";
    document.body.style.overflow = "auto";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    burger.classList.remove("burger-active");
    menuContainer.classList.remove("menu-is-open");
    header.style.position = "absolute";
    document.body.style.overflow = "auto";
  }
});
