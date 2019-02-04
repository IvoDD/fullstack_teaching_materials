// Creating variables
var myX = 0, myY = 0,updates=0;
var zX = Math.random()*800;
var zY = Math.random()*600;
var z2X = Math.random()*800;
var z2Y = Math.random()*600;
var kX = -10;
var kY = 0;

var speed = 2;

var timerUp = 0;

function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
    if (zX < myX) zX += speed;
    if (zX > myX) zX -= speed;
    if (zY < myY) zY += speed;
    if (zY > myY) zY -= speed;
    //zX = zX+(myX-zX)/30;
    //zY = zY+(myY-zY)/30;
    z2X = z2X+(myX-z2X)/50;
    z2Y = z2Y+(myY-z2Y)/50;
    myX = myX+(mouseX-myX);
    myY = myY+(mouseY-myY);
    if(areColliding(myX,myY,80,110, z2X,z2Y,80,110)){
        console.log("Game Over");
    }
    if(areColliding(myX,myY,80,110, zX,zY,80,110)){
        console.log("Game Over");
    }
    if(areColliding(kX,kY,10,100, z2X,z2Y,80,110)){
        z2X = Math.random()*800;
        z2Y = -500;
    }
    if(areColliding(kX,kY,10,100, zX,zY,80,110)){
        zX = Math.random()*800;
        zY = -500;
    }
    if (timerUp > 0){
        --timerUp;
        kX = myX + 60;
        kY = myY - 50;
    }else{
        kY = -1000;
    }
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    context.fillRect(kX, kY, 10, 100);
    drawImage(zombieHello,z2X,z2Y,80,110);
    drawImage(zombieWalk,zX,zY,80,110);
    drawImage(heroHello,myX,myY,80,110);
};
function keyup(key) {
    if (key == 87){
        timerUp = 20;
    }
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};