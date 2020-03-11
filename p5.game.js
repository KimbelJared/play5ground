/*

Jared Kimbel | Jaredkimbel.com
Version 0.1 | March 7th, 2020

*/
let DEBUG_game = false;

//Initial Function
startTheEngine = function()
{
  console.log("p5.game -- loaded");
}
p5.prototype.registerMethod('init', startTheEngine);

//Functions

//Enable Debug Function
p5.prototype.gameDebug = function(bool){
  DEBUG_game = bool;
  console.log("p5.game -- debug enabled");
}


//Classes

//Entity class
entity = class {
  //Setup entity
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.id = entity.count++;

    this.checkLocation();
    this.point = new fancyPoint(this.x, this.y);
    this.canMove = false;
    this.movementSpeed = 0;
  }

  //determines movement;
  setMovement(bool){
    this.canMove = bool;
  }

  //Set movement speed
  setMovementSpeed(newSpeed){
    this.movementSpeed = newSpeed;
  }

  //Makes sure entity is in bound;
  checkLocation(){
    //Check if x is ok
    if(this.x > width){
      this.x = width;
      if(DEBUG_game){console.log("X of entity " + this.id + " positions it offscreen, setting to canvas width.")}
    } else if (this.x < 0){
      this.x = 0;
      if(DEBUG_game){console.log("X of entity " + this.id + " positions it offscreen, setting to 0.")}
    }
    //Check if y is ok
    if(this.y > height){
      this.y = height;
      if(DEBUG_game){console.log("Y of entity " + this.id + " positions it offscreen, setting to canvas height.")}
    } else if (this.y < 0){
      this.y = 0;
      if(DEBUG_game){console.log("Y of entity " + this.id + " positions it offscreen, setting to 0.")}
    }
  }

  //Updates location
  move(){
    this.checkLocation();
    this.point.move(this.x, this.y);
  }
  //Display entity
  show(){
    this.point.show();
  }

  //Returns identification
  papersPlease(){
    return("entity");
  }
}
//Static entity count
entity.count = 0;

//Playable entity
p5.prototype.playable = class{
  //Setup playable
  constructor(x, y){
    this.e = new entity(x,y);
    this.e.setMovement(true);
    this.e.setMovementSpeed(5);
    this.setMovementKeys();

    this.goingUp = false;
    this.goingDown = false;
    this.goingLeft = false;
    this.goingRight = false;
  }

  //Display playable
  show(){
    this.e.show();
  }

  //Set keys to use for movement
  setMovementKeys(array){
    if(array == null){
      this.upKey = 87;
      this.downKey = 83;
      this.leftKey = 65;
      this.rightKey = 68;
    } else {
      this.upKey = array[0];
      this.downKey = array[1];
      this.leftKey = array[2];
      this.rightKey = array[3];
    }
  }

  //Called to move object, called when keyPressed would be
  movement(keyCode, state){
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
      }
      if(DEBUG_game){this.movementStatus();}
  }

  //Moves based on movement
  move(){
    //Determine if we are moving
    if(this.goingUp){ //Going up
      this.e.y = this.e.y - this.e.movementSpeed;
      let invalid = this.checkCollision(0);
      if(invalid != -1){
        this.e.y =  invalid;
        this.goingUp = false;
      }
    }
    if(this.goingDown){ //Going up
      this.e.y = this.e.y + this.e.movementSpeed;
      let invalid = this.checkCollision(0);
      if(invalid != -1){
        this.e.y =  invalid;
        this.goingDown = false;
      }
    }
    if(this.goingLeft){ //Going up
      this.e.x = this.e.x - this.e.movementSpeed;
      let invalid = this.checkCollision(1);
      if(invalid != -1){
        this.e.x =  invalid;
        this.goingLeft = false;
      }
    }
    if(this.goingRight){ //Going up
      this.e.x = this.e.x + this.e.movementSpeed;
      let invalid = this.checkCollision(1);
      if(invalid != -1){
        this.e.x =  invalid;
        this.goingRight = false;
      }
    }
    this.e.move();
  }

  //Checks collision with all collidables
  checkCollision(which){
    for(var i = 0; i < collidables.length; i++){
      if(collidables[i].papersPlease() == "wall"){ //Check collision with wall
        let v = collidables[i].isIn(this.e.point);
        console.log(v);
        if(v[0] && (which == 0)){
          return v[1];
        }
        if(v[0] && (which == 1)){
          return v[2];
        }
      }
    }
    return -1;
  }
  //Returns identification
  papersPlease(){
    return("playable");
  }
  //Debug movement function
  movementStatus(){
    console.log(this.e.id + " GoingUP " + this.goingUp);
    console.log(this.e.id + " GoingDown " + this.goingDown);
    console.log(this.e.id + " GoingLeft " + this.goingLeft);
    console.log(this.e.id + " GoingRight " + this.goingRight);
  }

  //Debug location function
  printLocation(){
    console.log("Player at: (" + this.e.x + "," + this.e.y + ")");
  }
}

//Fixed entity class
p5.prototype.wall = class{
  //Setup wall
  constructor(p1, p2, p3, p4, color){
    this.id = entity.count++;
    this.rect = new fancyRect(p1, p2, p3, p4, color);
    this.collidesWithPlayables = true;
    this.region = new region(this.rect, 0);
  }

  //Sets if wall can be ollided with
  setCollision(bool){
    this.collidesWithPlayables = bool;
  }

  isIn(checkPoint){
    return this.region.isIn(checkPoint);
  }
  //Display wall
  show(){
    this.rect.show();
  }

  //Returns identification
  papersPlease(){
    return("wall");
  }
}

region = class{
  //Setup region
  constructor(object, objectType){
    this.object = object;
    this.objectType = objectType;
  }

  //Calls object isIn function
  isIn(checkPoint){
    return this.object.isIn(checkPoint);
  }
}
