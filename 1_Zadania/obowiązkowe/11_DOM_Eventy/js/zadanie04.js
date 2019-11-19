document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.getElementsByTagName("button");
    var counter = document.querySelector(".counter");

    for (var b of buttons) {
      b.addEventListener("click", event => {
        counter.innerHTML++;
      });
    }
});
