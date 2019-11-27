document.addEventListener('DOMContentLoaded', function () {
  var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

  // Zadanie 0.
  var result = cities.map(element => {
    return element.length;
  });

  console.log(result);

  // Zadanie 1.
  function randomize(param1, param2, callback) {
    if (typeof callback != "function") return;
    callback(param1, param2);
  }

  randomize(90, 100, (a, b) => {
    console.log(Math.floor(Math.random() * (b - a) + a));
  });

  // Zadanie 2.
  var animals = ["cat", "shrimp", "giraffe"];

  animals.forEach(element => {
    console.log(element);
  });

  // Zadanie 3.
  var years = [1995, 1856, 2014, 1987];
  var result = years.map(element => {
    return new Date().getFullYear() - element;
  })

  console.log(result);

  var numbers = [5, 10, 12, 20, 100];
  var result = numbers.reduce(function (prev, curr, index, array) {
      return prev * curr;
  })
  console.log(result);
})
