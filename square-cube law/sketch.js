var sliderA, sliderB;

var lengthA, lengthB;
var areaA, areaB;
var volumeA, volumeB;
var myFont;

function preLoad()
{
  myFont = loadFont("http://jaredkimbel.com/projects/sclaw/Montserrat-Black.otf");
}

function setup()
{
  createCanvas(1200, 600, WEBGL);
  sliderA = createSlider(50, 300, 100);
  sliderA.position(600-(width/4)-60, 10);
  sliderB = createSlider(60, 310, 110);
  sliderB.position((600+width/4)-60, 10);
}

function draw()
{
  background(51);

  lengthA = sliderA.value();

  if(lengthB > lengthA)
  {
    lengthB = sliderB.value();
  } else
  {
    lengthB = lengthA+10;
    sliderB.value(lengthB);
  }

  drawBoxes();
  drawText();
}

function drawBoxes()
{
  //boxA
  push();
  translate(-(width/4), 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(lengthA);
  pop();

  //boxB
  push();
  translate(width/4, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(lengthB);
  pop();
}

function drawText()
{
  push();
  
  //text("Length of A: " + lengthA, 600-(width/4)-60, 20);
  //text("Length of B: " + lengthB, (600+width/4)-60, 20);

  pop();

}
