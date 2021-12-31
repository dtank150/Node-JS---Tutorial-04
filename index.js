var http = require('http')
var server = http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("<h1>Hello</h1>");
    res.end();
}).listen(2000);
console.log("Server Started at 2000");