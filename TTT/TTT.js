var grid;
var menu;
var cursor;
var p1;
var p2;

function setup() 
{
  createCanvas(400, 400);
  grid = new grid();
  menu = new menu();
  cursor = new cursorq();
  
}

function draw() 
{
  background(204);
  menu.show();
  cursor.show();
  
  //grid.show();
  
}

function mouseClicked() 
{
  
  return false;
}