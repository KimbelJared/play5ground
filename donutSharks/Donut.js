function Donut(x, y, r)
{
  this.r = r
  this.v = createVector(x, y);
  this.speed = 5;

  this.show = function()
  {
    push();

    noFill();

    ellipse(this.v.x, this.v.y, this.r, this.r);

    pop();
  }

  this.move = function()
  {
    this.v.x = this.v.x + this.speed;
    
  }
}
