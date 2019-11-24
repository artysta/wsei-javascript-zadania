document.addEventListener("DOMContentLoaded", (event) => {
  var checkBox = document.getElementById("invoice");
  var invoiceDiv = document.getElementById("invoiceData");
  checkBoxChange();

  checkBox.addEventListener("change", (event) => {
    checkBoxChange();
  })

  function checkBoxChange() {
    if (checkBox.checked == false) {
      invoiceDiv.style.display = "none";
    } else {
      invoiceDiv.style.display = "block";
    }
  }
});
