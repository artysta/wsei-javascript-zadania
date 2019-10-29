hello(); // Ok.

function hello() {
  console.log("Cześć");
}

hello(); // Ok.

tmp(); // Błąd: "Uncaught TypeError: tmp is not a function.".

var tmp = function welcome() {
  console.log("Witaj");
}

tmp(); // Ok.

// Funkcję można wywołać przed zdefiniowaniem jej, jak i po.
// W przypadku wyrażenia funkccyjnego nie ma jednak takiej możliwości. Funkcję da się wywołać na podstawie zmiennej dopiero po przypisaniu definicji.
