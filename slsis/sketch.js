let shark, ui, movieMan;
let baddies = [];
let entity_count = 0;
let DEBUG = true;

function preload() {
  //font = loadFont('https://kimbeljared.github.io/slsis/data/spaceFont.vlw');
}

function setup(){
  frameRate(60);
  var canvas = createCanvas(1600, 800);
  shark = new shark;
  ui = new interface;
  movieMan = new director;

  for (var i = 0; i < 5; i++) {
    baddies[i] = new cupcake();
  }
}

function draw(){

  background(51);

  for (var i = 0; i < baddies.length; i++) {
    baddies[i].update();
    baddies[i].show();
  }

  shark.shoot();
  shark.update();
  shark.show();


  ui.update();
  ui.show();

  movieMan.updateCakes();
}

function keyPressed(){
  shark.keyPress(keyCode, true);
}

function keyReleased(){
  shark.keyPress(keyCode, false);
}
