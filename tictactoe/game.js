var n = 3;
var turn = 0;
var a = [];
for (let i=0; i<n; ++i){
    a[i] = [];
    for (let j=0; j<n; ++j){
        a[i][j] = "gray";
    }
}
var timer = -1;

function update() {
    timer--;
    if (timer == 0){
        for (let i=0; i<n; ++i){
            for (let j=0; j<n; ++j){
                a[i][j] = "gray";
            }
        }
    }
}
function draw() {
    for (let i=0; i<n; ++i){
        for (let j=0; j<n; ++j){
            context.fillStyle = a[j][i]; 
            context.fillRect(i*110, j*110, 100, 100);
        }
    }
};
function keyup(key) {

};
function mouseup() {
    var row = Math.floor(mouseY/110);
    var col = Math.floor(mouseX/110);
    if (row < n && col < n){
        console.log(row, col);
        if (a[row][col] == "gray"){
            if (turn == 0) a[row][col] = "blue";
            else a[row][col] = "red";
            
            let win = false;
            if (a[0][0] == a[1][1] && a[0][0] == a[2][2] && a[0][0] != "gray") win=true;
            if (a[0][2] == a[1][1] && a[0][2] == a[2][0] && a[0][2] != "gray") win=true;
            for (let i=0; i<n; ++i){
                if (a[i][0] == a[i][1] && a[i][0] == a[i][2] && a[i][0] != "gray") win=true;
                if (a[0][i] == a[1][i] && a[0][i] == a[2][i] && a[0][i] != "gray") win=true;
            }

            if (win){
                timer = 100;
                console.log("winner is", turn);
                
            }
            
            turn = 1-turn;
        }
    }
};
