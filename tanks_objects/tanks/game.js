function d(x1, y1, x2, y2){
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

class Tank{
    constructor(x, y, c){
        this.x = x;
        this.y = y;
        this.color = c;
        this.r = 30;
        this.speed = 5;
        this.reload_time = 10;
        this.angle = 0;
    }
    shoot(tx, ty){
        b.push(new Bullet(this.x, this.y, tx, ty));
    }
    moveGun(tx, ty){
        this.angle = Math.atan2(ty-this.y, tx-this.x);
    }
    check(){
        if (this.x > 800) this.x = 800;
        if (this.y > 600) this.y = 600;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
    }
    movePlayer(){
        this.moveGun(mouseX, mouseY);
        if (isKeyPressed[87]) this.y -= this.speed;
        if (isKeyPressed[83]) this.y += this.speed;
        if (isKeyPressed[65]) this.x -= this.speed;
        if (isKeyPressed[68]) this.x += this.speed;
        this.shoot(mouseX, mouseY);
        this.check();
    }
    moveEnemy(){
        this.moveGun(t[0].x, t[0].y);
        this.x += Math.random()*this.speed*2 - this.speed;
        this.y += Math.random()*this.speed*2 - this.speed;
        this.shoot(t[0].x, t[0].y);
        this.check();
    }
    draw(){
        context.lineWidth = 10;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x + 2*this.r*Math.cos(this.angle), this.y + 2*this.r*Math.sin(this.angle))
        context.stroke();
    }
}

class Bullet{
    constructor(initX, initY, targetX, targetY){
        this.x = initX;
        this.y = initY;
        let dist = d(initX, initY, targetX, targetY);
        this.dx = (targetX-initX)/dist*15;
        this.dy = (targetY-initY)/dist*15;
    }
    move(){
        this.x += this.dx;
        this.y += this.dy;
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, 2*Math.PI);
        context.fillStyle = "green";
        context.fill();
    }
}

var t = [new Tank(400, 300, "blue")];
for (let i=1; i<10; ++i){
    t[i] = new Tank(Math.random()*800, Math.random()*600, "red");
}
var b = [];

function update() {
    t[0].movePlayer();
    for (let i=1; i<10; ++i){
        t[i].moveEnemy();
    }
    for (let i=0; i<b.length; ++i){
        b[i].move();
    }
}
function draw() {
    for (let i=0; i<10; ++i){
        t[i].draw();
    }
    for (let i=0; i<b.length; ++i){
        b[i].draw();
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {

};
