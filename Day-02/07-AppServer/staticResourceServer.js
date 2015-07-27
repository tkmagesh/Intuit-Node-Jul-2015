
var fs = require("fs");
var path = require("path");

var staticExtns = [".html", ".css", ".js", ".jpg", ".png", ".ico", ".json"];

function isStatic(resource){
    return staticExtns.indexOf(path.extname(resource)) !== -1;
}
module.exports = function(req, res, next){
    if (isStatic(req.url.pathname)){
        var resource = path.join(__dirname, req.url.pathname);
        if (!fs.existsSync(resource)){
            res.statusCode = 404;
            res.end();
            return;
        }
        fs.createReadStream(resource, {encoding : 'utf8'}).pipe(res);

    } else {
        next();
    }
}
