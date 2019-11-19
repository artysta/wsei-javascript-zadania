document.addEventListener("DOMContentLoaded", (event) => {
  var divs = document.getElementsByTagName("div");

  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseenter", function(event) {
      this.firstElementChild.firstElementChild.style.background = "#FF0000";
      this.firstElementChild.lastElementChild.style.background = "#0000FF";

      for (var k = 1; k < this.firstElementChild.children.length - 1; k++) {
        this.firstElementChild.children[k].style.background = "#00FF00";
      }
    });
  }
});
