cupcake = class{
  constructor(){
    this.resetLocation();
    this.id = entity_count++;

    this.image = 0;
    this.movementSpeed = 7.5;

    this.xMax = 0;
  }

  update(){
    this.x = this.x - this.movementSpeed;
    if(this.xMax > this.x){
      movieMan.cake_deaths++;
      this.resetLocation();
    }
  }

  show(){
    push();
    stroke('green');
    strokeWeight(10);
    point(this.x, this.y);
    pop();
  }

  resetLocation(){
    this.x = random(width-50, width+100);
    this.y = random(0, height);
  }
}
