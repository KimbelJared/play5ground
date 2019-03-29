class point
{

  constructor(px, py, mc)
  {
      this.px = px;
      this.py = py;
      this.x = px + xOffset;
      this.y = py + (ladder() * random(childYOffsets));
      this.gen = (this.x/xOffset)-2;
      //console.log("gen: " + this.gen)
      //console.log("x: " + this.x)
  }

  show()
  {
      push();

      colorMode(RGB, 255)
      fill(fetchColor(this.gen));
      stroke(fetchColor(this.gen));

      ellipse(this.x, this.y, 5);
      line(this.px, this.py, this.x, this.y);

      pop();
  }
}
