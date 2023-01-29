// I was greatly helped for this project by the walkthrough video made by Session Lead Rachel Joyce.
// This is the function that creates the grid.
function makeGrid() {
  const gridHeight = document.getElementById("inputHeight").value
  const gridWidth = document.getElementById("inputWidth").value
  const table = document.getElementById("pixelCanvas")

  for (let height = 0; height < gridHeight; height++) {
    const trElem = document.createElement("tr");
    table.appendChild(trElem);

    for (let width = 0; width < gridWidth; width++) {
      const tdElem = document.createElement("td");

      tdElem.addEventListener("click", (event) => {
        const color = document.getElementById("colorPicker").value
        event.target.style.backgroundColor = color;
      });

      trElem.appendChild(tdElem);
    }
  }
}

// This function ensures that the grid is cleared by clicking submit
function eraseGrid() {
  const table = document.getElementById("pixelCanvas");
  let firstEl = table.firstElementChild;

  while (firstEl) {
    firstEl.remove();
    firstEl = table.firstElementChild;
  }
}

document.addEventListener("submit", (event) => {
  event.preventDefault();
  eraseGrid();
  makeGrid();
})
