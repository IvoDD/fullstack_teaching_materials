var myX, myY;
var alpha = 0;
var r = 100;
var cx = 400, cy = 300;

function update() {
    myX = cx + r*Math.cos(alpha);
    myY = cy + r*Math.sin(alpha);
    alpha += 0.01;
    cx += 1;
}
function draw() {
    context.fillRect(myX, myY, 30, 30);
    context.beginPath(); //започваме да рисуваме с моливче
    context.moveTo(cx, cy);
    context.lineTo(myX, myY);
    //context.arc(cx, cy, r, 0, 2*Math.PI);
    context.stroke() //показваме нарисуваното от моливчето на екрана
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
