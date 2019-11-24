/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", event => {
  var images = document.getElementsByTagName("li");
  var body = document.querySelector("body");

  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(event) {
      // Create new elements.
      var newDiv = document.createElement("div");
      newDiv.classList.add("fullScreen");

      var newImg = document.createElement("img");
      var imgSrc = this.firstElementChild.getAttribute("src");
      newImg.setAttribute("src", imgSrc);

      var newBtn = document.createElement("button");
      newBtn.classList.add("close");
      newBtn.innerHTML = "Close";

      newBtn.addEventListener("click", function(event) {
        body.removeChild(newDiv);
      });

      newDiv.appendChild(newImg);
      newDiv.appendChild(newBtn);

      body.appendChild(newDiv);
    });
  }
});
