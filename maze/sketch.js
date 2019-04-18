//Constants
let MAZE_SIZE = 500;
let BOX_SIZE = MAZE_SIZE/10;

//Arrays
var boxes = [];

function setup()
{
  createCanvas(700, 700);

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
  noLoop();
}
