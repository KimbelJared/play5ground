class point
{

  constructor(px, py)
  {
      this.px = px;
      this.py = py;
      this.x = px + xOffset;
      this.y = py + (ladder() * random(childYOffsets));
      this.gen = ((this.x/xOffset)-1);
      this.dotColor = color(200);
      this.lineColor = color(200);
  }
  test()
  {
    this.dotColor = fetchColor(this.gen);

    //Mapped between current and last generaion TODO
    this.lineColor = fetchColor(this.gen);

    if (this.y > height)
    {
      this.y = height
    }
    if (this.y < 0)
    {
      this. y = 0
    }


  }
  show()
  {
      push();

      this.test();

      colorMode(RGB, 255)
      fill(this.dotColor);
      stroke(this.dotColor);
      ellipse(this.x, this.y, 5);

      stroke(this.lineColor);
      line(this.px, this.py, this.x, this.y);

      pop();
  }
}
