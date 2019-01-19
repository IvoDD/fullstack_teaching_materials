var x=50, y=100;

var wallX = 850, wallY = 300;

function update() {
    y += 3;
    wallX -= 5;
    if (y > 550){
        y = 550;
    }
    if (y < 0){
        y = 0;
    }
    if (wallX < -100){
        wallX = 800;
        wallY = Math.random()*400 + 200
    }
    if (areColliding(x, y, 50, 50, wallX, wallY, 100, 600) || areColliding(x, y, 50, 50, wallX, wallY-800, 100, 600)){
        console.log("game over");
    }
}
function draw() {
    drawImage(duckTarget, x, y, 50, 50);
    context.fillStyle = "green";
    context.fillRect(wallX, wallY, 100, 600);
    context.fillRect(wallX, wallY-800, 100, 600);
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    if (key == 32){
        y = y - 150;
    }
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
