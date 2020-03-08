/*

Jared Kimbel | Jaredkimbel.com
Version 0.1 | Februrary 29th, 2020

*/

let DEBUG_utils = false;

let DOT_SIZE = 10;

//Initial Function
p5.prototype.startTheEngine = function(){
  console.log("p5.utils -- loaded");
}
p5.prototype.registerMethod('init', p5.prototype.startTheEngine);

//Functions

//Enable Debug Function
p5.prototype.utilsDebug = function(bool){
  DEBUG_utils = bool;
  console.log("p5.utils -- debug enabled");
}

//Change Dot Size
p5.prototype.changeDotSize = function(input){
  DOT_SIZE = input;
  console.log("p5.utils -- DOT_SIZE changed to " + DOT_SIZE);
}

//Objects

/*

Point Object

*/
p5.prototype.fancyPoint = class{
  //Create all variables that the points will need
  constructor(x, y, color){
      this.x = x;
      this.y = y;
      if (color == null){
        this.color = 255;
      } else {
        this.color = color;
      }

      this.test();
  }
  //Make sure point is in bounds
  test(){
    if (this.y > height){
      this.y = height;
      if(DEBUG_utils){console.log("y not in bounds, set to max");}
    } else if (this.y < 0){
      this.y = 0;
      if(DEBUG_utils){console.log("y not in bounds, set to min");}

    } if(this.x < 0){
      this.x = 0;
      if(DEBUG_utils){console.log("x not in bounds, set to min");}
    } else if (this.x > width){
      this.x = width;
      if(DEBUG_utils){console.log("x not in bounds, set to max");}
    }
  }

  //Diplay point on screen
  show(){
      push();

      colorMode(RGB, 255)
      fill(this.color);
      noStroke();

      ellipse(this.x, this.y, DOT_SIZE);

      pop();
  }

  move(newX, newY){
    this.x = newX;
    this.y = newY;
  }

  //Update color
  updateColor(newColor){
    this.color = newColor;
  }
}

/*

Line Object

*/
p5.prototype.fancyLine = class{
  //Create all variables that the line will need
  constructor(point1, point2, color){
      this.p1 = point1;
      this.p2 = point2;

      if (color == null){
        this.color = 255;
      } else {
        this.color = color;
      }
  }

  show(){
    push();
    colorMode(RGB, 255)
    stroke(this.color);
    line(this.p1.x,this.p1.y,this.p2.x,this.p2.y);
    pop();
  }

  //Update color
  updateColor(newColor){
    this.color = newColor;
  }
}

/*

Rectangle Object

*/
p5.prototype.fancyRect = class{

  constructor(p1, p2, p3, p4, color){
    this.points = [];
    this.lines = [];

    this.points[0] = p1;
    this.points[1] = p2;
    this.points[2] = p3;
    this.points[3] = p4;
    this.lines[0] = new fancyLine(this.points[0], this.points[1]);
    this.lines[1] = new fancyLine(this.points[1], this.points[2]);
    this.lines[2] = new fancyLine(this.points[2], this.points[3]);
    this.lines[3] = new fancyLine(this.points[3], this.points[0]);

    this.w = this.points[1].x - this.points[0].x;
    this.h = this.points[3].y - this.points[1].y;

    if (color == null){
      this.color = 255;
    } else {
      this.color = color;
    }

    this.fill = true;
    this.stroke = false;
  }

  show(){
    for(var i = 0; i < this.points.length; i++){
      if(this.stroke){this.points[i].show();}
    }
    for(var i = 0; i < this.lines.length; i++){
      if(this.stroke){this.lines[i].show();}
    }
    if(this.fill){
      push();
      colorMode(RGB, 255)
      noStroke();
      fill(this.color);
      rect(this.points[0].x, this.points[0].y, this.w, this.h);
      pop();
    }
  }

  isIn(checkPoint){
    let insideX;
    let insideY;
    let newX;
    let newY;
    console.log("Objects x: " + this.points[0].x + " Objects y: " + this.points[0].y);
    console.log("Check Point x: " + checkPoint.x + "Check Point y: " + checkPoint.y)
    if((this.points[0].x < checkPoint.x) && (checkPoint.x < this.points[1].x)){ //x is inside
      insideX = true;
    } else {
      insideX = false;
    }
    if((this.points[0].y < checkPoint.y) && (checkPoint.y < this.points[3].y)){ //y is inside
      insideY = true;
    } else {
      insideY = false;
    }
    if(insideX){ //TODO
      let midpoint = ((this.points[1].x - this.points[0].x)/2)+this.points[0].x;
      if(checkPoint.x <= midpoint){ //left of mid
        newX = this.points[0].x;
      } else if(midpoint < checkPoint.x){ //Right of mid
        newX = this.points[1].x;
      }
    }
    if(insideY){ //TODO
      let midpoint = ((this.points[3].y - this.points[0].y)/2)+this.points[0].y;
      if(checkPoint.y <= midpoint){ //Above mid
        newY = this.points[0].y;
      } else if(midpoint < checkPoint.y){ //Below mid
        newY = this.points[3].y;
      }
    }
    return [insideX && insideY, newX, newY];
  }
}
