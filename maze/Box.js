function Box(x, y, num)
{
  //Box debug logging
  if(DEBUG)
  {
    console.log("This is box num: " + num);
    console.log("N : " + mazeJSON[num][0]);
    console.log("E : " + mazeJSON[num][1]);
    console.log("S : " + mazeJSON[num][2]);
    console.log("W : " + mazeJSON[num][3]);
  }
  this.xCoordinate = x;
  this.yCoordinate = y;
  this.boxNumber = num;
  this.upLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 0, mazeJSON[num][0]);
  this.rightLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 1, mazeJSON[num][1]);
  this.downLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 2, mazeJSON[num][2]);
  this.leftLine = new Boundry((x*BOX_SIZE)+50, (y*BOX_SIZE)+50, 3, mazeJSON[num][3]);

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
    if(DEBUG)
    {
      text(this.boxNumber, this.xCoordinate*BOX_SIZE+75, this.yCoordinate*BOX_SIZE+75);
    }
    pop();
  }


}
