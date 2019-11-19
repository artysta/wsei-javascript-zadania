document.addEventListener("DOMContentLoaded", (event) => {
  // Zadanie 0.
  // 0.1.
  var firstElement = document.querySelector(".first");
  var firstChild = firstElement.firstElementChild;
  var thridChild = firstChild.children[2];

  console.log(firstChild);
  console.log(thridChild);

  // 0.2.
  var secondElement = document.querySelector("#second");
  var parent = secondElement.parentElement;
  var fourthChild = parent.children[3];

  console.log(parent);
  console.log(fourthChild);

  // 0.3.
  var elementsWithH1Tag = document.getElementsByTagName("h1");
  var elementWithDataExAttrib;

  for (var i = 0; i < elementsWithH1Tag.length; i++) {
    if (elementsWithH1Tag[i].getAttribute("data-ex") == "third") {
      elementWithDataExAttrib = elementsWithH1Tag[i];
      break;
    }
  }

  // Nie miałem pomysłu, jak inaczej sensownie nazywać te zmienne. :(
  var grandparentElement = elementWithDataExAttrib.parentElement.parentElement;
  var lastChildOfGrandpa = grandparentElement.children[grandparentElement.children.length - 1];
  var firstChildOfLastChildOfGrandpa = lastChildOfGrandpa.firstElementChild;
  var middleChildOfFirstChildOfLastChildOfGrandpa = firstChildOfLastChildOfGrandpa.children[Math.floor(firstChildOfLastChildOfGrandpa.children.length / 2)];

  console.log(lastChildOfGrandpa);
  console.log(firstChildOfLastChildOfGrandpa);
  console.log(middleChildOfFirstChildOfLastChildOfGrandpa);


  // 0.4.
  var div = document.querySelector("div.forth");
  var parentOfDiv = div.parentElement;
  var firstChildWithArticleTag;

  for (var i = 0; i < parentOfDiv.children.length; i++) {
    if (parentOfDiv.children[i].tagName == "ARTICLE") {
      firstChildWithArticleTag = parentOfDiv.children[i];
      break;
    }
  }

  var secondChildWithPTag;
  var tmp = 0;

  for (var i = 0; i < firstChildWithArticleTag.children.length; i++) {
    if (firstChildWithArticleTag.children[i].tagName == "P") {
      tmp++;
      if (tmp == 2) {
        secondChildWithPTag = firstChildWithArticleTag.children[i];
        break;
      }
    }
  }

  console.log(parentOfDiv);
  console.log(firstChildWithArticleTag);
  console.log(secondChildWithPTag);

});
