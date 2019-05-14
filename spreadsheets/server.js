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
var n=20, m=10;
var table = [];
for (let i=0; i<n; ++i){
    table[i] = [];
    for (let j=0; j<m; ++j){
        table[i][j] = "";
    }    
}

io.on('connection', function(socket){
    //тук е кодът който се изпълнява всеки път се свърже нов потребител (създаде канал за комуникация на съобщения)
    socket.emit("init_table", table);
    socket.on("change_field", function(i, j, value){
        table[i][j] = value;
        io.emit("change", i, j, value);
    });
});

http.listen(3000, function(){
    console.log("server started");
}); 