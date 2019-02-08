function Menu()
{
  this.w = 500;
  this.h = 500;
  this.x = (width/2)-(this.w/2);
  this.y = (height/2)-(this.h/2);

  var tempSpeed = 0;

  this.store = function()
  {
    tempSpeed = speed;
    speed = 0;
  }

  this.reStore = function()
  {
    speed = tempSpeed;
  }
  this.show = function()
  {
    if(showMenu)
    {
      //Store speed

      //Menu Box
      push();

      noStroke();
      colorMode(RGB, 255, 255, 255, 1);
      fill(255, 255, 255, 0.2);

      rect(this.x, this.y, this.w, this.h);

      pop();

      //Checkboxes
      speedCheckbox.show();
      cursorCheckbox.show();
      trailLineCheckbox.show();
    }
  }
  this.init = function()
  {
    speedCheckbox.position(menu.x+10, menu.y+10);
    cursorCheckbox.position(menu.x+10, menu.y+30);
    trailLineCheckbox.position(menu.x+10, menu.y+50);

    speedCheckbox.hide();
    cursorCheckbox.hide();
    trailLineCheckbox.hide();

  }
  this.hide = function()
  {
    speedCheckbox.hide();
    cursorCheckbox.hide();
    trailLineCheckbox.hide();
  }
}
