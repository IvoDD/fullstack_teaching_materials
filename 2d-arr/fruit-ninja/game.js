var bv = 10;
var t=0;
var bX = [], bY = [], dx = [], dy = [], c = [], isPiece = [], nb = 0;
var X;
var Y;
//var rX = [], rY = [];
var nr = 0;
var t = 0;

var colors = ["blue", "red", "orange", "yellow", "purple"];

function update(){
    
    X = Math.random()*800;
    Y = Math.random()*50;
    for (let i=0; i<nb; ++i){
        bX[i] += dx[i];
        bY[i] += dy[i];
        dy[i] += 0.1;
    }
    if (t%100 == 0){
        bX[nb] = 400;
        bY[nb] = 600;
        let dist = Math.sqrt( (X - 400)*(X - 400) + (Y - 600)*(Y - 600) ) 
        dx[nb] = bv/dist*(X-400)
        dy[nb] = bv/dist*(Y-600)
        c[nb] = colors[Math.floor(Math.random()*5)]
        isPiece[nb] = false;
        ++nb;
    }
    for (let j=0; j<nb; ++j){
        if (areColliding(mouseX, mouseY, 20, 100, bX[j], bY[j], 40, 100) && !isPiece[j]){
            isPiece[j] = true;
            dx[j] -= 2;
            bX[nb] = bX[j] + 30;
            bY[nb] = bY[j];
            dx[nb] = dx[j] + 4;
            dy[nb] = dy[j];
            c[nb] = c[j];
            isPiece[nb] = true;
            nb++;
        }
    }
    t++;
}
function draw() {
    context.fillStyle = "gray";
    context.fillRect(mouseX, mouseY, 20, 80)
    
    for (let i = 0; i<nb; ++i){
        context.fillStyle = c[i];
        if (isPiece[i]){
            context.fillRect(bX[i], bY[i], 20, 70);
        }else{
            context.fillRect(bX[i], bY[i], 40, 70);
        }
    }
    /*for (let i = 0; i<nr; ++i){
        context.fillRect(bX[i], rY[i], 20, 70);
    }
    for (let i = 0; i<nr; ++i){
        context.fillRect(bX[i]+50, rY[i]+50, 20, 70);
    }*/
};
function keyup(key) {
    // Show the pressed keycode in the console
    
    console.log("Pressed", key);
};
function mouseup() {
    console.log("mouse pressed");
};