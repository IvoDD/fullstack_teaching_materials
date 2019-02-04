
function update() {
}
function draw() {
    let x , y;
    for (let row = 0; row < 50; ++row){
        for (let col = 0; col < 50; ++col){
            context.fillStyle = "blue"
            if ( row == col ){
                context.fillStyle = "green";
            }
            if (row > col){
                context.fillStyle = "red";
            }
            context.fillRect(col*12, row*12, 10, 10);
        }
    }
    /*context.fillStyle = "green";
    for (let row = 0; row < 50; ++row){
        context.fillRect(12*row, 12*row, 10, 10);
    }
    context.fillStyle = "red";
    for (let row = 0; row < 50; ++row){
        for (let col = 0; col<row; ++col){
            context.fillRect(12*col, 12*row, 10, 10);
        }
    }
    context.fillStyle = "blue";
    for (let row = 0; row < 50; ++row){
        for (let col = row+1; col<50; ++col){
            context.fillRect(12*col, 12*row, 10, 10);
        }
    }*/
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
