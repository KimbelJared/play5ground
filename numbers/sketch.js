let CANV = 500;
let OFFSET = 50;
let RC =  CANV/OFFSET;

var Xlocations = [];
var Ylocations = [];

function setup()
{
  var canvas = createCanvas(CANV, CANV);
  //canvas.parent('sketch-wrapper');
  for (let i = 0; i < RC; i++)
  {
    Xlocations[i] = (i*OFFSET)+OFFSET;
  }
  for (let i = 0; i < RC; i++)
  {
    Ylocations[i] = (i*OFFSET)+OFFSET;
  }
}

function draw()
{
  background(51);
  var count = 1;
  for (let x = 0; x < RC; x++)
  {
    for(let y = 0; y < RC; y++)
    {
      noStroke();
      fill(255);
      text(count, Xlocations[y], Ylocations[x]);
      count++;
    }
  }
  noLoop();
}
