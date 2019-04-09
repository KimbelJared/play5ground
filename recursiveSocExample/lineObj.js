class lineObj
{
  //Create all variables that the line will need
  constructor(x1, y1, x2, y2, c)
  {
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
      this.c = c;
  }

  show()
  {
    push();
    colorMode(RGB, 255)
    stroke(this.c);
    fill(this.c);
    line(this.x1, this.y1, this.x2, this.y2);
    pop();
  }
}
