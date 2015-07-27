
var fs = require("fs");
var path = require("path");

var staticExtns = [".html", ".css", ".js", ".jpg", ".png", ".ico", ".json"];

function isStatic(resource){
    return staticExtns.indexOf(path.extname(resource)) !== -1;
}
module.exports = function(req, res){
    if (isStatic(req.url.pathname)){
        var resource = path.join(__dirname, req.url.pathname);
        if (!fs.existsSync(resource)){
            res.statusCode = 404;
            res.end();
            return;
        }
        //generalize the following code so that it works for more than one content type. make sure it is configurable
        //res.setHeader("Content-Type", "text/html");

        //fs.createReadStream(resource).pipe(res);

        var stream = fs.createReadStream(resource);
        stream.on('data', function(chunk){
            res.write(chunk);
        })
        stream.on('end', function(){
            res.end();
        });

    }
}
