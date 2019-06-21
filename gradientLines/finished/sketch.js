let DOT_SIZE = 20;

var dotA, dotB, dotC;
var lineD, lineE;

function setup()
{
  startUrEngines(true);

  var canvas = createCanvas(800, 800);

  dotA = new point(200, 400, color('#a1d9ff'));
  dotB = new point(600, 200, color('#ca82f8'));
  dotC = new point(600, 600, color('#f2bbbb'));

  lineD = new fancyLine(dotA, dotB);
  //lineE = new fancyLine(dotA, dotC);
}

function draw()
{
  background(51);

  dotA.show();
  dotB.show();
  dotC.show();

  lineD.show();
  //lineE.show();
}
