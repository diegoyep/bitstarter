var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var file = fs.readFileSync("index.html");
    
    response.send(file.toString())

});

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
