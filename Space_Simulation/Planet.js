function Planet(json)
{
    this.name = json.planet;
    this.distance = json.distance;

    this.show = function()
    {
      text(this.name, 100, 0);
      text(this.distance, 100, 50);
    }
}
