function Box(x, y, num)
{
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.boxNumber = num;
  this.upLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 0, mazeJSON[this.boxNumber][0]);
  this.rightLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 1, mazeJSON[this.boxNumber][1]);
  this.downLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 2, mazeJSON[this.boxNumber][2]);
  this.leftLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 3, mazeJSON[this.boxNumber][3]);

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

    //box numbers
    push();
    noFill();
    stroke(118, 193, 42);

    text(this.boxNumber, this.xCoordinate*BOX_SIZE+75, this.yCoordinate*BOX_SIZE+75);

    pop();
  }


}
