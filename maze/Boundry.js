function Boundry(x, y, w, dis)
{
  if (dis)
  {
    this.display = true;
  } else
  {
    this.display = false;
  }

  if(w == 0)
  {
    this.xCoordinate_1 = x;
    this.yCoordinate_1 = y;
    this.xCoordinate_2 = x+BOX_SIZE;
    this.yCoordinate_2 = y;
  } else if (w == 1)
  {
    this.xCoordinate_1 = x+BOX_SIZE;
    this.yCoordinate_1 = y;
    this.xCoordinate_2 = x+BOX_SIZE;
    this.yCoordinate_2 = y+BOX_SIZE;
  } else if (w == 2)
  {
    this.xCoordinate_1 = x+BOX_SIZE;
    this.yCoordinate_1 = y+BOX_SIZE;
    this.xCoordinate_2 = x;
    this.yCoordinate_2 = y+BOX_SIZE;
  } else if (w == 3)
  {
    this.xCoordinate_1 = x;
    this.yCoordinate_1 = y+BOX_SIZE;
    this.xCoordinate_2 = x;
    this.yCoordinate_2 = y;
  }

  this.show = function()
  {
    if(this.display)
    {
      stroke(255);
      line(this.xCoordinate_1, this.yCoordinate_1, this.xCoordinate_2, this.yCoordinate_2);
    }

  }


}
