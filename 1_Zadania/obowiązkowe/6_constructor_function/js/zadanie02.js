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
