document.addEventListener("DOMContentLoaded", event => {
  var prevBtn = document.getElementById("prevPicture");
  var nextBtn = document.getElementById("nextPicture");
  var images = document.getElementsByTagName("li");
  var index = 0;

  images[index].classList.add("visible");

  prevBtn.addEventListener("click", event => {
    images[index].classList.remove("visible");
    index--;

    if (index < 0) {
      index = images.length - 1;
    }

    images[index].classList.add("visible");
  });

  nextBtn.addEventListener("click", event => {
    images[index].classList.remove("visible");
    index++;

    if (index >= images.length) {
      index = 0;
    }

    images[index].classList.add("visible");
  })

});
