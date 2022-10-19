const container = document.querySelector("#grid-container");
const resetButton = document.querySelector('#reset-button');
const rainbowmodeButton = document.querySelector('#rainbow-mode');
const blackWhiteModeButton = document.querySelector('#black-white-mode');
const darkenModeButton = document.querySelector('#darken-mode');
const emptyGridButton = document.querySelector('#empty-grid-button');

let gridFull = false;
let blackWhiteMode = true;
let rainbowMode = false;
let darkenMode = false;

function renderGrid (size, basis) {
    for (let i = 0; i < size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.flexBasis = basis + "%";
        square.addEventListener('mouseover', () => {
            if (rainbowMode && !square.style.backgroundColor.includes("rgb")) {
                const rgbColor = RandomRGB();
                square.style.backgroundColor = `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`
            } else if (blackWhiteMode) {
                square.style.backgroundColor = "black"; 
            } else if (darkenMode) {
                const color = square.style.backgroundColor;
                console.log(color);
            } else {
                return;
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

/* function darkenByTenPercent (color) {

    const darkenedColor =  `rgb(${color},${color},${color})`;
    return darkenedColor;
}
 */

createGrid(10);

resetButton.addEventListener('click', () => {
    newGrid();
});

blackWhiteModeButton.addEventListener('click', () => {
    rainbowMode = false;
    darkenMode = false;
    blackWhiteMode = true;
})

rainbowmodeButton.addEventListener('click', () => {
    rainbowMode = true;
    darkenMode = false;
    blackWhiteMode = false;
})

darkenModeButton.addEventListener('click', () => {
    rainbowMode = false;
    darkenMode = true;
    blackWhiteMode = false;
})

emptyGridButton.addEventListener('click', () => {
    const squares = document.querySelectorAll(".square");
    for (i = 0; i < squares.length; i ++) {
        squares[i].style.backgroundColor = "white";
    }
})