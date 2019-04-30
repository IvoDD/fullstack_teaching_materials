var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + "/chat.html");
});
app.get('/game.js', function(req, res){
    res.sendFile(__dirname + "/game.js");
});

//тук код който се изпълнява в началото на работата на сървъра
console.log("hello");
var history = [];

io.on('connection', function(socket){
    //тук е кодът който се изпълнява всеки път се свърже нов потребител (създаде канал за комуникация на съобщения)
    console.log("connection");
    socket.emit("chat history", history);
    socket.emit("asdf", "Hello from server socket");
    socket.on("msg_to_server", function(msg){
        history.push(msg);
        io.emit("msg_to_everyone", msg);
    });
});

http.listen(3000, function(){
    console.log("server started");
});