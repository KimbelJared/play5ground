//Constants
let MAZE_SIZE = 500;
let BOX_SIZE = MAZE_SIZE/10;
let SPEED = 5;
let MAZE_GRID = 10;
let DEBUG = false;

//Solver
var buddy;

//Arrays
var boxes = [];

//Mazes
var mazeJSON = {};

function preload()
{
  //load Mazes
  mazeJSON = loadJSON('http://jaredkimbel.com/projects/maze/assets/defaultMaze.json/');
}

function setup()
{
  createCanvas(700, 700);

  buddy = new Solver();

  //Create all the boxes
  var num = 1;
  for (let x = 1; x <= MAZE_GRID+1; x++)
  {
    boxes[x] = []; // create nested array

    for (let y = 1; y < MAZE_GRID+1; y++)
    {
      boxes[x][y] = new Box(x,y,num);
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
}

function draw()
{
  background(51);

  //Draw boxes to the screen
  for (let x = 1; x < MAZE_GRID+1; x++)
  {
    for (let y = 1; y < MAZE_GRID+1; y++)
    {
      boxes[x][y].show();
    }
  }
  buddy.show();
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    buddy.move(0, -1);
  } else if (keyCode === RIGHT_ARROW)
  {
    buddy.move(1,0);
  } else if (keyCode === DOWN_ARROW)
  {
    buddy.move(0,1);
  } else if (keyCode === LEFT_ARROW)
  {
    buddy.move(-1,0);
  }
}
