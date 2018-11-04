function setup()
{
  //createCanvas(displayWidth, displayHeight);
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw()
{
  background(139,170,193);
  translate(width/2, height/2);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  //five_dots
  let five_spac = 30;
  for(let i = 0; i < 20; i++)
  {
	push();
	stroke(229,177,229);
	strokeWeight(7.5);
	rotate(five_spac * i);
	point(0,160);
	pop();
  }
  //fifteen dots
  let fifteen_spac = 90;
  for(let i = 0; i < 4; i++)
  {
	push();
	stroke(253,254,255);
	strokeWeight(3.75);
	rotate(fifteen_spac * i);
	point(0,160);
	pop();
  }

  //Second arc
  strokeWeight(8);
  stroke(168,148,193);
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, secondAngle);

  //Minute Arc
  stroke(251,247,173);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  //Hour Arc
  stroke(181,229,218);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 300, 300, 0, hourAngle);

  //Second Hand
  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  //line(0, 0, 100, 0);
  pop();

  //Minute Hand
  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  //line(0, 0, 75, 0);
  pop();

  //Hour Hand
  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  //line(0, 0, 50, 0);
  pop();

  //Center Dot
  stroke(255);
  //point(0, 0);
}
