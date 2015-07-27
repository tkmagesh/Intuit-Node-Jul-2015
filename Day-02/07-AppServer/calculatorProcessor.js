
var calculator = require("./calculator");
module.exports = function(req, res){
    if (req.url.pathname === "/calculator"){
        //var queryData = qs.parse(urlData.query);
        var result = calculator[req.query.operation](parseInt(req.query.number1,10), parseInt(req.query.number2,10));
        res.write(result.toString());
        res.end();
    }
}
