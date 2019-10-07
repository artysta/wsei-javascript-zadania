// Zadanie 0.
const distFromAverage = (arr) => {
    let avg;
    let sum = 0;

    arr.forEach(item => {
        sum += item;
    })

    avg = sum / arr.length;
    let newArr = [];

    arr.forEach(item => {
        newArr.push(item - avg);
    })

    console.log(newArr);
    return newArr;
}

distFromAverage([1, 2, 3, 4, 5, 6, 7]);

// Zadanie 1.
var fruits = ["apple", "banana", "orange", "raspberry"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Zadanie 2.
function createArray(number) {
    if (number <= 0) {
      return new Array();
    }

    var newArray = new Array();

    for (var counter = 0; counter < number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// Zadanie 3.
function printTable(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

printTable(["Java", "C#", "JavaScript", "Python"]);

// Zadanie 4.
function multiply(array) {
  var sum = 1;

  for (var i = 0; i < array.length; i++) {
    sum *= array[i];
  }

  return sum;
}

multiply([1, 2, 3, 4, 5, 6, 7]);

// Zadanie 5.
function getEvenAverage(array) {
  var evenCounter = 0;
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      evenCounter += 1
      sum += array[i];
    }
  }

  if (evenCounter == 0) {
    return null;
  }

  return sum / evenCounter;
}

getEvenAverage([1,2,3,4,5,6,7]);

// Zadanie 6.
function sort(array) {
  array.sort(function(a, b){return a - b});
  return(array);
}

sort([145,11,3,64,4,6,10]);

// Zadanie 7.
function addArrays(array1, array2) {
  var outputArray;

  if (array1.length > array2.length) {
    outputArray = array1;

    for (var i = 0; i < array2.length; i++) {
      outputArray[i] += array2[i];
    }
  } else {
    outputArray = array2;

    for (var i = 0; i < array1.length; i++) {
      outputArray[i] += array1[i];
    }
  }

  return outputArray;
}

addArrays([4,0,1,3,4], [1,9,6,7,8,17]);
