class node {

  constructor(x, y, id) {
    this.point = new point(x, y, nodeColor);
    this.id = id;
    this.gen = this.findGen();
  }

  update() {
    this.point.updateColor(nodeColor);
  }

  show() {
    this.point.show();
  }

  findGen() {
    return 1;
  }
}
