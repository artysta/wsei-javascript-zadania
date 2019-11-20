document.addEventListener("DOMContentLoaded", (event) => {
  var button = document.getElementById("remove");

  button.addEventListener("click", function(event) {
    this.parentElement.removeChild(this);
  });
});
