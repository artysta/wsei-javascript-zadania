document.addEventListener('DOMContentLoaded', (event) => {
    var buttons = document.getElementsByTagName("button");
    var counters = document.getElementsByClassName("counter");

    buttons[0].addEventListener("click", (event) => {
      counters[0].innerHTML++;
    });

    buttons[1].addEventListener("click", (event) => {
      counters[1].innerHTML++;
    });

    buttons[2].addEventListener("click", (event) => {
      counters[2].innerHTML++;
    });
});
