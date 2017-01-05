var grid;
var menu;
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
  
}

function draw() 
{
  background(204);
  cursorq.show();
  cursorq.drawq();
  
  if(pointingame == 0)
  {
    
    menu.show();
    menu.check();
  }
  else if (pointingame == 1)
  {
    
  }
  else if (pointingame == 2)
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