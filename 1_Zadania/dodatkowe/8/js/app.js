// Zadanie 1.
var Tree = function(type) {
  this.type = type;
}

var appleTree = new Tree("Jabłoń");
var cherryTree = new Tree("Wiśnia");
var lindenTree = new Tree("Lipa");

Tree.prototype.bloom = function() {
  return "I am blooming";
};
