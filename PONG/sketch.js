var ball;
function setup()
{
  var canvas = createCanvas(600, 400);
  ball = new ball();
  frameRate(20);
}

function draw()
{
  background(51);

  ball.update();
  ball.show();
}
