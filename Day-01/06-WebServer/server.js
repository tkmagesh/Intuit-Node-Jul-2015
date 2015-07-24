var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res){
    var resource = path.join(__dirname, req.url);
    console.log(resource);
    if (!fs.existsSync(resource)){
        res.statusCode = 404;
        res.end();
        return;
    }
    res.setHeader("Content-Type", "text/html");
    var stream = fs.createReadStream(resource);
    stream.pipe(res);
});
server.listen(9090);
