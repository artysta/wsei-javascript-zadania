document.addEventListener("DOMContentLoaded", (event) => {
  var form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    var errorMessage = document.querySelector(".error-message");
    var email = form.email.value;
    var name = form.name.value;
    var surname = form.surname.value;
    var pass1 = form.pass1.value;
    var pass2 = form.pass2.value;
    var checkbox = document.getElementById("agree");

    console.log(email);
    console.log(name);
    console.log(surname);
    console.log(pass1);
    console.log(pass2);

    if (!validateEmail(email)) {
        errorMessage.innerHTML = "Email musi posiadać znak @";
        form.email.focus();
        event.preventDefault();
        return false;
    }

    if (!validateName(name)) {
      errorMessage.innerHTML = "Twoje imię jest za krótkie";
      form.name.focus();
      event.preventDefault();
      return false;
    }

    if (!validateName(surname)) {
      errorMessage.innerHTML = "Twoje nazwisko jest za krótkie";
      form.surname.focus();
      event.preventDefault();
      return false;
    }

    if (!validatePasswords(pass1, pass2)) {
      errorMessage.innerHTML = "Hasła nie są takie same lub puste";
      form.pass1.focus();
      event.preventDefault();
      return false;
    }

    if (!checkbox.checked) {
      errorMessage.innerHTML = "Musisz zaakceptować warunki.";
      event.preventDefault();
      return false;
    }

  });

  // Returns true if the string contains @.
  function validateEmail(str) {
    for (var i = 0; i < str.length; i++) {
      console.log(str[i]);
      if (str[i] == "@") {
        return true;
      }
    }

    return false;
  }

  // Returns true if the string is longer than 6.
  function validateName(str) {
    return str.length > 6;
  }

  // Returns true if both strings are equal.
  function validatePasswords(str1, str2) {
    if (str1 == "" || str2 == "") {
      return false;
    }

    return str1 == str2;
  }
});
