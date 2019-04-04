var xOffset = 40;
var points = [];
var childYOffsets = [25, 50, 75, 100];
var numOfChild = [1];
var coinFlip = [-1, 1];
var colors = [];

let DOT_SIZE = 5;

function setup()
{
  createCanvas(1600, 800);

  //Creates random colors and pushes them to the array
  for (i = 0; i < 50; i++)
  {
    colors[i] = color(random(0,255),random(0,255),random(0,255));
  }

  //start the recursive generation function
  var children = random(numOfChild);
  makePoints(xOffset, height/2, children);

}

function draw()
{
  background(51);

  //display all points
  for (i = 0; i <  points.length;  i++)
  {
    points[i].show();
  }

  //display generation numbers at the top of the sceen
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

  //draw gen 0 dot
  push();

  noStroke();
  fill(colors[1]);
  ellipse(xOffset, height/2, DOT_SIZE);
  //WHY ARE YOU SMALLER
  pop();
}
//see if point goes up or down (ayy ladders)
function ladder()
{
  var val = random(coinFlip);
  return val;
}
//recursivly create points
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
//provide a way for point class to accuire color
function fetchColor(g)
{
  return colors[g];
}
