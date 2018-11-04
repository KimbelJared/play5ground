var donuts = [];

function setup()
{
  createCanvas(400, 400);

  for(var i = 0; i < 10; i++)
  {
    donuts[i] = new Donut(25+(i*30),200, 25)
  }
}

function draw()
{
  background(51);

  for(var i = 0; i < 10; i++)
  {
    donuts[i].show();
  }
}
