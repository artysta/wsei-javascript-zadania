
/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

// Deklaracja funkcji "sortArray".
function sortArray() {

    // Deklaracja i inicjalizacja tablicy "points" zawierającej liczby.
    var points = [41, 3, 6, 1, 114, 54, 64];

    // Wywołanie funkcji sortującej "sort" na tablicy "points".
    // Funkcja "sort" przyjmuje jako parametr dwuparametrową funkcję zwracającą różnicę dwóch liczb. Pozwala to na ich prawidłowe posortowanie.
    // Parametr w przypadku funkcji "sort" nie musi być podawany, jednak w takiej sytuacji dane (w tym przypadku liczby) zostaną posortowane alfabetycznie.
    points.sort(function (a, b) {
        // Zwrócenie różnicy "a" i "b".
        return a - b;
    });

    // Zwrócenie prawidłowo posortowanej tablicy "points".
    return points;
}

// Wywołanie funkcji "sortArray".
sortArray();
