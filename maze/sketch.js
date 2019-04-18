//Constants
let MAZE_SIZE = 500;
let BOX_SIZE = MAZE_SIZE/10;
let SPEED = 5;
//Solver
var buddy;

//Arrays
var boxes = [];

function setup()
{
  createCanvas(700, 700);

  buddy = new Solver();

  for (let x = 1; x <= 11; x++)
  {
    boxes[x] = []; // create nested array
    for (let y = 1; y < 11; y++)
    {
      boxes[x][y] = new Box(x,y);
    }
  }
}

function draw()
{
  background(51);

  //Create initial square for maze to exist in
  push();
  noFill();
  stroke(255);
  //square(100, 100, MAZE_SIZE);
  pop();

  for (let x = 1; x < 11; x++)
  {
    for (let y = 1; y < 11; y++)
    {
      boxes[x][y].show();
    }
  }

  buddy.update();
  buddy.show();
}

function keyPressed()
{
  if (keyCode === UP_ARROW)
  {
    buddy.goingUp = true;
  } else if (keyCode === RIGHT_ARROW)
  {
    buddy.goingRight = true;
  } else if (keyCode === DOWN_ARROW)
  {
    buddy.goingDown = true;
  } else if (keyCode === LEFT_ARROW)
  {
    buddy.goingLeft = true;
  }
}
function keyReleased()
{
  if (keyCode === UP_ARROW)
  {
    buddy.goingUp = false;
  } else if (keyCode === RIGHT_ARROW)
  {
    buddy.goingRight = false;
  } else if (keyCode === DOWN_ARROW)
  {
    buddy.goingDown = false;
  } else if (keyCode === LEFT_ARROW)
  {
    buddy.goingLeft = false;
  }
}
