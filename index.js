// sticky navbar

const mobiMenu = document.querySelector(".mobile-nav-list");

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  if (!mobiMenu.classList.contains("open-menu")) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
});

// toggle navbar
const menuBtn = document.getElementById("menu-bar");
const header = document.querySelector("header");

menuBtn.addEventListener("click", () => {
  mobiMenu.classList.toggle("open-menu");
  menuBtn.classList.toggle("fa-times");
  if (mobiMenu.classList.contains("open-menu")) {
    header.classList.add("sticky");
  } else {
    if (window.scrollY === 0) {
      header.classList.remove("sticky");
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 990) {
    console.log("yes");
    menuBtn.classList.remove("fa-times");
    mobiMenu.classList.remove("open-menu");
    if (window.scrollY == 0) {
      header.classList.remove("sticky");
    }
  }
});
