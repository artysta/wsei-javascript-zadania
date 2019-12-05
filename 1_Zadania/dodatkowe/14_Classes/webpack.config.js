var path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./js/app.js', './js/zadanie06.js', './js/zadanie07.js'],
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: 'out.js'
  }
};
