function Planet()
{
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  
  this.update = function()
  {
    this.z = this.z - speed;
    if (this.z < 1) 
    {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() 
  {
    fill(this.r, this.g, this.b);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 128, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(this.r, this.g, this.b);
    line(px, py, sx, sy);

  }
}