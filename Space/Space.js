var stars = [];

function setup() 
{
  createCanvas(800, 600);
  
  for (var i = 0; i < 10; i++)
  {
    stars[i] = new Star(i*80+80, 10 * i);
  }
}

function draw() 
{
  background(0);
  for (var i = 0; i < stars.length; i++)
  {
    stars[i].show();
  }
}