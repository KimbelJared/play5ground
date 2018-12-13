var donuts = [];
var numDonuts = 1;
function setup()
{
  createCanvas(400, 400);

  for(var i = 0; i < numDonuts; i++)
  {
    donuts[i] = new Donut(25+(i*30),200, 25)
  }
}

function draw()
{
  background(51);

  for(var i = 0; i < numDonuts; i++)
  {
    donuts[i].show();
    donuts[i].move();
    console.log(donuts[i].v.heading());
  }
}
