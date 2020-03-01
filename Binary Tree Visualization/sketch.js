let colorPicker, slider;
let nodeColor = 255, nodeCount = 20;
let nodeArray = [], branchArray = [];
let needUpdate = true;
let id = 0;
function setup() {
  createCanvas(900,600);
  enableDebug();

  if(DEBUG)console.log("creating nodes "+ nodeCount);
  for(let i = 0; i < nodeCount; i++) {
    if(DEBUG){console.log("creating node " + id);}
    nodeArray[i] = new node(DOT_SIZE+((width/nodeCount)*i),50,id++);
  }

}

function draw() {
  background(51);

  for(let i = 0; i < nodeCount; i++) {
    nodeArray[i].show();
  }
  
}
