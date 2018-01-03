function back()
{
  this.x = width/8;
  this.y = height - 48;
  this.showing = true;
  this.show = function()
  {
    if(pointingame != 3 || pointingame != 0)
    {
      push();
      textAlign(CENTER);
      textSize(20);
      textFont("Verdana");
      fill(51); 
    
      text("Back", this.x, this.y); 
      pop();
    }
  }
  this.check = function()
  {
    d = int(dist(this.x, this.y, cursorq.clickX, cursorq.clickY));
    if (d < 20)
    {
      print("work");
      cursorq.clickX = 0;
      cursorq.clickY = 0;
      pointingame--;
    }
  } 
  this.display = function(input)
  {
    
  }
  
  
}