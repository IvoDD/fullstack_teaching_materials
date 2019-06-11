var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + "/start.html");
});
app.get('/game.js', function(req, res){
    res.sendFile(__dirname + "/game.js");
});

//тук код който се изпълнява в началото на работата на сървъра
class Wall{
    constructor(){
        this.x = Math.random()*800;
        this.y = Math.random()*600;
        if (Math.random()<0.5){
            this.sx = 100;
            this.sy = 20;
        }else{
            this.sx = 20;
            this.sy = 100;
        }
    }
}
class Player{
    constructor(){
        this.x = Math.random()*800;
        this.y = Math.random()*600;
    }
}

var w = [], p = [], b = [];

var nw = Math.floor(Math.random()*5+5);
for (let i=0; i<nw; ++i){
    w[i] = new Wall();
}

io.on('connection', function(socket){
    //тук е кодът който се изпълнява всеки път се свърже нов потребител (създаде канал за комуникация на съобщения)
    let ind = p.length;
    p[ind] = new Player();
    b[ind] = [];
    console.log(b);
    socket.emit("init", ind, w, p, b);
    socket.broadcast.emit("newp", ind, p[ind], b[ind]);
    socket.on("move", function(p_, b_){
        p[ind] = p_;
        b[ind] = b_;
        socket.broadcast.emit("newp", ind, p[ind], b[ind]);
    });
});

http.listen(3000, function(){
    console.log("server started");
}); 