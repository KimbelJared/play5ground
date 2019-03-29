var xOffset = 40;
var points = [];
var childYOffsets = [25, 50, 75, 100];
var numOfChild = [1, 2, 3];
var coinFlip = [-1, 1];
var colors = [];

function setup()
{
  createCanvas(1600, 800);


  for (i = 0; i < 50; i++)
  {
    colors[i] = color(random(0,255),random(0,255),random(0,255));
  }

  makePoints(xOffset, height/2);
}

function draw()
{
  background(51);

  for (i = 0; i <  points.length;  i++)
  {
    points[i].show();
  }

  var z = 1;
  for (i = xOffset; i <  width;  i+= xOffset)
  {
    push();
    noStroke();
    textSize(20);
    fill(colors[z-1]);
    text(z, i, 50);
    pop();

    z++

  }
  push();

  noStroke();
  fill(colors[0]);
  ellipse(xOffset, height/2, 5);

  pop();
}

function ladder()
{
  var val = random(coinFlip);
  return val;
}

function makePoints(px,py, mc)
{
  if (points.length < 49 || mc ==  0)
  {
    var aPoint = new point(px,py, mc);
    points.push(aPoint);

    var child = random(numOfChild);
    var i = 1;
    do {
      makePoints(aPoint.x, aPoint.y, child);
      i++
    } while (i < child);
  }
  if (points.length < 50 || mc > 0)
  {
    var aPoint = new point(px,py, mc);
    points.push(aPoint);
  }
}

function fetchColor(g)
{
  return colors[g];
}
