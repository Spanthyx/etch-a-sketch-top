let container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.setAttribute("style", "flex: 1; display: flex");
    row.setAttribute("class", "row");
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.setAttribute("style", "flex: 1; border: 1px solid black;");
        square.setAttribute("class", "square");
        row.appendChild(square);
    }
    container.appendChild(row);
}