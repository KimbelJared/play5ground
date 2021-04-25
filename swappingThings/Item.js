function Item(x,y,num){

  this.drawX = x;
  this.drawY = y;

  this.num = num;

  this.show = function(){
    push();

    fill(0);
    ellipseMode(CENTER);
    ellipse(this.drawX,this.drawY, 25);

    pop();
  }
}
