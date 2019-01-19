
function update() {
    
}
function draw() {
    context.fillStyle = "blue";
    context.fillRect(200, 100, 150, 250);
    
    context.fillStyle = "yellow";
    context.fillRect(250, 50, 50, 50);

    context.fillStyle = "red";
    context.fillRect(150, 125, 50, 200);
    context.fillRect(350, 125, 50, 200);

    context.fillStyle = "green";
    context.fillRect(200, 350, 70, 250);
    context.fillRect(280, 350, 70, 250);
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
