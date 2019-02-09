var myX = 360, myY = 250;

var pv = 5, zv = 2, zr = 80, bv = 10;

var zX = [], zY = [], nz = 0;
var t=0;

var bX = [], bY = [], dx = [], dy = [], nb = 0;

function update(){
    if (isKeyPressed[87]) myY -= pv;
    if (isKeyPressed[83]) myY += pv;
    if (isKeyPressed[65]) myX -= pv;
    if (isKeyPressed[68]) myX += pv;

    t++;
    if (t%100 == 0){
        zX[nz] = Math.random()*800
        zY[nz] = Math.random()*600;
        ++nz;
    }
    for (let i=0; i<nz; ++i){
        if (zX[i] > myX) zX[i] -= zv;
        if (zX[i] < myX) zX[i] += zv;
        if (zY[i] > myY) zY[i] -= zv;
        if (zY[i] < myY) zY[i] += zv;
        /*for (let j=i+1; j<nz; ++j){
            if (areColliding(zX[i], zY[i], 80, 100, zX[j], zY[j], 80, 100)){
                if (zX[i] > zX[j]){
                    zX[i] += zr/(zX[i]-zX[j] + 5);
                    zX[j] -= zr/(zX[i]-zX[j] + 5);
                }
                if (zX[i] < zX[j]){
                    zX[i] -= zr/(zX[j]-zX[i] + 5);
                    zX[j] += zr/(zX[j]-zX[i] + 5);
                }
                if (zY[i] > zY[j]){
                    zY[i] += zr/(zY[i]-zY[j] + 5);
                    zY[j] -= zr/(zY[i]-zY[j] + 5);
                }
                if (zY[i] < zY[j]){
                    zY[i] -= zr/(zY[j]-zY[i] + 5);
                    zY[j] += zr/(zY[j]-zY[i] + 5);
                }
            }
        }*/
        for (let j=0; j<nb; ++j){
            if (areColliding(zX[i], zY[i], 80, 100, bX[j], bY[j], 80, 100)){
                let r = Math.random();
                if (r < 0.25){
                    zX[i] = Math.random()*800;
                    zY[i] = -250;
                }else if (r < 0.5){
                    zX[i] = Math.random()*800;
                    zY[i] = 850;
                }
                else if (r < 0.75){
                    zX[i] = -250;
                    zY[i] = Math.random()*600;
                }
                else{
                    zX[i] = 1050;
                    zY[i] = Math.random()*600;
                }
            }
        }
    }
    for (let i=0; i<nb; ++i){
        bX[i] += dx[i];
        bY[i] += dy[i];
        dy[i] += 0.3;
    }
    if (isKeyPressed[32]){
        bX[nb] = myX;
        bY[nb] = myY;
        let dist = Math.sqrt( (mouseX - myX)*(mouseX - myX) + (mouseY - myY)*(mouseY - myY) ) 
        dx[nb] = bv/dist*(mouseX-myX)
        dy[nb] = bv/dist*(mouseY-myY)
        ++nb;
    }
}
function draw() {
    drawImage(heroHello, myX, myY, 80, 100);
    for (let i = 0; i<nz; ++i){
        drawImage(zombie, zX[i], zY[i], 80, 100);
    }
    for (let i = 0; i<nb; ++i){
        context.fillRect(bX[i], bY[i], 10, 10);
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    if (key == 32){
        
    }
    console.log("Pressed", key);
};
function mouseup() {
    console.log("mouse pressed");
};