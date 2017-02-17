function Cursor()
{
  this.size = 10;
  
  this.show = function() 
  {
    push();
    
    noStroke();
    fill(36, 149, 188);
    ellipse(0, 0, this.size, this.size);
    
    pop();
  }
   
}