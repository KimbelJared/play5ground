var voters = [];

function setup() 
{
  createCanvas(800,600);
  background(51);
  
  for(var i = 0; i < 100; i++)
  {
    var tempX = random(0+10,width-10);
    var tempY = random(0+10,height-10);
    
    var tempVoter = new Voter(tempX, tempY);
    voters.push(tempVoter);
  }
}

function draw() 
{
  for (var i = 0; i < voters.length; i++)
  {
    voters[i].show();
  }
}