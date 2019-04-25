function Solver()
{
  this.x = (BOX_SIZE+50)+(BOX_SIZE/2);
  this.y = (BOX_SIZE+50)+(BOX_SIZE/2);

  this.goingUp = false;
  this.goingRight = false;
  this.goingDown = false;
  this.goingLeft = false;

  this.move = function(x, y)
  {
    this.y+= (BOX_SIZE)*y;
    this.x+= (BOX_SIZE)*x;
    this.verifyLocation();
  }

  this.verifyLocation = function()
  {
    if (this.x > width-((BOX_SIZE+50)+(BOX_SIZE/2)))
    {
      this.x = (BOX_SIZE+50)+(BOX_SIZE/2);
    } else if (this.x < 0+((BOX_SIZE+50)+(BOX_SIZE/2)))
    {
      this.x = width-((BOX_SIZE+50)+(BOX_SIZE/2));
    }

    if (this.y > height-((BOX_SIZE+50)+(BOX_SIZE/2)))
    {
      this.y = (BOX_SIZE+50)+(BOX_SIZE/2);
    } else if (this.y < 0+((BOX_SIZE+50)+(BOX_SIZE/2)))
    {
      this.y = height-((BOX_SIZE+50)+(BOX_SIZE/2));
    }
  }

  this.show = function()
  {
    push();
    noStroke();
    fill(200, 76, 87);
    rectMode(CENTER);
    rect(this.x, this.y, BOX_SIZE-10, BOX_SIZE-10);
    pop();
  }
}
