const container = document.querySelector("#grid-container");
const resetButton = document.querySelector('#reset-button');
let gridFull = false;

function renderGrid (size, basis) {
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flexBasis = basis + "%";
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        })
        container.appendChild(square);
    }
}

function createGrid (rows) {
    const gridSize = rows * rows;
    const squareBasis = 100/rows;
    renderGrid(gridSize, squareBasis);
    gridFull = true;
}

function emptyGrid () {
    const squares = document.querySelectorAll(".square");
    for (i = 0; i < squares.length; i ++) {
        container.removeChild(squares[i]);
    }
    gridFull = false;
}

function newGrid () {
    if (gridFull) {
        emptyGrid();
    }
    let userInput = parseInt(prompt("How many squares per side?"));
    if (userInput <= 100 && userInput >= 1) {
        createGrid(userInput);
    } else {
        alert("Invalid number");
        return;
    }
}

createGrid(10);

resetButton.addEventListener('click', () => {
    newGrid();
});