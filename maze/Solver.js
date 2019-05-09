function Solver()
{
  this.x = (BOX_SIZE+50)+ BOX_SIZE/2;
  this.y = (BOX_SIZE+50)+ BOX_SIZE/2;
  this.boxX = 1;
  this.boxY = 1;

  this.goingUp = false;
  this.goingRight = false;
  this.goingDown = false;
  this.goingLeft = false;

  this.show = function()
  {
    push();
    noStroke();
    fill(200, 76, 87);
    rectMode(CENTER);
    rect(this.x, this.y, 25, 25);
    pop();
  }

  this.move = function(x, y)
  {
    var validLocation = this.verifyLocation(x, y);

    if(!validLocation)
    {
      var validMove = false;
    } else
    {
      var validMove = this.validMovement(x, y);
    }

    if(validMove && validLocation)
    {
      this.y+= (BOX_SIZE)*y;
      this.x+= (BOX_SIZE)*x;

      this.boxX+= x;
      this.boxY+= y;
    }

    if(DEBUG)
    {
      console.log("validLocation: "+ validLocation);
      console.log("validMovement: "+ validMove);
      console.log("Solver X: " + this.boxX);
      console.log("Solver Y: " + this.boxY);
    }
  }

  this.verifyLocation = function(x, y)
  {
    var nextX = this.boxX+ x;
    var nextY = this.boxY+ y;

    if(nextX > 10 || nextX < 1)
    {
      return false;
    }
    if(nextY > 10 || nextY < 1)
    {
      return false;
    }
    return true;
  }

  this.validMovement = function(x, y)
  {
    //Test for x movement
    if(x == 0)
    {

    } else if(x > 0)
    {
      if(boxes[this.boxX][this.boxY].rightLine.display && boxes[this.boxX+1][this.boxY].leftLine.display)
      {
        return false;
      }
    } else if(x < 0)
    {
      if(boxes[this.boxX][this.boxY].leftLine.display && boxes[this.boxX-1][this.boxY].rightLine.display)
      {
        return false;
      }
    }

    //Test for y movement
    if(y == 0)
    {

    } else if(y > 0)
    {
      if(boxes[this.boxX][this.boxY].downLine.display && boxes[this.boxX][this.boxY+1].upLine.display)
      {
        return false;
      }
    } else if(y < 0)
    {
      if(boxes[this.boxX][this.boxY].upLine.display && boxes[this.boxX][this.boxY-1].downLine.display)
      {
        return false;
      }
    }
    return true;
  }
}
