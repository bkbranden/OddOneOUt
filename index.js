var express = require("express");
var app = express();
var http = require("http").Server(app);


app.use("/public", express.static(__dirname + "/public"));
app.use("/img", express.static(__dirname + "/img"));

app.get('/', function(req,res){
  res.sendFile(__dirname + "/index.html");
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
