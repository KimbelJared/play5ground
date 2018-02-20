function Target(x, y)
{
  this.x = x;
  this.y = y;
  this.r = 60;
  this.show = function() 
  {
    
    
    
    push();
    
    noStroke();
    fill(5, 140, 12);
    ellipse(this.x, this.y, this.r, this.r);
    pop();
    
    push();
    noStroke();
    stroke(139,0,0);
    strokeWeight(5)
    line(this.x+(this.r/2), this.y, this.x-(this.r/2), this.y);
    
  }
   this.grow = function() {
    this.r = this.r + 1;
  }

}