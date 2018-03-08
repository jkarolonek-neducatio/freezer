class Molecule {
    constructor(x, y, view) {
        this._x = x;
        this._y = y;
        this._view = view;
        this._view.classList.add("molecule");
        this._view.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get view() {
        return this._view;
    }

    moleculePositionUpdate(moveX, moveY) {
        this._x = this._x + moveX;
        this._y = this._y + moveY;
        this._view.style.transform = `translate(${this._x}px, ${this._y}px)`;
    }
}

export default Molecule