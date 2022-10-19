const container = document.querySelector("#grid-container");
const resetButton = document.querySelector('#reset-button');
const rainbowModeCheckbox = document.querySelector('#rainbow-mode');
let gridFull = false;

function renderGrid (size, basis) {
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flexBasis = basis + "%";
        square.addEventListener('mouseover', () => {
            if (rainbowModeCheckbox.checked) {
                const rgbColor = RandomRGB();
                square.style.backgroundColor = `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`
            } else {
                square.style.backgroundColor = "black"; 
            }
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

function RandomRGB() {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);

    return [r,g,b];
}

createGrid(10);

resetButton.addEventListener('click', () => {
    newGrid();
});