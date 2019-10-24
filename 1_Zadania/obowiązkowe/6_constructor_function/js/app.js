// Zadanie 0.
function Basket() {
  this.products = [];
  this.sum = 0;

  this.addProduct = function(name, price) {
    this.products.push(name);
    this.sum += price;
  }

  this.showBasket = function() {
    console.log("Products in basket: " + this.products);
    console.log("Total price: " + this.sum);
  }
}

var myBasket = new Basket();

myBasket.addProduct("Apple", 5);
myBasket.addProduct("Banana", 10);
myBasket.addProduct("Raspberry", 15);
myBasket.showBasket();

// Zadanie 1.
var Robot = function (name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function (newName) {
    console.log("Robot " + this.name + " changes name to " + newName);
    this.name = newName;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

// Zadanie 2.
function Calculator() {
  this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
  var result = num1 + num2;
  this.history.push("Added " + num1 + " to " + num2 + ". Got result " + result + ".");
  return result;
}

Calculator.prototype.multiply = function(num1, num2) {
  var result = num1 * num2;
  this.history.push("Multiplied " + num1 + " with " + num2 + ". Got result " + result + ".");
  return result;
}

Calculator.prototype.substract = function(num1, num2) {
  var result = num1 - num2;
  this.history.push("Substracted " + num1 + " from " + num2 + ". Got result " + result + ".");
  return result;
}

Calculator.prototype.divide = function(num1, num2) {
  if (num2  != 0) {
    var result = num1 / num2;
    this.history.push("Divided " + num1 + " by " + num2 + ". Got result " + result + ".");
    return result;
  } else {
    this.history.push("Error. Can not divide by 0!");
    return null;
  }
}

Calculator.prototype.printOperations = function() {
  for (var tmp in this.history) {
    console.log(this.history[tmp]);
  }
}

Calculator.prototype.clearOperations = function() {
  this.history = [];
}

var calc = new Calculator();
calc.add(2, 2);
calc.multiply(2, 5);
calc.substract(10, 2);
calc.divide(20, 5);
calc.divide(30, 0);

calc.printOperations();
