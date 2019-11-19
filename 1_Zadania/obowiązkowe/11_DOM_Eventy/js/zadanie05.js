document.addEventListener('DOMContentLoaded', (event) => {
  var divElements = document.getElementsByTagName("div");

  console.log(divElements.length);

  for (var i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener("click", function(event) {
      var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      this.style.backgroundColor = randomColor;
    });
  }
});
