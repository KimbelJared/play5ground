var stars = []
var speed = 10;

function setup() 
{
  noCursor();
  createCanvas(displayWidth, displayHeight);
  for (var i = 0; i < 800; i++) 
  {
    stars[i] = new Star();
  }
}

function draw() 
{
  background(0);

  translate(mouseX , mouseY);
  
  for (var i = 0; i < stars.length; i++) 
  {
    stars[i].update();
    stars[i].show();
  }
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