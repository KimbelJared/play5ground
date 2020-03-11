interface = class{
  constructor(){


    this.sprintW = 25;
    this.sprintH = 100;
    this.sprintX = width-(25+(this.sprintW));
    this.sprintY = 25;
    this.sprintBar = 0;

    this.scoreX = width - 300;
    this.scoreY = 75;
    this.score = 100;
    this.scoreMax = 999999999;
  }

  update(){
    this.sprintBar = map(shark.sprintDistance, 0, shark.sprintDistanceMax, 0, this.sprintH);
    this.score+=250;
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

    //Draw Energy bar text
    push();
    fill(255);
    //textFont(font);
    text("Energy", this.sprintX-5, this.sprintY-5);
    pop();

    //Draw Score text
    push();
    textSize(25);
    fill(255);
    this.toPrint = "Score: ";
    let temp = this.score.toString();

    for(var i = 0; i < temp.length; i++){
      if(i % 3 == 0 && (i != 0)){
        this.toPrint += ",";
      } this.toPrint += temp[i];
    }

    text(this.toPrint, this.scoreX, this.scoreY);
    pop();

    //Draw hearts

  }
}
