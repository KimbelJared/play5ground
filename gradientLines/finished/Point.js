class Point
{
  //Create all variables that the points will need
  constructor(x, y)
  {
      this.x = x;
      this.y = y;
      this.color = 255;
  }
  //Make sure point is in bounds
  test()
  {

    if (this.y > height)
    {
      this.y = height;
      console.log("y not in bounds, set to max");
    } else if (this.y < 0)
    {
      this. y = 0;
      console.log("y not in bounds, set to min");
    } else if (this.x < 0)
    {
      this. x = 0;
      console.log("x not in bounds, set to min");
    } else if (this.x > width)
    {
      this. x = width;
      console.log("x not in bounds, set to max");
    }


  }
  //Diplay point on screen
  show()
  {
      push();

      this.test();

      colorMode(RGB, 255)
      fill(this.color);
      noStroke();

      ellipse(this.x, this.y, DOT_SIZE);

      pop();
  }
}
