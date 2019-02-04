// Creating variables
var myX = 0, myY = 0;

var t = 0; // време (във тикове) минало от началото на играта

var pX = 0, pY = 550;

var isShot = false;
var bX = 0, bY = 550;

var isAlive = [];
for (let i=0; i<6*20; ++i){
    isAlive[i] = true;
}

function update() {
    if (t%1000 < 250){
        myY += 0.2;
    }
    if (t%1000 < 500 && t%1000 >= 250){
        myX += 0.2;
    }
    if (t%1000 < 750 && t%1000 >= 500){
        myY += 0.2;
    }
    if (t%1000 >= 750){
        myX -= 0.2;
    }
    t++;
    pX = mouseX;
    if (!isShot){
        bX = pX;
        bY = pY;
    }else{
        bY -= 5;
        if (bY < -20){
            isShot = false;
        }
    }
    
    for(let j=0; j<6; ++j){
        for (let i=0; i<20; ++i){
            if (areColliding(bX, bY, 10, 20, myX + i*40, myY + j*40, 30, 30)){
                isAlive[j*20 + i] = false;
            }
        }
    }
}
function draw() {
    drawImage(backStars, 0, 0, 800, 600);
    for(let j=0; j<6; ++j){
        for (let i=0; i<20; ++i){
            if (isAlive[j*20 + i]){
                drawImage(enemyBlack1, myX + i*40, myY + j*40, 30, 30);
            }
        }
    }
    context.fillRect(bX, bY, 10, 20);
    drawImage(playerShip3_blue, pX, pY, 50, 50);
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    isShot = true;
};
