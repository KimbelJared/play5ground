var stars = []

var speed = 10, speedTest = 10;

var planets = []

var sun;

var move, move2;

var pointX, pointY;

function setup() 
{
  noCursor();
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 800; i++) 
  {
    stars[i] = new Star();
  }
  for (var i = 0; i < 10; i++) 
  {
    planets[i] = new Planet();
  }
  sun = new Sun;
  
}

function draw() 
{
  background(0);
  
  pointX = mouseX/2;
  pointY = mouseY/2;
  
  translate(pointX , pointY);
  
  for (var i = 0; i < stars.length; i++) 
  {
    stars[i].update();
    stars[i].show();
  }
  for (var i = 0; i < planets.length; i++) 
  {
    planets[i].update();
    planets[i].show();  
  }
  
  //sun.show();
  
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}

function mouseWheel(event) 
{
  if (-event.delta > 0)
  {
    if (speed != 50)
    {
      speed += 5;  
    }
    
  }
  else
  {
    if (speed != 0)
    {
      speed -= 5;  
    }
  }
  return false;
  
}