interface = class{
  constructor(){
    console.log("Interface Constructor");

    this.sprintX = width-50;
    this.sprintY = 100;
  }

  update(){

  }

  show(){
    //Draw Energy bar
    ellipse(this.sprintX, this.sprintY, 10);
  }
}
