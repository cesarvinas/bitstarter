var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  //var data = fs.readFileSync('index.html', {encoding: 'utf8'})
  var data = fs.readFileSync('index.html');
  //var buffer = new Buffer(data, 'utf-8');
  //response.send(buffer.toString('utf-8'));
  //response.send(data);
  response.send(data.toString());
    //response.send('hola');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
