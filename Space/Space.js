var stars = []

var speed;

var planets = []
 
function setup() 
{
  createCanvas(1600, 900);
  for (var i = 0; i < 800; i++) 
  {
    stars[i] = new Star();
  }
  for (var i = 0; i < 10; i++) 
  {
    planets[i] = new Planet();
  }
}

function draw() 
{
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width / 2, height / 2);
  
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
  
}