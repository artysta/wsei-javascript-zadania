// Zadanie 0.
let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", ...namesA, "Jan", "Karol" ];

function getAverage(...args) {
  return (args.reduce((sum, num) => sum + num) / args.length).toFixed(2);
}

console.log(getAverage(2, 4, 4));

// Zadanie 1.
let name = "Adrian";
let letters = [];

letters.push(...name);
letters.forEach((item) => console.log(item));

// Zadanie 2.
let fruits = ["Apple", "Raspberry", "Orange"];
let vegetables = ["Tomato", "Cucumber", "Pepper"];
let mix = [];

mix.push(...fruits);
mix.push(...vegetables);

console.log(mix);
