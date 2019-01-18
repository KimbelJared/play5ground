var xOffset = 10;
var points = [];
var childYOffsets = [5, 10, 15, 20];
var numOfChild = [1, 2, 3];
var coinFlip = [-1, 1];
function setup()
{
  createCanvas(400, 400);
  makePoints(xOffset, height/2);
}

function draw()
{
  background(51);

  for (i = 0; i <  points.length;  i++)
  {
    points[i].show();
  }
}

function ladder()
{
  var val = random(coinFlip);
  return val;
}

function makePoints(px,py, mc)
{
  if (points.length < 50 || mc ==  0)
  {
    var aPoint = new point(px,py);
    points.push(aPoint);

    var child = random(numOfChild);
    var i = 1;
    do {
      makePoints(aPoint.x, aPoint.y);
      i++
    } while (i < child);
  }
  if (points.length < 50 || mc > 0)
  {
    var aPoint = new point(px,py);
    points.push(aPoint);
  }
}
