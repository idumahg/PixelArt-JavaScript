// This is the function that creates the grid.
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const table = document.getElementById("pixelCanvas")

function makeGrid() {
  let gridWidth = inputWidth.value;
  let gridHeight = inputHeight.value;

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
