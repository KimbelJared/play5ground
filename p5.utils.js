/*

Jared Kimbel | Jaredkimbel.com
Version 0.1 | June 21th, 2019

*/
let TRUE = true;
let FALSE = false;
//Initial Function
p5.prototype.startTheEngine = function()
{
  console.log("p5.utils -- loaded");

  var valuesArray = [];
  for (let x = 0; x < 3; x++)
  {
    valuesArray[x] = [];
  }

  valuesArray[0][0] = "DEBUG";
  valuesArray[0][1] = DEBUG;
  valuesArray[1][0] = "DOT_SIZE";
  valuesArray[1][1] = DOT_SIZE;
  valuesArray[2][0] = "GRADIENT_FINENESS";
  valuesArray[2][1] = GRADIENT_FINENESS;

  if(DEBUG)
  { console.log("p5.utils -- debug enabled"); console.log("p5.utils -- constants"); + console.log(valuesArray);}
  else {console.log("p5.utils -- debug not enabled. Add 'let DEBUG = true' at the top of sketch.js to do so");}


}
p5.prototype.registerMethod('init', p5.prototype.startTheEngine);
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

      this.test();
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
  constructor(point1, point2)
  {
      this.p1 = point1;
      this.p2 = point2;

      this.gradientObj;

      this.enableGradient();
      console.log(this.gradientObj);

      this.slope = findSlope(this.p1, this.p2);
      if(DEBUG) {console.log("Slope: "+this.slope);}
  }

  show()
  {
    this.gradientObj.show();
  }

  enableGradient()
  {
    if(this.p1.color != this.p2.color)
    {
      if(DEBUG) {console.log("Colors are different, preparing gradient.");}
      this.gradientObj = new gradient(this.p1, this.p2);
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

Gradient Object

*/
p5.prototype.gradient = class
{
  constructor(startPoint, endPoint)
  {
    this.pointArray = [];
    this.lineArray = [];
    this.pointArray[0] = startPoint;

    this.gradientRecursiveTool(this.pointArray[0], endPoint, 0);
  }

  //LAST PROBLEMO
  gradientRecursiveTool(onePoint, twoPoint, i)
  {
    if(i < GRADIENT_FINENESS)
    {
      console.log("i val : "+ i);
      this.pointArray[i] = findMidpoint(onePoint, twoPoint);
      console.log("found Midpoint");
      this.gradientRecursiveTool(onePoint, this.pointArray[i], li);
      console.log("left point");
      this.gradientRecursiveTool(this.pointArray[i], twoPoint, ri);
      console.log("right point");

      i = (li+ri)/2;
    }
    else
    {
      return;
    }
  }

  show()
  {
    for(let i = 0; i < this.pointArray.length; i++)
    {
      this.pointArray[i].show();
    }
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

Midpoint Function

*/
p5.prototype.findMidpoint = function(point1, point2)
{
  let x1 = point1.x;
  let y1 = point1.y;

  let x2 = point2.x;
  let y2 = point2.y;

  let newX = lerp(x1, x2, .5);
  let newY = lerp(y1, y2, .5);
  let newColor = lerpColor(point1.color, point2.color);

  return new point(newX, newY, newColor)
}

/*

Lerp Color Function

*/
p5.prototype.lerpColor = function(color1, color2)
{
  let color1Values = color1.toString('#rrggbb');
  let color2Values = color2.toString('#rrggbb');



  let newR = (parseInt('0x'+color1Values[1]+color1Values[2])+parseInt('0x'+color2Values[1]+color2Values[2]))/2;
  let newG = (parseInt('0x'+color1Values[3]+color1Values[4])+parseInt('0x'+color2Values[3]+color2Values[4]))/2;
  let newB = (parseInt('0x'+color1Values[5]+color1Values[6])+parseInt('0x'+color2Values[5]+color2Values[6]))/2;

  let newColor = color(newR, newG, newB);

  if(DEBUG) {console.log("color1: "+color1.toString('rgb')); console.log("color2: "+color2.toString('rgb')); console.log("color3: "+newColor.toString('rgb'));}
  return newColor;
}
