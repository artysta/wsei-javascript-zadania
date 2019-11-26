document.addEventListener("DOMContentLoaded", (event) => {
  var articles = document.getElementsByTagName("article");

  articles[0].children[1].addEventListener("click", function(event) {
    this.nextSibling.nextSibling.style.display = "block";
  });

  articles[1].children[1].addEventListener("mouseover", function(event) {
    this.nextSibling.nextSibling.style.display = "block";
  });
});
