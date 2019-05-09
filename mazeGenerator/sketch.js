//Constants
let MAZE_SIZE = 500;
let BOX_SIZE = MAZE_SIZE/10;
let SPEED = 5;
let MAZE_GRID = 10;
let DEBUG = false;

//Variables
var boxes = [];
var mazeJSON = {};
var clickedX = 0;
var clickedY = 1;
var saveButton;

function preload()
{
}

function setup()
{
  //Create canvas and attach click listener
  cnv = createCanvas(700, 700);
  cnv.mouseClicked(canvasActivity);

  //Create save button
  saveButton = createButton('Save');
  saveButton.position(19, 19);
  saveButton.mousePressed(outputMaze);

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
}

function canvasActivity()
{
  clickedX = mouseX;
  clickedY = mouseY;

  for (let x = 1; x < MAZE_GRID+1; x++)
  {
    for (let y = 1; y < MAZE_GRID+1; y++)
    {
      boxes[x][y].checkCollision();
    }
  }

}

function outputMaze()
{
  var jsonOutput = {};
  jsonOutput.Grid_Size = 10;

  for (let x = 1; x < MAZE_GRID+1; x++)
  {
    for (let y = 1; y < MAZE_GRID+1; y++)
    {
      var id = boxes[x][y].boxNumber;

      if(DEBUG)
      {
        console.log("Box [" + x + "][" + y + "]");
        console.log("Id : " + id);
      }

      jsonOutput[id] = [];
      jsonOutput[id][0] = boxes[x][y].upLine.display;
      jsonOutput[id][1] = boxes[x][y].rightLine.display;
      jsonOutput[id][2] = boxes[x][y].downLine.display;
      jsonOutput[id][3] = boxes[x][y].leftLine.display;
    }
  }
  saveJSON(jsonOutput, 'myMaze.json');
}
