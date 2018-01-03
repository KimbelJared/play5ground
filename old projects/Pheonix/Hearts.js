function Hearts() 
{
  this.w = heartAssets[0].width;
  this.h = heartAssets[0].height;
  
  this.update = function()
  {
    
  }

  this.show = function() 
  {
    image(heartAssets[0], 700, 25);
    image(heartAssets[0], 650, 25);
  }
}