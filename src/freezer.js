class Freezer {
  constructor(size) {
    this._size = size;
  }
  get size() {
    return this._size;
  }
  createFreezer() {
    let freezer = document.createElement("DIV");
    freezer.style.width = this._size;
    freezer.style.height = this._size;
    freezer.style.border = "1px solid red";
    freezer.style.position = "relative";
    freezer.setAttribute("id", "freezer");
    this.freezerElement = freezer;
  }
  freezerDestroyer() {

  }
}

export default Freezer
