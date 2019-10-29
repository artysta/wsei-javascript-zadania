/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


// Deklaracja funkcji "jeden".
function jeden() {

    // Deklaracja i inicjalizacja zmiennej "zmienna1" - jest ona dostępna dla obu funkcji.
    var zmienna1 = 1;

    // Deklaracja funkcji "dwa".
    function dwa() {

        // Wypisanie zawartości zmiennej "zmienna1", znajdującej się w zakresie funkcji "jeden".
        // To zadziała, ponieważ funkcja "dwa" ma dostęp do zmiennych lokalnych funkcji "jeden", w której jest zagnieżdzona.
        console.log(zmienna1);

        // Deklaracja i inicjalizacja zmiennej "zmienna2" - jest ona dostępna jedynie dla funkcji dwa.
        var zmienna2 = 3;
    }

    // Wywołanie funkcji "dwa".
    dwa();

    // Wypisanie zawartości zmiennej "zmienna2", znajdującej się w zakresie funkcji "dwa".
    // To NIE zadziała, ponieważ funkcja "jeden" nie ma dostępu do zmiennych lokalnych funkcji "dwa", która jest w niej zagnieżdżona.
    console.log(zmienna2)
}

// Wywołanie funkcji "jeden".
jeden()
