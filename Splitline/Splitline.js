var voters = [];

function setup() 
{
  createCanvas(600,800);
  background(51);
  
  for(var i = 0; i < 102; i++)
  {
    var tempX = random(0,width);
    var tempY = random(0,height);
    
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