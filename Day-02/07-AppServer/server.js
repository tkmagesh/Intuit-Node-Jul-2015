var http = require("http");
var dataParser = require("./dataParser");
var staticResourceServer = require("./staticResourceServer");
var calculatorProcessor = require("./calculatorProcessor");
var notFoundAction = require("./notFoundAction");



var server = http.createServer(function(req, res){
    dataParser(req, res);
    staticResourceServer(req, res);
    calculatorProcessor(req, res);
    notFoundAction(req, res);
});

server.listen(9090);
