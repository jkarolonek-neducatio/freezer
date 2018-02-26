import Freezer from "./freezer";
import Molecule from "./molecule";

let freezerInstance;

document.addEventListener("DOMContentLoaded", function(event) {
  let sizeButton = document.getElementsByClassName("freezer-init")[0];
  let freezerContainer = document.getElementsByClassName("freezer-container")[0];

  sizeButton.addEventListener("click", function(event) {
    let sizeInput = document.getElementsByClassName("size-get")[0].value;
    let sizeInterpolated = `${sizeInput}px`;

    let moleculeCount = document.getElementsByClassName("count-get")[0].value;
    let moleculeCountNumber = Number(moleculeCount);

    if(freezerInstance) {
      freezerContainer.removeChild(freezerInstance.freezerElement);
      freezerInstance = null;
    }

    if(sizeInput.length > 0) {
      freezerInstance  = new Freezer(sizeInterpolated);
      freezerInstance.createFreezer();
      freezerContainer.appendChild(freezerInstance.freezerElement);
    }

    let maxPosition = Number(sizeInput) - 1;
    let minPosition = 0;

    function getRandomPos(min, max) {
      let x = Math.floor(Math.random() * (max - min + 1) + min);
      let y = Math.floor(Math.random() * (max - min + 1) + min);
      return [x, y];
    }

    let molecules = [];

    for (let i = 0; i < moleculeCountNumber; i++) {
      let position = getRandomPos(maxPosition, minPosition);
      molecules[i] = new Molecule(position[0], position[1]);
    }

    for (let j = 0; j < molecules.length; j++) {
      molecules[j].createMolecule(j);
      freezerInstance.freezerElement.appendChild(molecules[j].molecule);
    }

  });

});