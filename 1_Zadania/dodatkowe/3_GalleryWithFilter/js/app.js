/*
  Uwagi (Punkt 8):
  Strona nie funkcjonuje tak jak należy ze względu na to, jak działa metoda indexOf,
  która zwraca liczę -1, jeśli w ogóle nie znajdzie poszukiwanej frazy i liczbę większą, jeśli ją znajdzie.
  Problem w tym, że w takiej sytuacji liczba większa lub równa 0 oznacza index początku poszukiwanej frazy.
  Jeśli więc w przypadku tej strony wyszukamy frazę "bike", to uznana zostanie również fraza motorBIKE.
  Podobbnie wygląda to również w przypadku pojedynynczych liter, np. przy wpisaniu literki "l"
  i kliknięciu hide, znikają wszystkie obrazki, ponieważ w każym przypadku dataset-tag zawiera tę literkę.
*/

document.addEventListener("DOMContentLoaded", event => {
  var images = document.getElementsByTagName("img");
  var showBtn = document.getElementById("showButton");
  var hideBtn = document.getElementById("hideButton");
  var input = document.getElementById("tagInput");

  console.log(images[4].dataset.tag.indexOf("nightlife"));

  showBtn.addEventListener("click", event => {
    var tagName = input.value;

    if (tagName == "") {
      return;
    }

    for (var img of images) {
      if (img.dataset.tag.indexOf(tagName) >= 0) {
        if (img.classList.contains("invisible")) {
          img.classList.remove("invisible");
        }
      }
    }

    input.value = "";
  });

  hideBtn.addEventListener("click", event => {
    var tagName = input.value;

    if (tagName == "") {
      return;
    }

    for (var img of images) {
      if (img.dataset.tag.indexOf(tagName) >= 0) {
        if (!img.classList.contains("invisible")) {
          console.log(img);
          img.classList.add("invisible");
        }
      }
    }

    input.value = "";
  });
});
