document.addEventListener("DOMContentLoaded", (event) => {
  var list1 = document.getElementById("list1");
  var list2 = document.getElementById("list2");
  var buttons = document.getElementsByClassName("moveBtn");

  function move(event) {
    var elementToMove = this.parentElement.cloneNode(true);
    elementToMove.firstElementChild.addEventListener("click", move);

    if (this.parentElement.parentElement.id == "list1") {
      list2.appendChild(elementToMove);
    } else {
      list1.appendChild(elementToMove);
    }

    this.parentElement.parentElement.removeChild(this.parentElement);
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", move);
  }
});
