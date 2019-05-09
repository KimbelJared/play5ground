function Box(x, y, num)
{
  //Box debug logging
  if(DEBUG)
  {
    console.log("This is box num: " + num);
    console.log("N : ");
    console.log("E : ");
    console.log("S : ");
    console.log("W : ");
  }

  this.xCoordinate = x;
  this.yCoordinate = y;
  this.boxNumber = num;
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

  this.checkCollision = function()
  {
    this.upLine.checkCollision();
    this.rightLine.checkCollision();
    this.downLine.checkCollision();
    this.leftLine.checkCollision();

    if(DEBUG)
    {
      console.log("Box " + this.boxNumber + " checking in");
    }
  }

}
