let point1, point2;
let line1;
let grid;

function setup()
{
  var canvas = createCanvas(800, 800);

  point1 = new fancyPoint(50, 50);
  point2 = new fancyPoint(100, 100);

  point3 = new fancyPoint(200, 200);
  point4 = new fancyPoint(300, 300);
  point5 = new fancyPoint(200, 300);
  point6 = new fancyPoint(300, 200);

  line1 = new fancyLine(point1,point2);

  rect1 = new fancyRect(point3, point6, point4, point5);
}

function draw()
{
  background(51);

  point1.show();
  point2.show();

  point3.show();
  point4.show();
  point5.show();
  point6.show();

  rect1.show();

  line1.show();
}
