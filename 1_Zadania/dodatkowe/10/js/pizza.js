// W dokumencie brakuje elementu "page-info" wspomnianego w treści zadania.
document.addEventListener("DOMContentLoaded", (event) => {
  var priceSpan = document.getElementById("price");
  var checkBoxElements = document.getElementsByTagName("input");
  var maxPrice = getMaxPrice();

  // Event dla pierwszego checkboksa (Wszystkie dodatki).
  checkBoxElements[0].addEventListener("change", function(event) {
    if (this.checked == true) {
      checkAll();
    } else {
      uncheckAll();
    }
  });

  // Event dla wszystkich checkboksów poza skrajnymi.
  for (var i = 1; i < checkBoxElements.length - 1; i++) {
    checkBoxElements[i].addEventListener("change", function(event) {
      var price = parseFloat(priceSpan.innerHTML);

      if (this.checked == true) {
        price += parseFloat(this.dataset.price);
      } else {
        price -= parseFloat(this.dataset.price);
      }

      priceSpan.innerHTML = price.toFixed(2) + "zł";
    });
  }

  // Event dla ostatniego checkboksa (Wyczyść).
  checkBoxElements[checkBoxElements.length - 1].addEventListener("click", function(event) {
    uncheckAll();
  });

  // Funkcje.
  // Zaznacza wszystkie checkboksy poza ostatnim.
  function checkAll() {
    for (var i = 0; i < checkBoxElements.length - 1; i++) {
      checkBoxElements[i].checked = true;
    }

    priceSpan.innerHTML = maxPrice + "zł";
  }

  // Odznacza wszystkie checkboksy.
  function uncheckAll() {
    for (var i = 0; i < checkBoxElements.length; i++) {
      checkBoxElements[i].checked = false;
    }

    priceSpan.innerHTML = "0zł";
  }

  // Zwraca maksymalną cenę (sumę cen wszystkich dostępnych dodatków).
  function getMaxPrice() {
    var tmp = 0;

    for (var i = 1; i < checkBoxElements.length - 1; i++) {
      tmp += parseFloat(checkBoxElements[i].dataset.price);
    }

    return tmp.toFixed(2);
  }
});
