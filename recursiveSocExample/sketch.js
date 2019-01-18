var xOffset = 5;
var points = [];

function setup()
{
  createCanvas(800, 800);
}

function draw()
{
  background(51);

  var test = new point(50,50);
  points.push(test)
}

function ladder()
{
  var val = int(random (0,2));
  return val;
}
