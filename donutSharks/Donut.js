function Donut(x,y)
{
  this.x = x;
  this.y = y;
  this.show = function()
  {
    push();
    ellipse(this.x,this.y, 10,10)
    pop();
  }
}
