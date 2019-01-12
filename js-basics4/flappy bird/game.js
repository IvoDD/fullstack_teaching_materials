var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

let x = 10, y=100;
function update(){
    //изтриваме
    context.fillStyle = "white";
    context.fillRect(0, 0, 800, 600);
    //x += 4;
    y += 5;
    //рисуваме правоъгълник
    context.fillStyle = "blue";
    context.fillRect(x, y, 50, 50);
}

setInterval(update, 20);