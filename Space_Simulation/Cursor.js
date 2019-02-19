function Cursor()
{
  this.size = 10;
  this.inMenu = false;
  this.clickedX = 0;
  this.clickedY = 0;

  this.show = function()
  {
    if(showMenu || cursorCheckboxVal)
    {
      push();

      noStroke();
      fill(36, 149, 188);
      if(showMenu)
      {
        ellipse(mouseX - this.clickedX, mouseY - this.clickedY, this.size, this.size);
      }
      else if (!showMenu)
      {
        ellipse(0, 0, this.size, this.size);
      }

      pop();
    }
  }

  this.test = function()
  {

    var x = (width/2);
    var y = (height/2);
    var dX = dist(this.clickedX, 0, x, 0);
    var dY = dist(0, this.clickedY, 0, y);

    if(dX <= menu.w/2)
    {
      if(dY <= menu.h/2)
      {
        this.inMenu = true;
      }
      else
      {
        this.inMenu = false;
      }
    }
    else
    {
      this.inMenu = false;
    }
  }

  this.reset = function()
  {
    this.clickedX = 0;
    this.clickedY = 0;
  }
  this.translateScreen = function()
  {
    if(!showMenu)
      translate(mouseX , mouseY);
    else
    {
        translate(this.clickedX , this.clickedY)
    }
  }
}
