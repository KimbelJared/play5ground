function Solver()
{
  this.x = 50;
  this.y = 50;

  this.goingUp = false;
  this.goingRight = false;
  this.goingDown = false;
  this.goingLeft = false;

  this.update = function()
  {
    if(this.goingUp)
    {
      this.y += -SPEED;
    } else if (this.goingRight)
    {
      this.x += SPEED;
    } else if (this.goingDown)
    {
      this.y += SPEED;
    } else if (this.goingLeft)
    {
      this.x += -SPEED;
    }
  }

  this.show = function()
  {
    push();
    noStroke();
    fill(200, 76, 87);
    ellipse(this.x, this.y, 10);
    pop();
  }
}
