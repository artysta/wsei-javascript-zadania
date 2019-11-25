/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", (event) => {
  var tooltips = document.getElementsByClassName("tooltip");

  for (var i = 0; i < tooltips.length; i++) {
    tooltips[i].addEventListener("mouseover", function(event) {
      var tooltipSpan = document.createElement("span");

      tooltipSpan.classList.add("tooltipText");
      tooltipSpan.innerHTML = this.dataset.text;

      this.appendChild(tooltipSpan);
    });

    tooltips[i].addEventListener("mouseout", function(event) {
      this.removeChild(this.firstElementChild);
    });
  }
});
