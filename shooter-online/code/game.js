var socket = io();

var w = [], p = [], b = [], ind = -1;

socket.on("init", function(ind_, w_, p_, b_){
    ind = ind_;
    w = w_;
    p = p_;
    b = b_;
});

socket.on("newp", function(ind_, p_, b_){
    p[ind_] = p_;
    b[ind_] = b_;
});

var speed = 4;

function update() {
    if (ind == -1) return;
    let oldx = p[ind].x;//p[ind] - undefined
    let oldy = p[ind].y;
    if (isKeyPressed[87]) p[ind].y -= speed;
    if (isKeyPressed[83]) p[ind].y += speed;
    if (isKeyPressed[65]) p[ind].x -= speed;
    if (isKeyPressed[68]) p[ind].x += speed;
    if (p[ind].x > 770) p[ind].x = 770;
    if (p[ind].x < 0) p[ind].x = 0;
    if (p[ind].y > 570) p[ind].y = 570;
    if (p[ind].y < 0) p[ind].y = 0;
    for (let i=0; i<w.length; ++i){
        if (areColliding(p[ind].x, p[ind].y, 30, 30, w[i].x, w[i].y, w[i].sx, w[i].sy)){
            if (oldx + 30 < w[i].x) p[ind].x = w[i].x-31;
            else if (oldx > w[i].x + w[i].sx) p[ind].x = w[i].x + w[i].sx + 1;
            else if (oldy + 30 < w[i].y) p[ind].y = w[i].y-31;
            else if (oldy > w[i].y + w[i].sy) p[ind].y = w[i].y + w[i].sy + 1;
        }
    }
    for (let i=0; i<b[ind].length; ++i){
        b[ind][i].x += b[ind][i].dx;
        b[ind][i].y += b[ind][i].dy;
        let toRem = false;
        for (let j=0; j<w.length; ++j){
            if (areColliding(b[ind][i].x, b[ind][i].y, 10, 10, w[j].x, w[j].y, w[j].sx, w[j].sy)){
                toRem = true;
                break;
            }
        }
        for (let j=0; j<p.length; ++j){
            if (j!=ind && areColliding(b[ind][i].x, b[ind][i].y, 10, 10, p[j].x, p[j].y, 30, 30)){
                toRem = true;
                console.log("ucelih ", j);
                break;
            }
        }
        if (b[ind][i].x < -10) toRem = true;
        if (b[ind][i].x > 800) toRem = true;
        if (b[ind][i].y < -10) toRem = true;
        if (b[ind][i].y > 600) toRem = true;
        if (toRem){
            b[ind][i] = b[ind][b[ind].length-1];
            b[ind].pop();
            --i;
        }
    }
    socket.emit("move", p[ind], b[ind]);
}
function draw() {
    context.fillStyle = "black";
    for (let i=0; i<w.length; ++i){
        context.fillRect(w[i].x, w[i].y, w[i].sx, w[i].sy);
    }
    for (let i=0; i<p.length; ++i){
        if (i == ind) context.fillStyle = "red";
        else context.fillStyle = "blue";
        context.fillRect(p[i].x, p[i].y, 30, 30);
        for (let j=0; j<b[i].length; ++j){
            context.fillRect(b[i][j].x, b[i][j].y, 5, 5);
        }
    }
};
function keyup(key) {
    
};
function mouseup() {
    let d = Math.sqrt((p[ind].x-mouseX)*(p[ind].x-mouseX) + (p[ind].y-mouseY)*(p[ind].y-mouseY));
    let dx = (mouseX-p[ind].x)/d*10;
    let dy = (mouseY-p[ind].y)/d*10;
    b[ind].push({x: p[ind].x, y: p[ind].y, dx: dx, dy: dy});
};
