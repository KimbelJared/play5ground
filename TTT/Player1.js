function playerOne()
{
  this.name = ""
  
  var centerx = width/2;
  var centery = height/2;
  
  this.show = function()
  {
    textAlign(CENTER);
    textFont("Verdana");
    fill(51);
    
    push();
    
    textSize(32);
    text("Player 1", centerx, centery-100);
    
    pop();
    
    push();
    
    textSize(26);
    text("Name", centerx, centery-25);
    
    text(this.name, centerx, centery+25);
    
    pop();
  }
  this.typed = function(keyTyped)
  {
    this.name = this.name + keyTyped;
  }
}