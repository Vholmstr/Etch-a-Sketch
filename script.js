const gridRows = 10;
const gridSize = gridRows * gridRows;
const container = document.querySelector("#grid-container");
const basis = 100/gridRows;


for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.flexBasis = basis + "%";
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
    })
});