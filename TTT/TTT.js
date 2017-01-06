var grid;
var menu;
var back;
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
  p1 = new player1;
  p2 = new player2;
}

function draw() 
{
  background(204);
  cursorq.show();
  cursorq.drawq();
  back.show();
  back.check();
  
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