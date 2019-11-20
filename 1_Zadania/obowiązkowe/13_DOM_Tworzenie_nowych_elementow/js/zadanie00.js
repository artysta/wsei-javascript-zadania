document.addEventListener("DOMContentLoaded", (event) => {
  var table = document.getElementById("orders").firstElementChild;
  var buttons = document.getElementsByClassName("deleteBtn");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
      table.removeChild(this.parentElement.parentElement);
    })
  }
});
