function cursorq()
{
  this.size = 10;
  this.clickX = 0;
  this.clickY = 0;
  
  this.show = function()
  {
    push();
    noStroke();
    fill(51);
    ellipse(mouseX, mouseY, this.size);
    pop();
  }
  this.drawq = function()
  {
    push();
    ellipse(this.clickX, this.clickY, this.size);
    pop();
    
  }
  
  
}