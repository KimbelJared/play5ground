var slider;

var length, area_1, area_2, volume_1, volume_2;

function setup()
{
  var canvas = createCanvas(800, 800, WEBGL);

  slider = createSlider(50, 300, 100);
  slider.position(10, 10);
}

function draw()
{
  background(51);

  length = slider.value();

  area_1 = pow(length, 2);
  volume_1 = pow(length, 3);

  push();
  rectMode(CENTER);
  //square(width/2, height/2, length);
  pop();

  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(length);
  pop();
}
