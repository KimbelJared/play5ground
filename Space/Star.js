function Star(x, y)
{
  this.x = x;
  this.y = y;
  this.r = 10;
  this.show = function() 
  {
    push();
    
    noStroke();
    fill(255, 255, 255);
    ellipse(this.x, this.y, this.r, this.r);
    pop();
   
  }

}
 