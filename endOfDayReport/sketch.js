let nsInput, rInput, pcInput;
let busySlider, coverageSlider;
let windyBox, cloudyBox, todayHighInput, tomHighInput;
let copyBT;
let INPUT_SIZE = 50;
function setup()
{
  var canvas = createCanvas(800, 800);

  textAlign(CENTER, CENTER);

  nsInput = createInput('');
  nsInput.size(INPUT_SIZE);
  nsInput.position((width/2)-INPUT_SIZE/2, height/3);

  rInput = createInput('');
  rInput.size(INPUT_SIZE);
  rInput.position((width/2)-INPUT_SIZE/2, height/2);

  pcInput = createInput('');
  pcInput.size(INPUT_SIZE);
  pcInput.position((width/2)-INPUT_SIZE/2, height/1.5);

  copyBT = createButton('Copy');
  copyBT.position(width/2,(height/1.5)+30);
  copyBT.mousePressed(copyFunction);

  busySlider = createSlider(-2, 2, 0, 1);
  busySlider.position((width*.25), height/3);

  coverageSlider = createSlider(-2, 2, 0, 1);
  coverageSlider.position((width*.25), height/2);

  todayHighInput = createInput('');
  todayHighInput.size(INPUT_SIZE);
  todayHighInput.position((width*.75), height/3);

  tomHighInput = createInput('');
  tomHighInput.size(INPUT_SIZE);
  tomHighInput.position((width*.75), height/2);
}

function draw()
{
  background(51);

  //draw text labels
  push();
  fill(255);
  text('Net Sales', width/2,(height/3)-10);
  text('Revenue', width/2,(height/2)-10);
  text('People', width/2,(height/1.5)-10);
  pop();


}

function copyFunction(){
  let output = "Net Sales: $" + nsInput.value() +
              "\nRevenue: $" + rInput.value() +
              "\nPeople: " + pcInput.value();
  console.log(output);
}
