// Zadanie 0a.
// W treści zadania wskazane jest, by stworzyć obiekt "city". Zakładam, że to pomyłka i nazwalem obiekt "country".
var country = {
    capital: "Warsaw",
    population: 38413000,
    president: "Andrzej Duda",
    primeMinisters: ["Mateusz Morawiecki"]
}

console.log(country.capital);
console.log(country.population);
console.log(country.president);
console.log(country.primeMinisters);

// Zadanie 0b.
var timeMachine = {
  shape: "Cube",
  model: "T-800",
  run: function(date, place) {
    console.log("Date: " + date);
    console.log("Place: " + place);
  }
}

console.log(timeMachine.shape);
console.log(timeMachine.model);
timeMachine.run("24.12.1999", "Tokyo");

// Zadanie 1.
var book = {
  title: "House and Psychology: Humanity Is Overrated",
  author: "Leonard L. Martin",
  numberOfPages: 336
}

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// Zadanie 2.
var person = {
  name: "Adrian",
  age: 26,
  sayHello: function() {
    console.log("Hello!");
  }
}

console.log(person.name);
console.log(person.age);
person.sayHello();

// Zadanie 3.
var recipe = {
  title: "Dumplings"
}

recipe["ingredients"] = ["cottage cheese", "onion", "potatoes", "flour", "water", "oil"];

console.log(recipe.title);
console.log(recipe.ingredients);

// Zadanie 4.
var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (var tmp in movie) {
  console.log(movie[tmp]);
}

// Zadanie 5.
// Nie jestem pewien, czy aby na pewno o tego rodzaju wypisanie danych chodziło.
var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]

for (var tmp in animals) {
  console.log(animals[tmp]);
}

for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Zadanie 6.
var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

if (!spoon.isExist) {
  console.log ("Do not try and bend the spoon, that's impossible. Instead, only try to realize the truth...there is no spoon. Then you'll see that it is not the spoon that bends, it is only yourself.")
}
