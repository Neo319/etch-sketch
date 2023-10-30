console.log ("Hello world!");

const grid = document.getElementById ('grid');
const newGrid = document.querySelector ('button');

newGrid.addEventListener ("click", () => console.log("button clicked"));

for (i = 0; i <= 15; i++) {
    let column = document.createElement("div");
    column.className = `column ${i}`;
    
    for (j = 0; j <= 15; j++) {
        let row = document.createElement("div");
        row.className = `row ${j}`;
        // row.textContent = "a";
        
        column.appendChild(row);
        
        row.addEventListener("mouseover", () => {
            row.style.backgroundColor = "white";
            console.log("drawing");
        })
    }
    
    grid.appendChild(column);
}


newGrid.addEventListener ("click", makeGridPrompt);

function makeGridPrompt() {
    response = prompt("Enter the desired scale of the new grid. (eg. '16' for 16x16) (maximum: 100x100)")
    
    if (!(response >= 2) || !(response <= 100)) {
        alert("invalid!")
    }
    else {
        console.log(`clearing: ${response}`)
        
        grid.innerHTML = '';
        
        
        for (x = response; x >= 1; x--) {
            let column = document.createElement("div");
            column.className = `column ${x}`;            
            
            for (y = response; y >= 1; y--) {
                let row = document.createElement("div");
                row.className = `row ${y}`;
                // row.textContent = "b";
                
                column.appendChild(row);
                
                row.addEventListener("mouseover", () => {
                    row.style.backgroundColor = "white";
                    console.log("drawing");
                })
            }
            grid.appendChild(column);
        };
        
    }
    
}
