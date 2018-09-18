var shark;
var donuts = [];

function setup()
{
  createCanvas(800, 800);

  shark = new Shark();

  for(var i = 0; i < 10; i++)
  {
    donuts[i] = new Donut(400+(i*25),400)
  }
}

function draw()
{
  background(51);

  shark.show();

  for(var i = 0; i < 10; i++)
  {
    donuts[i].show();
  }
}
