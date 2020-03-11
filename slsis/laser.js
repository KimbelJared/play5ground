laser = class{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.id = entity_count++;

    this.image = 0;
    this.movementSpeed = 20;

    this.xMax = width;
    this.display = true;
  }

  update(){
    this.x = this.x + this.movementSpeed;
    this.checkLocation();
  }

  show(){
    if(this.display){
      push();
      stroke('red');
      strokeWeight(10);
      point(this.x, this.y);
      pop();
    }
  }

  checkLocation(){
    if(this.xMax < this.x){
      this.display = false;
    }
    //if(DEBUG) {console.log("Checking X of " + this.id +" "+this.display + " x: " + this.x + " xMax: " +this.xMax);}
  }
}
