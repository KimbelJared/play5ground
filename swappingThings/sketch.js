//Constants
let DEBUG = true;
let GRID_SIZE = 10;
//variables
var gameGrid = [];
var itemAssets = [];
function setup()
{
  utilsDebug(DEBUG);

  var canvas = createCanvas(1200, 1200);

  //Create Grid
  var num = 1;
  for (let x = 1; x <= GRID_SIZE+1; x++)
  {
    gameGrid[x] = []; // create nested array

    for (let y = 1; y < GRID_SIZE+1; y++)
    {
      gameGrid[x][y] = new Box(x,y,num);
      num++;

      //Break once 100 boxes are created
      if(num > 100)
      {
        break;
      }
    }

    //Break once 100 boxes are created
    if(num > 100)
    {
      break;
    }
  }

  //Load assets
  itemAssets[0] = loadImage('assets/chicken0.png');
  itemAssets[1] = loadImage('assets/chicken1.png');
  itemAssets[2] = loadImage('assets/chicken2.png');
  itemAssets[3] = loadImage('assets/chicken3.png');
  itemAssets[4] = loadImage('assets/chicken4.png');
}

function draw()
{
  background(51);
  //Display Grid
  for (let x = 1; x < GRID_SIZE+1; x++)
  {
    for (let y = 1; y < GRID_SIZE+1; y++)
    {
      gameGrid[x][y].show();
      gameGrid[x][y].contains.show();
    }
  }
  ellipse(1100,1100, 10,10);
}
