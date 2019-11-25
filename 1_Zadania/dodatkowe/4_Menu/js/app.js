document.addEventListener("DOMContentLoaded", (event) => {
      var menuLi = document.querySelectorAll(".nav>ul>li");

      for (var i = 0; i < menuLi.length; i++) {
        menuLi[i].addEventListener("mouseover", function(event) {
          var ulChild = this.firstElementChild;
          if (ulChild != null) {
            ulChild.style.display = "block";
          }
        });

        menuLi[i].addEventListener("mouseout", function(event) {
          var ulChild = this.firstElementChild;
          if (ulChild != null) {
            ulChild.style.display = "none";
          }
        });
      }
});
