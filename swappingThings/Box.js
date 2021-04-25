function Box(x, y, num){

  this.x = x;
  this.y = y;


  this.drawX = 50 + (this.x * 100);
  this.drawY = 50 + (this.y * 100);

  this.num = num;

  this.contains = new Item(this.drawX,this.drawY,num);

  this.show = function()
  {
    push();

    //noStroke();
    rectMode(CENTER);
    rect(this.drawX,this.drawY,100,100);

    pop();

    //this.contains.show();
  }
}
