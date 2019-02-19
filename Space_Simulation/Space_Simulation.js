var stars = []
var images = []

var speed = 10;



var distTxt, cursorDot;

var menu, showMenu = false;

var speedCheckbox, speedCheckboxVal = true;
var cursorCheckbox, cursorCheckboxVal = false;
var trailLineCheckbox, trailLinesCheckboxVal = true;

function preload()
{
  imageMode(CENTER);

  images[10] = loadImage("assets/sun.png");
  images[9] = loadImage("assets/mercury.png");
  images[8] = loadImage("assets/venus.png");
  images[7] = loadImage("assets/earth.png");
  images[6] = loadImage("assets/moon.png");
  images[5] = loadImage("assets/mars.png");
  images[4] = loadImage("assets/jupiter.png");
  images[3] = loadImage("assets/saturn.png");
  images[2] = loadImage("assets/uranus.png");
  images[1] = loadImage("assets/neptune.png");
  images[0] = loadImage("assets/pluto.png");

  fontRegular = loadFont("assets/fontReg.ttf");
  fontBold = loadFont("assets/fontBold.ttf");
  
}

function setup()
{
  noCursor();
  createCanvas(displayWidth, displayHeight);

  for (var i = 0; i < 800; i++)
  {
    stars[i] = new Star();
  }

  distTxt = new Distance();
  cursorDot = new Cursor();
  menu = new Menu();

  speedCheckbox = createCheckbox('Speed', true);
  speedCheckbox.changed(speedCheckEvent);

  cursorCheckbox = createCheckbox('Cursor', false);
  cursorCheckbox.changed(cursorCheckEvent);

  trailLineCheckbox = createCheckbox('Trail Lines', true);
  trailLineCheckbox.changed(trailLineCheckEvent);

  menu.init();
}

function draw()
{
  background(0);

  menu.show();


  cursorDot.translateScreen();


  for (var i = 0; i < images.length; i++)
  {
   image(images[i], i*100, 0, images[0].width/4, images[0].height/4);
  }


  for (var i = 0; i < stars.length; i++)
  {
    stars[i].update();
    stars[i].show();
  }


  distTxt.update();
  distTxt.show();


  cursorDot.show();
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function speedCheckEvent()
{
  if (this.checked())
  {
    speedCheckboxVal = true;
  }
  else
  {
    speedCheckboxVal = false;
  }

}
function cursorCheckEvent()
{
  if (this.checked())
  {
    cursorCheckboxVal = true;
  }
  else
  {
    cursorCheckboxVal = false;
  }
}

function trailLineCheckEvent()
{
  if (this.checked())
  {
    trailLinesCheckboxVal = true;
  }
  else
  {
    trailLinesCheckboxVal = false;
  }
}

function mouseClicked()
{

  cursorDot.clickedX = mouseX;
  cursorDot.clickedY = mouseY;

  if (showMenu)
  {
    cursorDot.test();
    if(!cursorDot.inMenu)
    {
      showMenu = false;
      menu.hide();
      menu.reStore();
    }
  }

  else if (!showMenu)
  {
    showMenu = true;
    menu.store();
  }
}

function mouseWheel(event)
{
  if(!showMenu)
  {
    if (-event.delta > 0)
    {
      if (!(speed >= 50))
      {
        speed += 5;
      }
    }
    else
    {
      if (!(speed <= -50))
      {
        speed -= 5;
      }
    }
    return false;
  }
}
