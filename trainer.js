

function Point(){
    var x;
    var y;
    var flag;

    this.x = random(width);
    this.y = random(height);

    if (this.x > this.y){
      this.flag = 1;
    }else {
      this.flag = -1;
    }
}
