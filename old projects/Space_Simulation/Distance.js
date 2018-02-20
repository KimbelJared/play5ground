function Distance() 
{
  this.distance = 3670000000;
  this.txtToDisp = "3,670,000,000";
  this.txtWidth = textWidth(this.txtToDisp);
  this.txtSize = 30;
  
  textAlign(CENTER);
  textSize(this.txtSize);
  textFont(fontRegular);
  fill(255);
  
  this.update = function()
  {
    this.distance -= speed * 10000;
    var temp = this.distance.toString();
    this.txtToDisp = "";
    
    for (var i = 0; i < 10; i++)
    {
      this.txtToDisp += temp[i];
      if(i == 9)
      {
        
      }
      else if(i % 3 == 0)
      {
        this.txtToDisp += ",";
      }
    }
    this.txtToDisp += " mi";
  }

  this.show = function() 
  {
    if(speedCheckboxVal)
    {
      text(this.txtToDisp, 100, -15);
    }
  }
}