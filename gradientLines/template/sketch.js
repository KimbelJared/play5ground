let DOT_SIZE = 20;

var dotA, dotB;

function setup()
{
  var canvas = createCanvas(800, 800);
  dotA = new Point(200, 400);
  dotB = new Point(600, 400);
}

function draw()
{
  background(51);
  dotA.show();
  dotB.show();
}
