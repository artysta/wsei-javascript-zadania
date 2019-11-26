// Zadanie 2.
// 2.1. - Pobranie informacji z atrybutu data.
var menu = document.getElementById("menu");

function getDataInfo(element) {
  var data = [];

  for (var i = 0; i < element.children.length; i++) {
    data.push(element.children[i].dataset.info);
  }

  return data;
}

console.log(getDataInfo(menu));

// 2.2. - Szukanie elementu po id.
var mainContener = document.getElementById("main-contener");

function getElementClass(element) {
  var classes = [];

  for (var i = 0; i < element.classList.length; i++) {
    classes.push(element.classList[i]);
  }

  return classes;
}

console.log(getElementClass(mainContener));

// 2.3. - Szukanie elementu po klasie.
var pinkElement = document.querySelector(".pink-color");

function getElementText(element) {
  return element.innerHTML;
}

console.log(getElementText(pinkElement));

// 2.4. - Szukanie elementu po klasie.
var images = document.getElementsByClassName("images");

function getElementAlt(element) {
  var alts = [];

  for (var i = 0; i < element.length; i++) {
    alts.push(element[i].getAttribute("alt"));
  }

  return alts;
}

console.log(getElementAlt(images));

// 2.5. - Szukanie elementu po klasie.
var linkElements = document.getElementsByClassName("my-link");

function getElementHref(element) {
  var links = [];

  for (var i = 0; i < element.length; i++) {
    links.push(element[i].getAttribute("href"));
  }

  return links;
}

console.log(getElementHref(linkElements));
