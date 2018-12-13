function Donut(x, y, r)
{
  this.r = r
  this.v = createVector(x, y);
  this.speed = 5;
  this.dir = 1

  this.show = function()
  {
    push();

    noFill();

    ellipseMode(CENTER);
    ellipse(this.v.x, this.v.y, this.r, this.r);

    pop();
  }

  this.move = function()
  {
    this.v.x = this.v.x + (this.speed * this.dir);

    if (this.v.x >= (width-this.r/2))
    {
        this.dir = -1;
    }
    else if (this.v.x <=  (0+this.r/2))
    {
        this.dir = 1;
    }

    this.v.y = this.v.y + (this.speed * this.dir);

    if (this.v.y >= (height-this.r/2))
    {
        this.dir = -1;
    }
    else if (this.v.y <= (0+this.r/2))
    {
        this.dir = 1;
    }
  }
}
