let container = document.querySelector("#container");
let btn = document.querySelector("#grid-btn");

document.addEventListener('DOMContentLoaded',() => {
    drawGrid(16);
});


btn.addEventListener("click", () => {
    let gridSize = Number(prompt("How big should the grid be?"));
    if (!Number.isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        let toDelete = document.querySelectorAll(".row");
        toDelete.forEach((element) => element.remove());
        drawGrid(gridSize);
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
                square.style.backgroundColor = "pink";
              });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
