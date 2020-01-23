function Mergable(type)
{
  this.tier = 0;
  this.image = null;
  this.x = width/2;
  this.y = height/2;

  this.show = function()
  {
    ellipse(this.x, this.y, 5);
  }
}
