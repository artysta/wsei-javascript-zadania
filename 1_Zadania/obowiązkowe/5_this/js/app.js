// Zadanie 0.
var car = {
  brand: "Volga",
  color: "Black",
  numberOfKilometers: 0,
  printCarInfo: function() {
    return this.color + " " + this.brand + ", " + this.numberOfKilometers + " km.";
  },
  drive: function(km) {
    this.numberOfKilometers += km;
  }
}

console.log(car.printCarInfo());
car.drive(50);
console.log(car.printCarInfo());

// Zadanie 1.
// Nie byłem pewien co do funkcji, więc je również dodałem poza ciałem obiektu.
var car = {
  brand: "Volga",
  color: "Black",
  numberOfKilometers: 0,
  printCarInfo: function() {
    return this.color + " " + this.brand + ", " + this.numberOfKilometers + " km.";
  },
  drive: function(km) {
    this.numberOfKilometers += km;
  },
}

car["carInspectionDates"] = ["29.04.2011", "27.04.2012", "25.04.2013"];

car["addNewCarInspectionDate"] = function(date) {
  this.carInspectionDates.push(date);
}

car["getCarInspectionDates"] = function() {
  return this.carInspectionDates;
}

// Zadanie 2.
var calculator = {
    save: function (newA, newB) {
        this.a = newA;
        this.b = newB;
    },
    sum: function() {
      return this.a + this.b;
    },
    multiply: function() {
      return this.a * this.b;
    }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());

// Zadanie 3.
// Zadanie 3.

var stairs = {
  step: 0,
  up: function() {
    this.step++;
  },
  down: function() {
    this.step--;
  },
  printStep: function() {
    console.log(this.step);
  }
}
