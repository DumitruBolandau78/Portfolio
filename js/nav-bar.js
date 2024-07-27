document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", resizeNav);
  window.addEventListener("resize", resizeNav);

  function resizeNav() {
    const thisNav = document.querySelector(".header-inner .current-menu-item").offsetLeft;
    const menuItems = document.querySelectorAll(".header-inner .menu-item");

    menuItems.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        const left = this.offsetLeft - thisNav;
        const width = this.offsetWidth;
        const initWidth =
          document.querySelector(".header-inner .current-menu-item").offsetWidth;
        document.querySelector(".header-inner .wee").style.left = left + "px";
        document.querySelector(".header-inner .wee").style.width = width + "px";
      });

      item.addEventListener("mouseout", function () {
        const initWidth =
          document.querySelector(".header-inner .current-menu-item").offsetWidth;
        document.querySelector(".header-inner .wee").style.left = "0";
        document.querySelector(".header-inner .wee").style.width = initWidth + "px";
      });
    });
  }
});

document.querySelector();