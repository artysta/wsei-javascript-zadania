document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

     // Zadanie 0.
     // Zakładam, że chodziło o pierwszy element o klasie title.
     var elementWithTitleClass = document.querySelector(".title");

     function getDataAnimation(element) {
       var animation = element.getAttribute("data-animation");
       return animation;
     }

     getDataAnimation(elementWithTitleClass);

     // Zadanie 1.
     // 1.1.
     var elementWithHomeId = document.getElementById("home");
     console.log(elementWithHomeId);

     var elementWithHomeId2 = document.querySelector("#home");
     console.log(elementWithHomeId2);

     // 1.2.
     var liElementWithAttrib = document.querySelector("li[data-direction]");
     console.log(liElementWithAttrib);

     // 1.3.
     var firstElementWithBlockClass = document.querySelector(".block");
     console.log(firstElementWithBlockClass);

     // Zadanie 2.
     // 2.1.
     var allLiElementsWithinNavTag = document.querySelectorAll("nav li");
     console.log(allLiElementsWithinNavTag.length);

     // 2.2.
     var allParagraphElementsWithinDivTag = document.querySelectorAll("div p");
     console.log(allParagraphElementsWithinDivTag.length);

     // 2.3.
     var allDivsWithinArticleTag = document.querySelectorAll("article div");
     console.log(allDivsWithinArticleTag.length);

     // Zadanie 3.
     // 3.1.
     var articleTagsWithFirstClass = document.querySelectorAll("article[class=first]");

     // 3.2.
     for (var i = 0; i < articleTagsWithFirstClass.length; i++) {
       var h1Elements = articleTagsWithFirstClass[i].getElementsByTagName("h1");
       console.log(h1Elements.length);
     }
});
