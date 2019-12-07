var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./js/app.js', './js/zadanie00.js', './js/zadanie07.js', './js/zadanie08.js', './js/zadanie09.js'],
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'out.js'
  }
};
