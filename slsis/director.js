director = class{
  constructor(){
    this.needToDie = 5;
    this.cake_deaths = 0;
  }

  updateCakes(){
    if(this.cake_deaths > this.needToDie){
      this.addCakes(5);
      this.needToDie *= 3;
      this.cake_deaths = 0;
    }
  }

  addCakes(amount){
    for (var i = 0; i < amount; i++) {
      baddies.push(new cupcake);
    }
  }
}
