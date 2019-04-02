var xOffset = 40;
var points = [];
var childYOffsets = [25, 50, 75, 100];
var numOfChild = [1];
var coinFlip = [-1, 1];
var colors = [];

function setup()
{
  createCanvas(1600, 800);


  for (i = 0; i < 50; i++)
  {
    colors[i] = color(random(0,255),random(0,255),random(0,255));
  }

  var children = random(numOfChild);
  makePoints(xOffset, height/2, children);

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
    textAlign(CENTER, CENTER);
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
  //Make the point
  var aPoint = new point(px,py);
  points.push(aPoint);

  //Make the children
  for (i = 0; i <  mc;  i++)
  {
    if (aPoint.gen > 38)
    {
      return;
    }
    else
    {
      var children = random(numOfChild);
      makePoints(aPoint.x, aPoint.y, children);
    }
  }
}

function fetchColor(g)
{
  return colors[g];
}
