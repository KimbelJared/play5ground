function paddle() {

    this.size = 10
    this.x = 25;
    this.y = height/2;
    this.xVelocity = 1;
    this.yVelocity = 1;


    this.show = function() {
      push();
      noStroke();
      fill(255);
      rectMode(CENTER);
      rect(this.x, this.y, this.size, this.size * 10);
      pop();
    }

    this.update(var x){
      if x > 0 
    }
}
