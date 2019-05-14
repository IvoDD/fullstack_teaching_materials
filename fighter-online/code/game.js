var socket = io();

var x = [], y = [], ind;

socket.on("init", function(ind_, x_, y_){
    x = x_;
    y = y_;
    ind = ind_;
});

socket.on("new_player", function(ind_, x_, y_){
    x[ind_] = x_;
    y[ind_] = y_;
})

var dy = 0, jumps = 1;

function update() {
    dy += 0.1;
    y[ind] += dy;
    if (y[ind] > 500){
        y[ind] = 500;
        dy = 0;
        jumps = 2;
    }
    if (isKeyPressed[65]) x[ind]-=5;
    if (isKeyPressed[68]) x[ind]+=5;
    socket.emit("move", x[ind], y[ind]);
}
function draw() {
    for (let i=0; i<x.length; ++i){
        context.fillRect(x[i], y[i], 50, 100);
    }
};
function keyup(key) {
    if (key==32 && jumps > 0){
        dy = -7;
        jumps--;
    }
};
function mouseup() {
};
