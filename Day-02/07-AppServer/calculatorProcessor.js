
var calculator = require("./calculator");
module.exports = function(req, res, next){
    if (req.url.pathname === "/calculator"){
        //var queryData = qs.parse(urlData.query);
        var result = calculator[req.field("operation")](parseInt(req.field("number1"),10), parseInt(req.field("number2"),10));
        res.write(result.toString());
        res.end();
    } else {
        next();
    }
}
