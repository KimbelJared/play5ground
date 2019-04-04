function Voter(x, y)
{
  this.x = x;
  this.y = y;
  this.val;
  this.party;
  this.colour = returnColor();
  
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

function returnColor()
{
  var c = ["#000000", "#ffffff"];
  return random(c);
}