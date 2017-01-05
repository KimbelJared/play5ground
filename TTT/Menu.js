function menu()
{
  var centerx = width/2;
  var centery = height/2;
  
  this.show = function()
  {
    push();
    textAlign(CENTER);
    textSize(32);
    textFont("Verdana");
    fill(51);
    
    text("Tic Tac Toe", centerx, centery-100);
    
    text("Play", centerx, centery-25);
    
    pop();
  }
  this.check = function()
  {
    d = int(dist(centerx, centery-25, cursorq.clickX, cursorq.clickY));
    if (d < 32)
    {
      print("work");
      cursorq.clickX = 0;
      cursorq.clickY = 0;
      pointingame = 1;
    }
  }      

}