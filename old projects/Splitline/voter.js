function Voter(x, y)
{
  this.x = x;
  this.y = y;
  this.val;
  this.party;
  this.colour = random(0,255);
  
  this.show = function()
  {
    push();
    
    noStroke();
    fill(this.colour);
    ellipse(this.x, this.y, 10, 10);
    
    pop();
    
    this.toDelete = false;
  }
  
}