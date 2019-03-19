var x = [], y = [], a = [], r = [], da = [];
var gx = [], gy = [], t=0;
var n = 10;

x[0] = 400; y[0] = 300;
for (let i=0; i<n; ++i){
    r[i] = 250/(i+4);
    da[i] = Math.PI / Math.floor(Math.random()*4+1) / 50;
    if (Math.random() < 0.5) da[i] *= -1;
    a[i] = 0;
}

function update() {
    for (let i=0; i<n; ++i){
        a[i] += da[i];
        x[i+1] = x[i] + r[i]*Math.cos(a[i]);
        y[i+1] = y[i] + r[i]*Math.sin(a[i]);
    }
    gx[t] = x[n];
    gy[t] = y[n];
    t++;
}
function draw() {
    context.strokeStyle = "black";
    context.beginPath();
    context.moveTo(x[0], y[0]);
    for (let i=1; i<=n; ++i){
        context.lineTo(x[i], y[i]);
    }
    context.stroke();

    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(gx[0], gy[0]);
    for (let i=1; i<t; ++i){
        context.lineTo(gx[i], gy[i]);
    }
    context.stroke();
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
