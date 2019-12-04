document.addEventListener('DOMContentLoaded', function () {

    // Zadanie 0.
    const x = 5;
    let y = 3;

    for (var i = 0; i < 10; i++) {
      console.log(i, y);
    }
    console.log(i, y);

    function myFn(param1) {
      let y = 4;
      let i = 20;
      console.log(param1, y, i);
    }

    myFn(i)

    console.log(x);
    {
      let y = 25;
      console.log(y);
      var z = 50;
    }

    console.log(z, y);

    // Zadanie 3.
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }

    // Wypisuje 10.
    console.log(i);

    for (let j = 0; j < 10; j++) {
      console.log(j);
    }

    // ReferenceError: j is not defined.
    console.log(j);

    // Zadanie 5.
    (function () {
      console.log("Hello world!");
    })();

    // Zadanie 6.
    ((name) => {
      console.log(name);
    })("Adrian");
})
