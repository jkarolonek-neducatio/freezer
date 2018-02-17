import Freezer from "./freezer";

document.addEventListener("DOMContentLoaded", function(event) {
  let sizeButton = document.getElementsByClassName("freezer-init")[0];
  let freezerContainer = document.getElementsByClassName("freezer-container")[0];
  sizeButton.addEventListener("click", function(event) {
    let sizeInput = document.getElementsByClassName("size-get")[0].value;
    let sizeInterpolated = `${sizeInput}px`;
    const freezerInstance  = new Freezer(sizeInterpolated);
    freezerInstance.createFreezer(freezerContainer);
  });
});