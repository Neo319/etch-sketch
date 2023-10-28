console.log ("Hello world!");

const grid = document.getElementById ('grid');

for (i = 0; i <= 15; i++) {
    let column = document.createElement("div");
    column.className = `column ${i}`;
    column.textContent = `column ${i}`;

    for (j = 0; j <= 15; j++) {
        let row = document.createElement("div");
        row.className = `row ${j}`;
        row.textContent = `row ${j}`;

        column.appendChild(row);

        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "black";
            console.log("drawing");
        })
    }

    grid.appendChild(column);
}

