let container = document.querySelector("#container");
let btn = document.querySelector("#grid-btn");
let interactionCount = 0;

document.addEventListener('DOMContentLoaded',() => {
    drawGrid(16);
});


btn.addEventListener("click", () => {
    let gridSize = Number(prompt("How big should the grid be?"));
    if (!Number.isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        let toDelete = document.querySelectorAll(".row");
        toDelete.forEach((element) => element.remove());
        interactionCount = 0;
        drawGrid(gridSize);
    } else {
        alert("Write a Number between 1 and 100!");
    }
})



function drawGrid(squareNumber) {
    for (let i = 0; i < squareNumber; i++) {
        let row = document.createElement("div");
        row.setAttribute("style", "flex: 1; display: flex");
        row.setAttribute("class", "row");
        for (let j = 0; j < squareNumber; j++) {
            let square = document.createElement("div");
            square.setAttribute("style", "flex: 1;");
            square.setAttribute("class", "square");
            square.addEventListener("mouseenter", () => {
                if (interactionCount < 10) {
                    square.style.opacity = `${(++interactionCount * 10)}%`;
                }
                square.style.backgroundColor = `rgb(${getRandomRGBvalue()}, ${getRandomRGBvalue()}, ${getRandomRGBvalue()})`;
              });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}


function getRandomRGBvalue() {
    return Math.floor(Math.random() * 256);
  }
  
