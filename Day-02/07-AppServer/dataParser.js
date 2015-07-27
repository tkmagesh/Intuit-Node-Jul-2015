var url = require("url");
var qs = require("querystring");

module.exports = function(req, res, next){
    req.url = url.parse(req.url);
    req.query = qs.parse(req.url.query);
    req.body = {};
    req.field = function(attrName){
        return req.body[attrName] || req.query[attrName];
    };

    if (req.method === 'POST'){
        var data = '';
        req.on('data', function(chunk){
            data += chunk;
        });
        req.on('end', function(){
            req.body = qs.parse(data);
            next();
        })
    } else {
        next();
    }
}
