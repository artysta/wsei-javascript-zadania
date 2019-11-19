document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";
});

// 1.
// Gdy tag <script> znajduje się w skecji <head>, to znajdujący się w nim kod wykonuje się jeszcze przed utworzeniem elementów takich jak paragraf, czy tag <div> i znajdująca się w nim lista.
// Zmiany spowodowane kodem JS zachodzą dopiero, gdy tag <script> umieszczony zostanie "na końcu". Dzięki temu wykonuje się on, gdy poszczególne elementy dokumentu już istnieją.

// 2.
// Stworzenie eventu DOMContentLoaded poprawiło sytuację. Kod znajdujący się w tej funkcji wykonuje się dopiero, gdy dokument zostanie pomyślnie załadowany.

// 3.
// Po przeniesieniu tagu <script> ponownie na koniec pliku, nie widzę żadnej różnicy.
