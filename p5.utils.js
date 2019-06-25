/*

Jared Kimbel | Jaredkimbel.com
Version 0.1 | June 21th, 2019

*/
console.log("p5.utils -- loaded");

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
      if (color == null)
      {
        this.color = 255;
      } else {
        this.color = color;
      }
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
      this.p1 = point1;
      this.p2 = point2;
      this.gradient = false;

      this.slope = findSlope(this.p1, this.p2);
      if(DEBUG) {console.log("Slope: "+this.slope);}
  }

  show()
  {
    if(this.gradient)
    {
      for(let i = 0; i < this.gradientLines.length; i++)
      {
        this.gradientLines[i].show();
      }
    } else
    {
      line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
    }
  }

  enableGradient()
  {
    this.gradient = !this.gradient
    if(this.gradient && this.p1.color != this.p2.color)
    {
      if(DEBUG) {console.log("Colors are different, preparing gradient.");}
      this.gradientLines = createGradient(this.p1, this.p2, this.slope);
    } else if (this.color1 == this.color2)
    {
      if(DEBUG) {console.log("Colors are the same, no need for gradient.");}
    } else
    {
      if(DEBUG) {console.log("Gradient not enabled for this line.");}
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

    this.color = point1.color;
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
  //setup needed variables
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

  var tempX = startPoint.x;
  var tempY = startPoint.y;

  if(slope < 0)
  {
    if(DEBUG) {console.log("Slope < 0");}

    let deltaX = (endPoint.x-startPoint.x)/GRADIENT_FINENESS;
    let deltaY = (startPoint.y-endPoint.y)/GRADIENT_FINENESS;

    for(let i = 0; i < GRADIENT_FINENESS; i++)
    {
      pointArray[i] = new point(tempX+deltaX, tempY+deltaY);
      tempX += deltaX;
      tempY -= deltaY;
    }

  } else if (slope > 0)
  {
    if(DEBUG) {console.log("Slope > 0");}

    let deltaX = (endPoint.x-startPoint.x)/GRADIENT_FINENESS;
    let deltaY = (endPoint.y-startPoint.y)/GRADIENT_FINENESS;

    for(let i = 0; i < GRADIENT_FINENESS; i++)
    {
      pointArray[i] = new point(tempX+deltaX, tempY+deltaY);
      tempX += deltaX;
      tempY += deltaY;
    }
  } else if (slope == 0)
  {
    if(DEBUG) {console.log("Slope == 0");}

    let deltaX = (endPoint.x-startPoint.x)/GRADIENT_FINENESS;

    for(let i = 0; i < GRADIENT_FINENESS; i++)
    {
      pointArray[i] = new point(tempX+deltaX, tempY);
      tempX += deltaX;
    }
  } else
  {
    console.log("Unable to make Gradient");
  }
  pointArray = assignColors(pointArray, startPoint.color, endPoint.color);

  return pointArray;
}

/*

Assigns colors to each point

*/
p5.prototype.assignColors = function(pointArray, startColor, endColor)
{
  var arrayToReturn = pointArray;



  return(arrayToReturn);
}

/*

Create Gradient Line Segments Function

*/
p5.prototype.createGradientLineSegments = function(pointsArray)
{
  var arrayToReturn = [];

  return(arrayToReturn);
}
