const mainContainer = document.querySelector(".main-container"); // select main container div
const cellBtn = document.querySelector("#cellsModifyBtn"); // select button to modify cells

createGrid(4); // defualt grid of 4 cells per side

cellBtn.addEventListener("click", () => {
  let userInput = prompt("Enter number of cells per side (max 100):");

  let cellsPerSide = parseInt(userInput);

  if (isNaN(cellsPerSide) || cellsPerSide < 1 || cellsPerSide > 64) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  } else {
    createGrid(cellsPerSide);
  }
});

function createGrid(cellsPerSide) {
  // clear existing cells and create a new grid
  mainContainer.innerHTML = "";
  mainContainer.style.gridTemplateColumns = `repeat(${cellsPerSide}, 1fr)`;

  // calculate total new cells and crete them
  const totalNewCells = cellsPerSide * cellsPerSide;
  for (let i = 0; i < totalNewCells; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    mainContainer.appendChild(newCell);
  }
}
