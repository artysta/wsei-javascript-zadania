// Zadanie 0.
const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

function whoAreYou(object) {
  console.log(
`My name is ${object.name} ${object.lastName}.
I am ${new Date().getFullYear() - object.yearOfBirth} years old.
My profession is ${object.proffesion}.`
  );
}

whoAreYou(person);

// Zadanie 1.
let a = 5;
let b = 15;

console.log(`Suma dwóch liczb ${a} i ${b} to ${a + b}.`);

// Zadanie 2.
let name = "Adrian";

console.log(`Moje imie to: ${name} Kurek.`);

// Zadanie 3.
console.log(
`"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`);

// Zadanie 4.
const button = {
  value: "Send message",
  idName: "sendMsg",
  width: "100px",
  padding: "20px",
}

console.log(
`To jest button.
Jego szerokość to ${button.width}.
Napis, który na nim widnieje to "${button.value}".`
);
