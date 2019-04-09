var xOffset = 40;
var points = [];
var lines = [];
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
  for (i = 0; i <  lines.length;  i++)
  {
    lines[i].show();
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
  fill(colors[0]);
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
  drawLines(aPoint, .25);

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

//draw the gradiant lines between 2 points
function drawLines(point, tol)
{
    let x1 = point.px;
    let y1 = point.py;
    let pc = fetchColor(this.gen-1);
    let tc = this.dotColor;
    let aLine = 0;

    while(x1 <= (point.x))
    {
      x2 = x1+tol;
      let z = ((point.x-point.px)/(point.x-x1)) * tol
      y2 = y1-z;
      let c = lerpColor(pc, tc, .25);

      aLine = new lineObj(x1, y1, x2 , y2, c);
      lines.push(aLine);

      console.log("x1: " + x1);
      console.log("y1: " + y1);
      console.log("x2: " + x2);
      console.log("y2: " + y2);

      x1 = x2;
      y1 = y2;
      pc = c;
    }
}
