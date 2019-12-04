// Zadanie 1.
var hello = () => console.log("Hello World!");
hello();

// Zadanie 2.
var multiply = (a = 10) => a * 2;
console.log(multiply());

// Zadanie 3.
var getGreater = (a, b) => a > b ? a : b;
console.log(getGreater(2, 5));

// Zadanie 4.
var getSecondMaxNumber = (array) => {
  array.sort((a, b) => a - b);
  return array[array.length - 2];
};

var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];
console.log(getSecondMaxNumber(arr1));

// Zadanie 5.
(a => a)("Hello World!");

// Zadanie 6.
var interval = (a = 5) => {
  var counter = 0;
  var intervalId = setInterval(() => {
    counter++;
    console.log("Hello")
    console.log("Licznik: " + counter)
    if (counter == a) {
      clearInterval(intervalId);
    }
  }, 1000);
};

interval();
