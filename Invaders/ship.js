function Ship()
{
  this.x = width/2;
  this.y = height-20;
  this.dir = 0;
  this.show = function() 
  {
    
    
    push();
    
    noStroke();
    fill(255, 107, 40);
    rectMode(CENTER);
    rect(this.x, this.y, 20, 60);
    
    pop();  
    
  }
  
  this.move = function() 
  {
    this.x += this.dir*5;
      
  }
  this.setDir = function(dir)
  {
    if(dir == 0)
    {
      this.dir = 0;
    }
    else if (dir == 1)
    {
      this.dir = 1;
    }
    else if (dir == -1)
    {
      this.dir = -1;
    }
  }
}