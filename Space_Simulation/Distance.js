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
    
    for (var i = temp.length; i > 0; i--)
    {
      print(temp[i]);
    }
  }

  this.show = function() 
  {
    text(this.distance, 100, -15);
  }
}