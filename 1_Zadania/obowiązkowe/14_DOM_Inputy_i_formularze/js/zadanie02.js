document.addEventListener("DOMContentLoaded", (event) => {
  var select = document.querySelector(".form-control");
  var btn = document.querySelector("button");
  var images = document.getElementsByTagName("img");
  showSelected();
  // OS X 0
  // UBUNTU 1
  // WINDOWS 2

  images[0].setAttribute("alt", "Os X");

  select.addEventListener("click", event => {
    showSelected();
  })

  function showSelected() {
    for (var i = 0; i < images.length; i++) {
      console.log(images[i].getAttribute("alt") + " - " + select.value + " = " + (images[i].getAttribute("alt") == select.value));
      if (images[i].getAttribute("alt") == select.value) {
        images[i].style.display = "block";
      } else {
        images[i].style.display = "none";
      }
    }
  }

});
