class point
{

  constructor(px, py)
  {
      this.x = px + xOffset;
      this.y = py + (ladder() * random(childYOffsets));
  }

  show()
  {
      push();

      noFill();
      ellipse(this.x, this.y, 5);

      pop();
  }
}
