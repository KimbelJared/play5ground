/*

Jared Kimbel | Jaredkimbel.com
Version 0.1 | June 21th, 2019

*/
console.log("p5.utils -- loaded");
var DEBUG;

//Setup library
p5.prototype.startUrEngines = function(d)
{
  DEBUG = d;
  if(DEBUG)
  {
    console.log("p5.utils -- debug enabled");
  }
}

//Objects

/*

Point Object

*/
p5.prototype.point = class
{
  //Create all variables that the points will need
  constructor(x, y, color)
  {
      this.x = x;
      this.y = y;
      this.color = color;
  }
  //Make sure point is in bounds
  test()
  {
    if (this.y > height)
    {
      this.y = height;
      console.log("y not in bounds, set to max");
    } else if (this.y < 0)
    {
      this. y = 0;
      console.log("y not in bounds, set to min");
    } else if (this.x < 0)
    {
      this. x = 0;
      console.log("x not in bounds, set to min");
    } else if (this.x > width)
    {
      this. x = width;
      console.log("x not in bounds, set to max");
    }
  }

  //Diplay point on screen
  show()
  {
      push();

      this.test();

      colorMode(RGB, 255)
      fill(this.color);
      noStroke();

      ellipse(this.x, this.y, DOT_SIZE);

      pop();
  }
}

/*

Line Object

*/
p5.prototype.fancyLine = class
{
  //Create all variables that the line will need
  constructor(point1, point2, gradient)
  {
      this.x1 = point1.x;
      this.y1 = point1.y;

      this.x2 = point2.x;
      this.y2 = point2.y;

      this.color1 = point1.color;
      this.color2 = point2.color;

      this.slope = findSlope(point1, point2);
      if(DEBUG) {console.log("Slope: "+this.slope);}

      this.gradient = gradient;
      if(this.gradient) {this.gradientLines = [];}

      if(this.gradient && this.color1 != this.color2)
      {
        if(DEBUG) {console.log("Colors are different, preparing gradient.");}
        this.gradientLines = createGradient(point1, point2, this.slope);
      } else if (this.color1 == this.color2)
      {
        if(DEBUG) {console.log("Colors are the same, no need for gradient.");}
      } else
      {
        if(DEBUG) {console.log("Gradient not enabled for this line.");}
      }
  }

  show()
  {
    line(this.x1, this.y1, this.x2, this.y2);

    if(this.gradient)
    {
      for(let i = 0; i < this.gradientLines.length; i++)
      {
        this.gradientLines[i].show();
      }
    }    
  }
}

/*

Line Segment Object (for Gradient)

*/
p5.prototype.fancyLineSegment = class
{
  //Create all variables that the line will need
  constructor(point1, point2, color)
  {
    this.x1 = point1.x;
    this.y1 = point1.y;

    this.x2 = point2.x;
    this.y2 = point2.y;

    this.color1 = point1.color;
  }

  show()
  {
    push();
    stroke(this.color)
    line(this.x1,this.y1,this.x2,this.y2);
    pop();
  }
}

//Functions

/*

Finding Slope Function

*/
p5.prototype.findSlope = function(point1, point2)
{
  //get needed variables
  let x1 = point1.x;
  let y1 = point1.y;

  let x2 = point2.x;
  let y2 = point2.y;

  return((y2-y1)/(x2-x1));
}

/*

Create Gradient Function

*/
p5.prototype.createGradient = function(startPoint, endPoint, slope)
{
  var lineArray = [];
  var pointArray = [];

  if(slope < 0)
  {
    if(DEBUG) {console.log("Slope < 0");}
    pointArray[0] = createGradientPoint(startPoint, endPoint);
    for(i=1; i<20; i++)
    {
      pointArray[i] = createGradientPoint(pointArray[i-1], endPoint);
    }
    //lineArray = createGradientLineSegments(pointsArray);
  } else if (slope > 0)
  {
    if(DEBUG) {console.log("Slope > 0");}
    pointArray[0] = createGradientPoint(startPoint, endPoint);
    for(i=1; i<20; i++)
    {
      pointArray[i] = createGradientPoint(pointArray[i-1], endPoint);
    }
  } else
  {
    if(DEBUG) {console.log("Slope == 0");}
    pointArray[0] = createGradientPoint(startPoint, endPoint);
    for(i=1; i<20; i++)
    {
      pointArray[i] = createGradientPoint(pointArray[i-1], endPoint);
    }
  }
  return pointArray;
}

/*

Create Gradient Point Function

*/
p5.prototype.createGradientPoint = function(startPoint, endPoint)
{
  let sx = startPoint.x;
  let sy = startPoint.y;

  let ex = endPoint.x;
  let ey = endPoint.y;

  //HERE LIES THE PROBLEM
  //let delta = (ex-ey)/1000;

  let midX = lerp(sx, ex, .1);
  let midY = lerp(sy, ey, .1);
  var tempPoint = new point(midX, midY, 255);

  return tempPoint;
}

/*

Create Gradient Line Segments Function

*/
p5.prototype.createGradientLineSegments = function(pointsArray)
{
  var arrayToReturn = [];

  return(arrayToReturn);
}
