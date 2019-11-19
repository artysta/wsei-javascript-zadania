document.addEventListener("DOMContentLoaded", (event) => {
  var buttons = document.getElementsByClassName("button");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      if (this.nextElementSibling != null) {
        if (this.nextElementSibling.style.display == "none") {
          this.nextElementSibling.style.display = "block";
        } else {
          this.nextElementSibling.style.display = "none";
        }
      }
    });
  }
});
