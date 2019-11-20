document.addEventListener("DOMContentLoaded", (event) => {
  var button = document.getElementById("addBtn");
  var table = document.getElementById("orders");

  button.addEventListener("click", (event) => {
    var orderId = document.getElementById("orderId").value;
    var item = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;

    var newTr = document.createElement("tr");

    var orderIdTd = document.createElement("td");
    orderIdTd.innerHTML = orderId;

    var itemTd = document.createElement("td");
    itemTd.innerHTML = item;

    var quantityTd = document.createElement("td");
    quantityTd.innerHTML = quantity;

    newTr.appendChild(orderIdTd);
    newTr.appendChild(itemTd);
    newTr.appendChild(quantityTd);

    table.appendChild(newTr);
  });
});
