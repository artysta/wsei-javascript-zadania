// Zadanie 1.
function getNumber(number, array) {
  return array.includes(number);
}

console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));

// Zadanie 2.
function createIdentityMatrix(rows, columns) {
  /*
  Tylko macierz kwadratowa może być macierzą jednostkową.
  Liczba wierszy i kolumn musi być więc taka sama.
  */
  if (rows != columns) return null;

  var firstTable = [];

  for (var i = 0; i < columns; i++) {
      var secondTable = [];

      for (var k = 0; k < rows; k++) {
        if (i == k) {
          secondTable.push(1);
        } else {
          secondTable.push(0);
        }
      }

      firstTable.push(secondTable);
  }

  return firstTable;
}

console.log(createIdentityMatrix(4, 4));

// Zadanie 3.
var planets = [
    {
        name: "Merkury",
        numberOfMoons: 0
    },
    {
        name: "Wenus",
        numberOfMoons: 0
    },
    {
        name: "Ziemia",
        numberOfMoons: 1
    },
    {
        name: "Mars",
        numberOfMoons: 2
    },
    {
        name: "Jowisz",
        numberOfMoons: 63
    },
    {
        name: "Saturn",
        numberOfMoons: 60
    },
    {
        name: "Uran",
        numberOfMoons: 27
    },
    {
        name: "Neptun",
        numberOfMoons: 13
    }
];

function sortPlanets(planets) {
  return planets.sort((a, b) => a.numberOfMoons - b.numberOfMoons);
}

// Sprawdzenie.
var sortedPlanets = sortPlanets(planets);
console.log(sortedPlanets);

// Zadanie 1 - dodatkowe.
function addTheSameNumbers(number, array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == number) {
      sum += number;
    }
  }

  if (sum == 0 && number != 0) return null;

  return sum;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));

// Zadanie 2 - dodatkowe.
function factors(number) {
  if (number < 1) return [];
  var output = [];

  for (var i = number; i > 0; i--) {
    if (number % i == 0) {
      output.push(i);
    }
  }

  return output;
}

console.log(factors(54));

// Zadanie 3 - dodatkowe.
function getMissingElement(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] - numbers[i] > 1) {
      return ++numbers[i];
      break;
    }
  }

  return null;
}

console.log(getMissingElement([1,2,3,4,5,6,7]));
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));

// Zadanie 4 - dodatkowe.
function getLastNumbers(number, array) {
  if (typeof number != "number") return [];
  if (number > array.length) return [];

  var output = [];

  for (var i = 0; i < number; i++) {
    output.push(array[i + array.length - number]);
  }

  return output;
}

console.log(getLastNumbers(2, [1,2,3,4,5,6,7]));
console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15]));
console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4]));
console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4]));
