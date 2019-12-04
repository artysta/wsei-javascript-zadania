
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";

// TypeError: Assignment to constant variable.
name = "Adrian";

//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1, 2, 3, 4];

// a) - TypeError: Assignment to constant variable.
simpleArray = [-1, -2, -3, -4];

// b) - Ok.
simpleArray.push(5);
console.log(simpleArray[4]);

// c) - Ok.
simpleArray[0] = 9;
console.log(simpleArray[0]);

//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}

// a) - TypeError: Assignment to constant variable.
dog = {
  name: "Szarik",
  skill: "driving a tank"
}

// b) - Ok.
dog.killing = "jumping";
console.log(dog.killing);

// c) - Ok.
dog.age = 5;
console.log(dog.age);

// Wnioski: typ const oznacza, że do raz zdefiniowanej zmiennej nie można przypisać innej wartości.
// Nie dotyczy to jednak właśnie elementów tablicy. Jeśli tablica posiada typ const, to możemy modyfikować je etc..
// Sytuacja wygląda identycznie w przypadku obiektów tworzonych w JS.
