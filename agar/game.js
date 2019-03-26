class Agar{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 41;
        this.sl = 2;
    }
    moveTowards(tx, ty){
        if (this.x > tx) this.x -= this.sl;
        if (this.x < tx) this.x += this.sl;
        if (this.y > ty) this.y -= this.sl;
        if (this.y < ty) this.y += this.sl;
        this.check();
    }
    moveAway(tx, ty){
        if (this.x > tx) this.x += this.sl;
        if (this.x < tx) this.x -= this.sl;
        if (this.y > ty) this.y += this.sl;
        if (this.y < ty) this.y -= this.sl;
        this.check();
    }
    check(){
        if (this.x > 800) this.x = 800;
        if (this.x < 0) this.x = 0;
        if (this.y > 600) this.y = 600;
        if (this.y < 0) this.y = 0;
    }
}

function circle(cx, cy, r, color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(cx, cy, r, 0, 2*Math.PI);
    context.fill();
}

function d(x1, y1, x2, y2){
    return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
}

function areCircleColliding(o1, o2){
    if (d(o1.x, o1.y, o2.x, o2.y) <= Math.max(o1.r, o2.r)){
        return true;
    }
    return false;
}

var agar = [new Agar(400, 300)];
for (let i=1; i<5; ++i){
    agar[i] = new Agar(Math.random()*800, Math.random()*600);
}

var fx=[], fy=[];
var n = 30;
for(let i=0;i<n;i++){
    fx[i]=Math.random()*800;
    fy[i]=Math.random()*600;  
}
function update() {
    for (let i=0; i<5; ++i){
        for (let j=i+1; j<5; ++j){
            if(areCircleColliding(agar[i], agar[j])){
                if(agar[i].r>agar[j].r){
                    agar[i].r+=agar[j].r/3;
                    agar[j].r=0;
                }
                if(agar[i].r<agar[j].r){
                    agar[j].r+=agar[i].r/3;
                    agar[i].r=0;
                }
            }
        }
    }
    for (let i=1; i<5; ++i){
        if(agar[0].r>agar[i].r){
            agar[i].moveAway(agar[0].x, agar[0].y);
        }else{
            agar[i].moveTowards(agar[0].x, agar[0].y);
        }
    }
    for (let j=0; j<5; ++j){
        for(let i=0;i<n;i++){
            if(areCircleColliding(agar[j], {x: fx[i], y: fy[i], r: 5})){
                fx[i]=Math.random()*800;
                fy[i]=Math.random()*600;
                agar[j].r+=0.5;
                agar[j].sl=agar[j].sl/1.01;
            }
        }
    }
    agar[0].moveTowards(mouseX, mouseY);
}
function draw() {
    for(let i=0;i<n;i++){
        circle(fx[i], fy[i], 5, "rgba(0, 255, 0, 1)");    
    }
    circle(agar[0].x, agar[0].y, agar[0].r, "rgba(0, 0, 255, 1)");
    for (let i=1; i<5; ++i){
        circle(agar[i].x, agar[i].y, agar[i].r, "rgba(255, 0, 0, 1)");
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);

};