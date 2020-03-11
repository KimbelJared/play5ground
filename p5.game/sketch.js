
let playables = [];
let collidables = [];
function setup(){

  createCanvas(800, 800);

  //Debug Options
  gameDebug(1);
  utilsDebug(1);

  playables[0] = new playable(width/4, height/2);
  playables[1] = new playable(3*width/4, height/2);
  playables[1].setMovementKeys([73, 75, 74, 76]);

  p1 = new fancyPoint(350, 350);
  p2 = new fancyPoint(450, 350);
  p3 = new fancyPoint(450, 450);
  p4 = new fancyPoint(350, 450);

  collidables[0] = new wall(p1, p2, p3, p4, 'red');
}

function draw(){
  background(51);

  for(var i = 0; i < collidables.length; i++){
    collidables[i].show();
  }

  for(var i = 0; i < playables.length; i++){
    playables[i].move();
    playables[i].show();
  }
}

function keyPressed(){
  for(var i = 0; i < playables.length; i++){
    playables[i].movement(keyCode, true);
  }
}

function keyReleased(){
  for(var i = 0; i < playables.length; i++){
    playables[i].movement(keyCode, false);
  }
}
