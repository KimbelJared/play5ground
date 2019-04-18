function Box(x, y)
{
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.upLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 0);
  this.rightLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 1);
  this.downLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 2);
  this.leftLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 3);
  this.show = function()
  {
    push();
    noFill();
    stroke(255);
    
    if (random() > 0.5)
    this.upLine.show();
    if (random() > 0.5)
    this.rightLine.show();
    if (random() > 0.5)
    this.downLine.show();
    if (random() > 0.5)
    this.leftLine.show();

    pop();
  }


}
