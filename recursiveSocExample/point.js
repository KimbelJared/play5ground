class point
{
  //Create all variables that the points will need
  constructor(px, py)
  {
      this.px = px;
      this.py = py;
      this.x = px + xOffset;
      this.y = py + (ladder() * random(childYOffsets));
      this.gen = ((this.x/xOffset)-1);
      this.dotColor = color(200);
      this.lineColor = color(255);
  }
  //Make sure point is in bounds, and has valid color
  test()
  {
    this.dotColor = fetchColor(this.gen);

    if (this.y > height)
    {
      this.y = height
    }
    if (this.y < 0)
    {
      this. y = 0
    }


  }
  //Diplay point on screen
  show()
  {
      push();

      this.test();

      colorMode(RGB, 255)
      fill(this.dotColor);
      stroke(this.dotColor);
      ellipse(this.x, this.y, DOT_SIZE);

      stroke(this.lineColor);
      line(this.px, this.py, this.x, this.y);
      //drawLines()

      pop();
  }
}
