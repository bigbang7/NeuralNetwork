//                  Algorithm
//1. por cada input multiplicar el input por su weight
//2. sumar las multiplicaciones
//3. computar el output del perceptron basada en la suma anterior mediante la funcion activadora

// The activation Function
function sign(n){
  if(n >= 0){
    return 1;
  }else{
    return -1 ;
  }
}

function Perceptron() {
  //Learning rate
  var lr=0.05;

  //array de weight para los inputs
  var weight= new Array(2);

  //inicio los weight random
    for(var i = 0; i < weight.length; i++){
      weight[i]= random(-1,1);
    }

    this.guess = function(inputs) {
      var sum=0;
      for (var i = 0; i < weight.length; i++) {
        sum += inputs[i] * weight[i];
      }
      var output= sign(sum);
      return output;
    }

    this.train = function(inputs, target){
      var guess = this.guess(inputs);
      var error = target - guess;

      //ajustar todos los weight
      for (var i = 0; i < this.weight.length; i++) {
        this.weight[i] += this.error * inputs[i] * this.lr;
      }

    }

}
