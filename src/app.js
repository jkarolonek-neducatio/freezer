import './app.stylus';
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

    function moleculeCreator() {
      for (let i = 0; i < moleculeCountNumber; i++) {
        let position = getRandomPos(maxPosition, minPosition);
        let molecule = document.createElement("DIV");
        molecules[i] = new Molecule(position[0], position[1], molecule, "mobile");
        freezerInstance.freezerElement.appendChild(molecules[i].view);
      }
    }
    console.log(molecules);

    moleculeCreator()

    function randomMoleculeMover() {
      for (let j = 0; j < molecules.length; j++) {
        let randomiser = Math.floor(Math.random() * 8);
        let moveX;
        let moveY;

        switch(randomiser) {
          case 0:
              moveX = -1;
              moveY = 1;
              break;
          case 1:
              moveX = 0;
              moveY = 1;
              break;
          case 2:
              moveX = 1;
              moveY = 1;
              break;
          case 3:
              moveX = -1;
              moveY = 0;
              break;
          case 4:
              moveX = 1;
              moveY = 0;
              break;
          case 5:
              moveX = -1;
              moveY = -1;
              break;
          case 6:
              moveX = 0;
              moveY = -1;
              break;
          case 7:
              moveX = 1;
              moveY = -1;
        }
        if (molecules[j].x != maxPosition && molecules[j].x != minPosition && molecules[j].y != maxPosition && molecules[j].y != minPosition && molecules[j].x != -maxPosition && molecules[j].x != -minPosition && molecules[j].y != -maxPosition && molecules[j].y != -minPosition) {
          molecules[j].moleculePositionUpdate(moveX, moveY);
        } else {
          molecules[j]._state = "frozen";
        }
      }
      
    }

    setInterval(function() {
      randomMoleculeMover();
    }, 10);

  });

});