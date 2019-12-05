let foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  print() {
    console.log(this.name + ": " + this.protein + "g protein, " + this.carbs + "g carbs " + this.fat + "g fat.");
  }
}

class FatFreeFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
}

class FastFood extends Food {
  constructor(name, protein, carbs, fat) {
    super(name, protein, carbs, fat);
  }
}

var list = document.getElementById("products");
var form = document.querySelector("form");

var nameInput = document.getElementById("name");
nameInput.value = "";
nameInput.setAttribute("placeholder", "Podaj nazwę produktu...");
nameInput.setAttribute("required", "required");

var proteinsInput = document.getElementById("proteins");
proteinsInput.setAttribute("type", "number");
proteinsInput.setAttribute("placeholder", "Protein...");
proteinsInput.setAttribute("required", "required");

var carbsInput = document.getElementById("carbs");
carbsInput.setAttribute("type", "number");
carbsInput.setAttribute("placeholder", "Carbs...");
carbsInput.setAttribute("required", "required");

var fatInput = document.getElementById("fat");
fatInput.setAttribute("type", "number");
fatInput.setAttribute("placeholder", "Fat...");
fatInput.setAttribute("required", "required");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = nameInput.value;
  var proteins = proteinsInput.value;
  var carbs = carbsInput.value;
  var fat = fatInput.value;
  var kcal = (proteins * 4 + carbs * 4 + fat * 9).toFixed(2);

  if (kcal > 250) {
    var product = new FastFood(name, proteins, carbs, fat);
  } else {
    var product = new FatFreeFood(name, proteins, carbs, fat);
  }

  foods.push(product);
  foods.forEach((element, index) => element.print());

  var listItem = document.createElement("li");
  listItem.innerHTML = name + ": " + proteins + " g proteins, " + carbs + " g carbs " + fat + " g fat - total " + kcal + " kcal.";
  list.appendChild(listItem);
});
