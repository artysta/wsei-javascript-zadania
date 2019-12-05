class MenuGenerator {
  constructor(type, elements) {
    this.type = type;
    this.elements = elements;
  }
  getType() {
    console.log(this.type);
  }
  showItems() {
    console.log(this.elements);
  }
  animate() {
    console.log("Animacja typu: " + this.type);
  }
}

class HorizontalMenuGenerator extends MenuGenerator {

}

class VerticalMenuGenerator extends MenuGenerator {

}

console.log("\n>> HorizontalMenuGenerator <<");
let hMenuGenetator = new HorizontalMenuGenerator("horizontal", ['start', 'about']);
hMenuGenetator.getType();
hMenuGenetator.showItems();
hMenuGenetator.animate();

console.log("\n>> VerticalMenuGenerator <<");
let vMenuGenetator = new VerticalMenuGenerator("vertical", ['home', 'contact']);
vMenuGenetator.getType();
vMenuGenetator.showItems();
vMenuGenetator.animate();
