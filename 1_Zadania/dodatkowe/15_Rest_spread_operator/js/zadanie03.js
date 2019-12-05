let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

function setFunnyName(...args) {
  args.forEach(p => people.push(p));
}

setFunnyName(
  {person: "Tommy Shelby", profession: "bukmacher"},
  {person: "Mr Robot", profession: "hakier"},
  {person: "Dr House", profession: "doktor"}
);

console.log(people);
