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
      //this.lineColor = color(200);
  }
  //Make sure point is in bounds, and has valid color
  test()
  {
    this.dotColor = fetchColor(this.gen);

    //Mapped between current and last generaion TODO
    //this.lineColor = lerpColor(fetchColor(this.gen-1), fetchColor(this.gen), .5);

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

      //stroke(this.lineColor);
      //line(this.px, this.py, this.x, this.y);
      //this.gradientLine(.2);

      pop();
  }
  //TODO I cant do trig SEND HELP
  gradientLine(tol)
  {
      let x1 = this.px;
      let y1 = this.py;
      let pc = fetchColor(this.gen-1);
      let tc = this.dotColor;

      while(x1 != this.x)
      {
        //x2 = ;
        //y2 = ;
        let c = lerpColor(pc, tc, tol);
        stroke(c);
        line(x1, y1, x2, y2);

        x1 = x2;
        y1 = y2;
        pc = c;
      }
  }

}
