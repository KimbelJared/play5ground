let shark, ui, font;
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
}

function draw(){

  background(51);

  shark.shoot();
  shark.update();
  shark.show();

  ui.update();
  ui.show();
}

function keyPressed(){
  shark.keyPress(keyCode, true);
}

function keyReleased(){
  shark.keyPress(keyCode, false);
}
