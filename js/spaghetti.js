var elMenuBtn = document.querySelector(".menu-btn");
var elMenuIcon = document.querySelector(".menu-icon");

elMenuBtn.addEventListener("click", function () {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");

    elMenuIcon.src = "./images/icon-moon.svg";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";

    elMenuIcon.src = "./images/icon-moon-dark.svg";
  }
});

localStorage.removeItem("theme");
