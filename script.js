console.log ("Hello world!");

const grid = document.getElementById ('grid');
const newGrid = document.querySelector ('button');

for (i = 0; i <= 15; i++) {
    let column = document.createElement("div");
    column.className = `column`;
    
    for (j = 0; j <= 15; j++) {
        let row = document.createElement("div");
        row.className = `row`;
        row.style.backgroundColor = "rgb(40, 40, 40)";        
        column.appendChild(row);
        
        row.addEventListener("mouseover", () => {
            draw(row);
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
            column.className = `column`;            
            
            for (y = response; y >= 1; y--) {
                let row = document.createElement("div");
                row.className = `row`;
                row.style.backgroundColor = "rgb(40, 40, 40)";

                column.appendChild(row);
                row.addEventListener("mouseover", () => {
                    draw(row);
                })
            }
            grid.appendChild(column);
        };
        
    }
    
}



const standardBtn = document.getElementById('standard');
const rainbowBtn = document.getElementById('rainbow');
const gradientBtn = document.getElementById('gradient');
const modeDisplay = document.getElementById('modeDisplay');

let mode = "standard";
modeDisplay.textContent = `Current mode = ${mode}`;

standardBtn.addEventListener("click", () => {
    mode = "standard";
    modeDisplay.textContent = `Current mode = ${mode}`;
    console.log(mode);
});
rainbowBtn.addEventListener("click", () => {
    mode = "rainbow";
    modeDisplay.textContent = `Current mode = ${mode}`;
    console.log(mode);
});
gradientBtn.addEventListener("click", () => {
    mode = "gradient";
    modeDisplay.textContent = `Current mode = ${mode}`;
    console.log(mode);
});



function draw (pixel) {
    if (mode === "standard") {
        pixel.style.backgroundColor = "rgb(255, 255, 255)";
    }
    else if (mode === "rainbow") {
        let randomColor = (Math.floor(Math.random() * 16777215)).toString(16);
        pixel.style.backgroundColor = '#' + randomColor;
    }
    else if (mode === "gradient") {
        let colorBefore = pixel.style.backgroundColor;
        let [red, green, blue] = colorBefore.match(/\d+/g).map(Number)
        
        red += 25;
        blue += 25;
        green += 25;
    
        let colorAfter = "rgb(" + (red) + ", " + (green) + ", " + (blue) + ")";
        pixel.style.backgroundColor = colorAfter;
    }
}



