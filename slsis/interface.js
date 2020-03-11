interface = class{
  constructor(){


    this.sprintW = 25;
    this.sprintH = 100;
    this.sprintX = width-(25+(this.sprintW));
    this.sprintY = 25;
    this.sprintBar = 0;
  }

  update(){
    this.sprintBar = map(shark.sprintDistance, 0, shark.sprintDistanceMax, 0, this.sprintH);
  }

  show(){
    //Draw Energy bar outline
    push();
    noFill();
    stroke(255);
    rect(this.sprintX, this.sprintY, this.sprintW, this.sprintH);
    pop();

    //Draw Energy bar
    push();
    noStroke();
    fill(34, 201, 126);
    rect(this.sprintX, this.sprintY, this.sprintW, this.sprintBar);
    pop();
  }
}
