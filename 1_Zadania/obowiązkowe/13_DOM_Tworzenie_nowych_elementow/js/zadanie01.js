document.addEventListener("DOMContentLoaded", (event) => {
  var button = document.querySelector(".button");
  var menu = document.querySelector(".menu");
  var counter = 0;

  button.addEventListener("click", (event) => {
    var newElement = document.createElement("li");
    newElement.innerHTML = "Element " + counter + " - w chwili dodania było " + counter + " elementów";
    menu.appendChild(newElement);
    counter++;
  });
});
