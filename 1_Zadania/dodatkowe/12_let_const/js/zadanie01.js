//I. Sprawdź najpierw zasięg let
let numbers = [2, 3, 4];
{
    // A1 - wypisuję zmienną numbers przed deklaracją
    // Wynik w konsoli to: ReferenceError: Cannot access 'numbers' before initialization.
    // Dlaczego taki wynik? Hoisting sprawia, że deklaracje zmiennych "przenoszone" są na "sam początek" ich zasięgu.
    // Nie przenoszona jest jednak przypisana do zmiennych wartość, dlatego też nie ma do nich dostępu.
    console.log(numbers);

    // A2 - wypisuję zmienną numbers po deklaracji
    // Wynik w konsoli to: [2, 3, 4].
    // Dlaczego taki wynik? Tutaj wszystko jest okej, ponieważ wypisujemy zmienną już po deklaracji zmiennej i przypisaniu do niej wartości.
    console.log(numbers);
}

// A3 - wypisuję zmienną numbers za blokiem
// Wynik w konsoli to: ReferenceError: numbers is not defined.
// Dlaczego taki wynik? Jeżeli zmienna deklarowana jest w osobnym bloku kodu, to w przypadku zmiennej let ma ona wyłącznie jego zasięg - stąd też tutaj uważana jest za niezdefiniowaną.
console.log(numbers);

// II. Sprawdź teraz  zasięg const
const PI = 3.14;
{
    // A1 - wypisuję zmienną PI przed deklaracją
    // Wynik w konsoli to: ReferenceError: Cannot access 'PI' before initialization.
    // Dlaczego taki wynik? Sytuacja taka sama jak w przypadku zmiennej numbers.
    console.log(PI);

    // A2 - wypisuję zmienną PI po deklaracji
    // Wynik w konsoli to: 3.14.
    // Dlaczego taki wynik? Tutaj również wszystko jest okej, ponieważ wypisujemy zmienną już po deklaracji zmiennej i przypisaniu do niej wartości.
    console.log(PI);
}

// A3 - wypisuję zmienną PI za blokiem
// Wynik w konsoli to: ReferenceError: PI is not defined.
// Dlaczego taki wynik? To samo co w przypadku zmiennej numbers. Jeżeli zmienna deklarowana jest w osobnym bloku kodu, to w przypadku zmiennej const ma ona wyłącznie jego zasięg - stąd też tutaj uważana jest za niezdefiniowaną.
console.log(PI);
