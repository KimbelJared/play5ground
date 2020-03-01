function ball() {

  this.size = 25
  this.x = width/2;
  this.y = height/2;
  this.xVelocity = 0;
  this.yVelocity = 0;


  this.show = function() {
    push();
    noStroke();
    fill(200, 76, 87);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.size);
    pop();
  }
  this.check = function() {
    if(this.x > width) {
      this.xVelocity = -1;
      this.x = width;
    } else if (this.x < 0) {
      this.xVelocity = 1;
      this.x = 0;
    }

    if(this.y > height) {
      this.yVelocity = -1;
      this.x = height;
    } else if (this.y < 0) {
      this.xyVelocity = 1;
      this.y = 0;
    }

  }
  this.update = function() {
    this.check();
    this.x = this.x + this.xVelocity;
    this.y = this.y + this.yVecocity;
  }
}
