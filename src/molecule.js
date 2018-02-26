class Molecule {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    createMolecule(id) {
        let molecule = document.createElement("DIV");
        molecule.style.width = "1px";
        molecule.style.height = "1px";
        molecule.style.backgroundColor = "blue";
        molecule.style.position = "absolute";
        molecule.style.top = "0";
        molecule.style.left = "0";
        molecule.setAttribute("id", id);
        molecule.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.molecule = molecule;
    }
}

export default Molecule