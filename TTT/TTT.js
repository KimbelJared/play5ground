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
  p1 = new playerOne;
  p2 = new playerTwo;
  back = new back();
  next = new next;
}

function draw() 
{
  background(204);
  
  cursorq.show();
  //cursorq.drawq();
  

  
  if (pointingame == 0)
  {
    menu.show();
    menu.check();
  }
  if (pointingame == 1)
  {
    p1.show();
    back.show();
    next.show();
    
    back.check();
    next.check();
  }
  else if (pointingame == 2)
  {
    p2.show();
    back.show();
    next.show();
    
    back.check();
    next.check();
  }  
  else if (pointingame == 3)
  {
    grid.show();
    p1.dis();
  }
  else if (pointingame == 4)
  {
    grid.show();
    p2.dis();
  }
  
}

function mouseClicked() 
{
  cursorq.clickX = mouseX;
  cursorq.clickY = mouseY;
  if (pointingame == 3)
  {
    //p1.turn();
  }
  else if (pointingame == 4)
  {
    //p2.turn();
  }
  
  
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