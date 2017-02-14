var stars = []
var speed = 10;
var images = []

function preload() 
{
  imageMode(CENTER);
  
  images[10] = loadImage("assets/sun.png");
  images[9] = loadImage("assets/mercury.png");
  images[8] = loadImage("assets/venus.png"); 
  images[7] = loadImage("assets/earth.png");
  images[6] = loadImage("assets/moon.png");
  images[5] = loadImage("assets/mars.png");
  images[4] = loadImage("assets/jupiter.png");
  images[3] = loadImage("assets/saturn.png");
  images[2] = loadImage("assets/uranus.png");
  images[1] = loadImage("assets/neptune.png");
  images[0] = loadImage("assets/pluto.png");
}

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
  
  for (var i = 0; i < images.length; i++) 
  {
    image(images[i], 0, 0, images[0].width/4, images[0].height/4);
  }
  
  
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