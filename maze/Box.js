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

    this.upLine.show();
    this.rightLine.show();
    this.downLine.show();
    this.leftLine.show();

    pop();
  }


}
