

var training = new Array(1000);


var con = 0;

function setup() {
  createCanvas(400,400);

  ptron = new Perceptron();

  for(var i = 0; i< training.length; i++){
    training[i] = new Point();
    console.log(training[i].flag);

  }

  var inputs = [-1, 0.5];
  var guess = ptron.guess(inputs);
  // console.log(guess);


}

function draw() {
  background(255);
  stroke(20,20,220);
  line(0,0,width,height);
  for(var point in training){
    show(training[point]);
  }

  for (var p in training) {
    var inputs = [p.x, p.y];
    var target = p.flag;
    ptron.train(p.inputs, p.flag);

    var guess = ptron.guess(inputs);
    if (guess == target) {
      fill (0,255,0);
    } else{
      fill(255,0,0);
    }
    noStroke();
    ellipse(p.x, p.y, 4, 4);
  }

  function show(a) {
    stroke(0);
    if (a.flag == 1){
      fill(255);
    }else if (a.flag == -1){
      fill(25,25,25);
    }
    ellipse(a.x,a.y,8,8);

  }

}
