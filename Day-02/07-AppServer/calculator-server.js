//http://localhost:9090/calculator?operation=add&number1=100&number2=200
var http = require("http");
var url = require("url");
var qs = require("querystring");
var calculator = require("./calculator");

var server = http.createServer(function(req, res){
    var urlData = url.parse(req.url);
    if (urlData.pathname !== "/calculator"){
        res.statusCode = 404;
        res.end();
        return;
    }
    var queryData = qs.parse(urlData.query);
    var result = calculator[queryData.operation](parseInt(queryData.number1,10), parseInt(queryData.number2,10));
    res.write(result.toString());
    res.end();
});
server.listen(9090);
