var heartValues = []
var heartAssets = []
var hearts;

function preload()
{
  heartAssets[0] = loadImage("assets/heart.png");
  heartAssets[1] = loadImage("assets/heart_MT.png");
}


function setup() 
{
  createCanvas(800,400);
  hearts = new Hearts;
  
}

function draw() 
{
  background(51);
  
  hearts.show();
}