// Zadanie 0a.
var parentElements = document.getElementsByClassName("parent");

for (var i = 0; i < parentElements.length; i++) {
  parentElements[i].addEventListener("mouseenter", function(event) {
    this.children[0].style.display = "block";
  });

  parentElements[i].addEventListener("mouseleave", function(event) {
    this.children[0].style.display = "none";
  });
}
