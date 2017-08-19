
function Perceptron(n, c) {
  // Array de pesos
  this.weights = new Array(n);
  // inicializo los pesos aleatoriamente
  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] = random(-1,1);
  }
  this.lr = c; // learning rate/constant
}


// funcion para entrenar al perceptron
// los pesos se adjustan al valor deseado
// prototype agrega metodos o una propiedad a un objeto, fuera del objeto
Perceptron.prototype.train = function(inputs, desired) {
  // conjetura el resultado
  var guess = this.feedforward(inputs);
  // computa un factor nuevo utilizando el error
  // Error = desired output - guessed output
  // Error solo puede ser 0, 2, -2
  // Multiplica por el learning Rate
  var error = desired - guess;
  // Adjust weights based on weightChange * input
  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] += this.lr * error * inputs[i];
  }
}

// Guess -1 or 1 based on input values
Perceptron.prototype.feedforward = function(inputs) {
  // Sum all values
  var sum = 0;
  for (var i = 0; i < this.weights.length; i++) {
    sum += inputs[i] * this.weights[i];
  }
  // Result is sign of the sum, -1 or 1
  return this.activate(sum);
}

Perceptron.prototype.activate = function(sum) {
  if (sum > 0) return 1;
  else return -1;
}

// Return weights
Perceptron.prototype.getWeights = function() {
  return this.weights;
}