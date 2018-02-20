function grid()
{
  var centerx = width/2;
  var centery = height/2;
  
  this.show = function()
  {
    push();
    stroke(0, 255);
    noFill();
    strokeWeight(2);
    //vertlines
    line(centerx-37.5, centery-100, centerx-37.5, centery+100);
    line(centerx+37.5, centery-100, centerx+37.5, centery+100);
    
    //horilines
    line(centerx-100, centery-37.5, centerx+100, centery-37.5);
    line(centerx-100, centery+37.5, centerx+100, centery+37.5);
 
    pop();
    
    
    
    
  }
  
}