// Zadanie 0.
class Vehicle {
	constructor(name) {
		this.name = name;
	}
	getName() {
		return this.name;
	}
}

class Boat extends Vehicle {
	sail() {
		console.log("I am sailing!");
	}
}

class Car extends Vehicle {
	drive() {
		console.log("I am driving!");
	}
}

class Plane extends Vehicle {
	fly() {
		console.log("I am flying!");
	}
}

let boat = new Boat("Speeder");
let car = new Car("Banshee");
let plane = new Plane("Hydra");

boat.sail();
car.drive();
plane.fly();

// Zadanie 1.
class Kaczka {
    constructor() {
      this.type = "zwykła";
    }
    kwacz() {
      console.log("Kwa kwa.");
    }
    plywaj() {
      console.log("Płynę...");
    }
		lec() {
			console.log("Lecę...");
		}
    wyswietl() {
      console.log("Wygląda jak " + this.type + " kaczka.");
    }
}

console.log("\n>> Kaczka <<");
var kaczucha = new Kaczka();
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();
kaczucha.lec();

// Zadanie 2.
class DzikaKaczka extends Kaczka {
	constructor() {
		super();
		this.type = "dzika";
	}
}

console.log("\n>> DzikaKaczka <<");
var dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();
dzikaKaczucha.lec();

// Zadanie 3.
class KrzyzowkaKaczka extends Kaczka {
	constructor() {
		super();
		this.type = "krzyżówka"
	}
}

console.log("\n>> KrzyzowkaKaczka <<");
var krzyzowkaKaczucha = new KrzyzowkaKaczka();
krzyzowkaKaczucha.kwacz();
krzyzowkaKaczucha.plywaj();
krzyzowkaKaczucha.wyswietl();
krzyzowkaKaczucha.lec();

// Zadanie 5.
class GumowaKaczka extends Kaczka {
	constructor() {
		super();
		this.type = "gumowa"
	}
	lec() {
		console.log("Gumowe kaczki nie potrafią latać :(");
	}
}

console.log("\n>> GumowaKaczka <<");
var gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();
