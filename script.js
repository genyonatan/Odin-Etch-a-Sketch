const mainContainer = document.querySelector(".main-container");

const totalCells = 16;

for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  mainContainer.appendChild(cell);
}
