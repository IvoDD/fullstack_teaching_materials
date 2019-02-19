var a = [];
var n = 10;

for (let i=0; i<n; ++i){
    a[i] = [];
    for (let j=0; j<n; ++j){
        a[i][j] = Math.floor(Math.random()*2);
    }
}

function update() {
}
function draw() {
    for (let i=0; i<n; ++i){
        for (let j=0; j<n; ++j){
            if (a[i][j]) context.fillStyle = "blue";
            else context.fillStyle = "red";
            context.fillRect(j*100, i*100, 99, 99);
        }
    }
}
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
}
function mouseup() {
    let i = Math.floor(mouseY/100);
    var j = Math.floor(mouseX/100);
    if (i<n && j<n){
        a[i][j] = 1 - a[i][j];
        if (i+1 < n) a[i+1][j] = 1 - a[i+1][j];
        if (i-1 >= 0) a[i-1][j] = 1 - a[i-1][j];
        if (j < n) a[i][j+1] = 1 - a[i][j+1];
        if (j >= 0) a[i][j-1] = 1 - a[i][j-1];
    }
}
