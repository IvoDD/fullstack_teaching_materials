function circle(cx, cy, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(cx, cy, r, 0, 2*Math.PI);
    context.fill();
}

function d(x1, y1, x2, y2){
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

function areCircleColliding(x1, y1, r1, x2, y2, r2){
    if (d(x1, y1, x2, y2) <= r1 + r2){
        return true;
    }
    return false;
}

var x = 100, y = 100, r = 41, x2 = 200, y2 = 200, r2 = 100;

console.log(areCircleColliding(x, y, r, x2, y2, r2));

function update() {
}
function draw() {
    circle(x, y, r, "rgba(0, 0, 255, 1)");
    circle(x2, y2, r2, "rgba(255, 0, 0, 1)");
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
