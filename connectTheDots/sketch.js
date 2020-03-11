let pointsOnScreen = [];
let howManyPoints = 5;
function setup()
{
  var canvas = createCanvas(800, 800);
  /*
  for(var i = 0; i < howManyPoints; i++)
  {
    pointsOnScreen[i] = new point((width/i)-geteDotSize(), height/2);
  }
  */
  pointsOnScreen[0] = new point();
  pointsOnScreen[1] = new point();
  pointsOnScreen[2] = new point();
  pointsOnScreen[3] = new point();
}

function draw()
{
  background(51);
  for(var i = 0; i < howManyPoints; i++)
  {
    pointsOnScreen[i].show();
  }
}
