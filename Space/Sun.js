function Sun() 
{
  this.x = 0;
  this.y = 0;
  this.size = 20;
  
  this.show = function() 
  {
    push();
    noStroke();
    fill(255,255,0);
    ellipse(this.x,this.y, this.size);
    pop();
  }
}