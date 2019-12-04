let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.

    /*
      timeOfDay -> noc
      character -> ogrzyca
      lover -> Shrek

      Zmienne character i timeOfDay deklarowane są ponownie wewnątrz bloku, stąd też przypisane zostają do nich nowe wartości.
      Gdyby pominąć ponowną deklarację, zmienne posiadałyby takie wartości, jakie przypisane zostały do nich przed blokiem.
      Blok ma bowiem dostęp do zmiennych znajdujących się "na zewnątrz".
    */
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.

/*
  timeOfDay -> dzień
  character -> księżniczka
  lover -> Shrek

  W tej sytuacji zmienne znajdujące się w bloku kodu nie są w ogóle brane pod uwagę, ponieważ ich zasięg ogranicza się wyłącznie do niego.
  Zmienne mają więc wartości, które zostały do nich przypisane przy pierwszej deklaracji.
*/
