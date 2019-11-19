document.addEventListener("DOMContentLoaded", (event) => {
  var globalX = document.getElementById("globalX");
  var globalY = document.getElementById("globalY");
  var localX = document.getElementById("localX");
  var localY = document.getElementById("localY");

  var divElement = document.querySelector("div");

  divElement.addEventListener("mousemove", (event) => {
    globalX.innerHTML = event.clientX;
    globalY.innerHTML = event.clientY;
    localX.innerHTML = event.offsetX;
    localY.innerHTML = event.offsetY;
  });
});
