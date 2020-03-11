shark = class{
  constructor(x, y){
    this.x = x || width/2;
    this.y = y || height/2;
    this.id = entity_count++;

    this.checkLocation();
    this.point = new fancyPoint(this.x, this.y); // will be this.image
    this.health = 5;

    this.isSprinting = false;
    this.sprintDistanceMax = 120;
    this.sprintDistance = this.sprintDistanceMax;
    this.movementSpeed = 5;
    this.xMin = 0;
    this.xMax = width/3;
    this.yMin = 0;
    this.yMax = height;

    this.goingUp = false;
    this.goingDown = false;
    this.goingLeft = false;
    this.goingRight = false;

    this.upKey = 87;
    this.downKey = 83;
    this.leftKey = 65;
    this.rightKey = 68;

    this.upLeftKey = 81;
    this.upRightKey = 69;

    this.lasers = [];
    this.maxLasers = 1000000000;
    this.isShooting = false;
  }

  checkLocation(){
    //Check if x is ok
    if(this.x > this.xMax){
      this.x = this.xMax;
      if(DEBUG){console.log("Shark At xMax Bound, Constraining")}
    } else if (this.x < this.xMin){
      this.x = this.xMin;
      if(DEBUG){console.log("Shark At xMin Bound, Constraining")}
    }
    //Check if y is ok
    if(this.y > this.yMax){
      this.y = this.yMax;
      if(DEBUG){console.log("Shark At yMax Bound, Constraining")}
    } else if (this.y < this.yMin){
      this.y = this.yMin;
      if(DEBUG){console.log("Shark At yMin Bound, Constraining")}
    }

    //Check with shark bounding box
  }

  keyPress(keyCode, state){
      //Determine what state we need to switch
      if(state){ //key was pressed, start movement
        //determine what key
        if(keyCode == this.upKey){ //Going up
          this.goingUp = true;
        }
        if(keyCode == this.downKey){ //Going down
          this.goingDown = true;
        }
        if(keyCode == this.leftKey){ //Going left
          this.goingLeft = true;
        }
        if(keyCode == this.rightKey){ //Going right
          this.goingRight = true;
        }
        if(keyCode == this.upLeftKey){ //Going Up+Left
          this.goingUp = true;
          this.goingLeft = true;
        }
        if(keyCode == this.upRightKey){ //Going Up+Right
          this.goingUp = true;
          this.goingRight = true;
        }
        if(keyCode == 32){
          this.isShooting = true;
        }
        if(keyCode == 16){
          if(this.sprintDistance > 0){
            this.isSprinting = true;
            this.movementSpeed = 10;
          }
        }
      } else{ //key released, stop movement
        //determine what key
        if(keyCode == this.upKey){ //Going up
          this.goingUp = false;
        }
        if(keyCode == this.downKey){ //Going down
          this.goingDown = false;
        }
        if(keyCode == this.leftKey){ //Going left
          this.goingLeft = false;
        }
        if(keyCode == this.rightKey){ //Going right
          this.goingRight = false;
        }
        if(keyCode == this.upLeftKey){ //Going Up+Left
          this.goingUp = false;
          this.goingLeft = false;
        }
        if(keyCode == this.upRightKey){ //Going Up+Left
          this.goingUp = false;
          this.goingRight = false;
        }
        if(keyCode == 32){
          this.isShooting = false;
        }
        if(keyCode == 16){
          this.isSprinting = false;
          this.movementSpeed = 5;
        }
      }
  }

  update(){
    //Determine if we are moving
    if(this.goingUp){ //Going up
      this.y = this.y - this.movementSpeed;
    }
    if(this.goingDown){ //Going up
      this.y = this.y + this.movementSpeed;
    }
    if(this.goingLeft){ //Going up
      this.x = this.x - this.movementSpeed;
    }
    if(this.goingRight){ //Going up
      this.x = this.x + this.movementSpeed;
    }
    this.checkLocation();

    if(int(this.sprintDistance) == 0){
      this.isSprinting = false;
      this.movementSpeed = 5;
    }

    if(this.isSprinting){
      this.sprintDistance--;
    } else {
      this.sprintDistance +=  .5;
      if(this.sprintDistance >= this.sprintDistanceMax){
        this.sprintDistance = this.sprintDistanceMax;
      }
    }

    for (var i = 0; i < this.lasers.length; i++) {
      if(this.lasers[i].display){
        this.lasers[i].update();
      }
    }
  }

  show(){
    //Draw Shark
    this.point = new fancyPoint(this.x, this.y);
    this.point.show();

    //Draw Laser
    for (var i = 0; i < this.lasers.length; i++) {
      this.lasers[i].show();
    }

  }

  shoot(){
    if((this.lasers.length < this.maxLasers) && this.isShooting){
      this.lasers.push(new laser(this.x, this.y));
    }
  }
}
