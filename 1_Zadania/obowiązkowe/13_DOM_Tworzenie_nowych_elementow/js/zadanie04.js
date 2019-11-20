document.addEventListener("DOMContentLoaded", (event) => {
  var button = document.getElementById("remove");
  var list = document.querySelector(".list");

  button.addEventListener("click", function(event) {
    var tmp = list.children.length;

    for (var i = 0; i < tmp; i++) {
      list.removeChild(list.firstElementChild);
    }
  });
});
