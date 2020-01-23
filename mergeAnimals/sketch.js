let DEBUG = 1;

var mergables = [];

function setup()
{
  var canvas = createCanvas(800, 800);
  mergables[0] = new Mergable();
}

function draw()
{
  background(51);

  for(let i=0; i < mergables.length; i++)
  {
    mergables[0].show();
  }
}
