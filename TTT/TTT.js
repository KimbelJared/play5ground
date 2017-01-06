var grid;
var menu;
var back;
var next;
var cursorq;
var p1;
var p2;
var pointingame = 0;


function setup() 
{
  createCanvas(400, 400);
  grid = new grid();
  menu = new menu();
  cursorq = new cursorq();
  back = new back();
  p1 = new playerOne;
  p2 = new playerTwo;
  next = new next;
}

function draw() 
{
  background(204);
  
  cursorq.show();
  cursorq.drawq();
  
  back.show();
  back.check();
  
  next.show();
  next.check();
  
  if (pointingame == 0)
  {
    menu.show();
    menu.check();
  }
  if (pointingame == 1)
  {
    p1.show();
  }
  else if (pointingame == 2)
  {
    p2.show();
  }  
  else if (pointingame == 3)
  {
    grid.show();
  }
  
}

function mouseClicked() 
{
  cursorq.clickX = mouseX;
  cursorq.clickY = mouseY;
  return false;
}

function keyTyped() 
{
  if (pointingame == 1) 
  {
    p1.typed(key);
  } 
  if (pointingame == 2) 
  {
    p2.typed(key);
  } 
  return false;
}