// Zadanie 0a.

let weather = ["snow", "rain", "sun"];
let [firstOne, , secondOne] = weather;

console.log(`${firstOne} ${secondOne}`);

// Zadanie 0b.
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}
let {type, autoStart} = slider;

console.log(`${type} ${autoStart}`);

// Zadanie 1.
let names = ["Thomas", "John", "Arthur"];
let [name1, name2, name3] = names;

console.log(`${name1} ${name2} ${name3}`);

// Zadanie 2.
function generateRandomNumbers() {
  let numbers = [];

  for (let i = 0; i < 6; i++) {
    numbers.push(Math.floor(Math.random() * 6));
  }

  return numbers;
}

let [a, , b] = generateRandomNumbers();

console.log(`${a} ${b}`);

// Zadanie 4.
function getAnimal() {
  return {
    name: "Mruczek",
    age: 10,
    getVoice: () => "miau miau"
  };
}

let animal = getAnimal();
let {name: catName, getVoice: catVoice} = animal;

console.log(`${catName} ${catVoice()}`);
