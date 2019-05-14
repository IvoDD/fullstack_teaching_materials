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
var x = [];
var y = [];

io.on('connection', function(socket){
    //тук е кодът който се изпълнява всеки път се свърже нов потребител (създаде канал за комуникация на съобщения)
    let ind = y.length;
    x[ind] = Math.random()*750;
    y[ind] = Math.random()*500;
    socket.emit("init", ind, x, y);
    io.emit("new_player", ind, x[ind], y[ind]);
    socket.on("move", function(x_, y_){
        x[ind] = x_;
        y[ind] = y_;
        io.emit("new_player", ind, x_, y_);
    })
});

http.listen(3000, function(){
    console.log("server started");
}); 