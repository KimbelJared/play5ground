let point1, point2;
let line1;
let grid;

function setup()
{
  var canvas = createCanvas(800, 800);

  point1 = new fancyPoint(50, 50);
  point2 = new fancyPoint(100, 100);
  line1 = new fancyLine(point1,point2);
  grid = new coordGrid((width/2), (height/2));
}

function draw()
{
  background(51);

  point1.show();
  point2.show();
  line1.show();
  grid.show();
}
