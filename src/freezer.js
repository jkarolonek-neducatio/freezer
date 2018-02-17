class Freezer {
  constructor(size) {
    this._size = size;
  }
  get size() {
    return this._size;
  }
  createFreezer(container) {
    let freezer = document.createElement("DIV");
    freezer.style.width = this._size;
    freezer.style.height = this._size;
    freezer.style.border = "1px solid red";
    freezer.setAttribute("id", "freezer");
    container.appendChild(freezer);
  }
  freezerDestroyer(element) {

  }
}

export default Freezer
