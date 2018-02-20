var ship;
var targets = [];
var shots = [];

function setup() 
{
  createCanvas(600, 400);
  ship = new Ship();
  ship.setDir(0);
  for (var i = 0; i < 7; i++)
  {
    targets[i] = new Target(i*80+80, 60);
  }
   
}

function draw() 
{
  background(51);
  ship.show();
  ship.move();
  for (var i = 0; i < targets.length; i++)
  {
    targets[i].show();
  }
  
  for (var i = 0; i < shots.length; i++)
  {
    shots[i].show();
    shots[i].move();
    for (var j = 0; j < targets.length; j++) 
    {
      if (shots[i].hits(targets[j])) 
      {
        targets[j].grow();
        shots[i].evaporate();
      }
    }
  }
}


function keyReleased()
{
  if (key != ' ') 
  {
    ship.setDir(0);
  }
}





function keyPressed()
{
  if (key === ' ')
  {
    var shot = new Shot(ship.x, ship.y);
    shots.push(shot);
  }
  
  if (keyCode === RIGHT_ARROW)
  {
    ship.setDir(1);
  }
  else if (keyCode === LEFT_ARROW)
  {
    ship.setDir(-1);
  }
}