document.addEventListener("DOMContentLoaded", (event) => {
  var buttons = document.getElementsByClassName("button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      this.parentElement.style.background = randomColor;
    });
  }
});
