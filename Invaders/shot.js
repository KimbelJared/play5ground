function Shot(x, y)
{
  this.x = x;
  this.y = y;
  var shotSpeed = 5;
  this.r = 10;
  this.show = function() 
  {
    
    
    push();
    
    noStroke();
    fill(105,105,105);
    ellipse(this.x, this.y, 10, 10);
    
    pop();  
    
    this.toDelete = false;
  }

  this.move = function()
  {
     this.y = this.y-shotSpeed; 
  }
  
  this.hits = function(target) {
    var d = dist(this.x, this.y, target.x, target.y);
    if (d < this.r + target.r) {
      return true;
    } else {
      return false;
    }
  }
  this.evaporate = function() 
  {
    this.toDelete = true;
  }
}