document.addEventListener("DOMContentLoaded", (event) => {
  var windowWidth = document.getElementById("windowWidth");
  var windowHeight = document.getElementById("windowHeight");

  windowWidth.innerHTML = window.innerWidth;
  windowHeight.innerHTML = window.innerHeight;

  window.addEventListener("resize", (event) => {
    windowWidth.innerHTML = window.innerWidth;
    windowHeight.innerHTML = window.innerHeight;
  });
});
