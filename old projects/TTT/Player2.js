function playerTwo()
{
  this.name = ""
  this.size = 20;
  this.colour = 44;
  
  
  var centerx = width/2;
  var centery = height/2;
  
  this.show = function()
  {
    textAlign(CENTER);
    textFont("Verdana");
    fill(51);
    
    push();
    
    textSize(32);
    text("Player 2", centerx, centery-100);
    
    pop();
    
    push();
    
    textSize(26);
    text("Name", centerx, centery-25);
    
    text(this.name, centerx, centery+25);
    
    pop();
  }
  
  this.turn = function()
  {
    push();
    noStroke();
    fill(this.colour);
    ellipse(cursorq.clickX, cursorq.clickY, this.size);
    pop();
    pointingame--;
  }
  
  this.typed = function(keyTyped)
  {
    this.name = this.name + keyTyped;
  }
  
  this.dis = function()
  {
    push();
    
    textSize(26);
    
    text(this.name, centerx + (centerx/2), 50);
    
    pop();
  }
}