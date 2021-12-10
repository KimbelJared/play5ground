var ball;
var p1, p2;
function setup()
{
  var canvas = createCanvas(700, 400);
  ball = new ball();
  p1 = new paddle();

  frameRate(30);
}

function draw()
{
  background(51);

  p1.show();


  ball.log();
  ball.show();
  ball.update();
}

function keyPressed() {
  if (keyCode === 87){

  } else if (keyCode === 83){
    
  }
}
