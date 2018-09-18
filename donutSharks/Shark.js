function Shark()
{
  this.x = 50;
  this.y = 300;
  this.show = function()
  {
    push();
    ellipse(this.x,this.y, 10,10)
    pop();
  }
}
