//http://localhost:9090/calculator?operation=add&number1=100&number2=200
var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
var path = require("path");
var calculator = require("./calculator");

var staticExtns = [".html", ".css", ".js", ".jpg", ".png", ".ico", ".json"];

function isStatic(resource){
    return staticExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
    if (isStatic(req.url.pathname)){
        var resource = path.join(__dirname, req.url.pathname);
        if (!fs.existsSync(resource)){
            res.statusCode = 404;
            res.end();
            return;
        }
        //generalize the following code so that it works for more than one content type. make sure it is configurable
        //res.setHeader("Content-Type", "text/html");
        var stream = fs.createReadStream(resource);
        stream.pipe(res);
    } else if (req.url.pathname === "/calculator"){
        //var queryData = qs.parse(urlData.query);
        var result = calculator[req.query.operation](parseInt(req.query.number1,10), parseInt(req.query.number2,10));
        res.write(result.toString());
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(9090);
