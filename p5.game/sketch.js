let e1, e2;
let playables = [];
let collidables = [];
function setup(){

  createCanvas(800, 800);

  //Debug Options
  gameDebug(1);
  utilsDebug(1);

  collidables[0] = new entity(width/4, height/4);
  collidables[1] = new entity(3*width/4, 3*height/4);
  playables[0] = new playable(width/4, height/2);
  playables[1] = new playable(3*width/4, height/2);
  playables[1].setMovementKeys([73, 75, 74, 76]);
}

function draw(){
  background(51);

  collidables[0].show();
  collidables[1].show();
  playables[0].move();
  playables[0].show();
  playables[1].move();
  playables[1].show();
}

function keyPressed(){
  playables[0].movement(keyCode, true);
  playables[1].movement(keyCode, true);
}

function keyReleased(){
  playables[0].movement(keyCode, false);
  playables[1].movement(keyCode, false);
}
