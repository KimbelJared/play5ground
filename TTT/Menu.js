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
}