var http = require("http");
var dataParser = require("./dataParser");
var staticResourceServer = require("./staticResourceServer");
var calculatorProcessor = require("./calculatorProcessor");
var notFoundAction = require("./notFoundAction");
var app = require("./app");

/*var router = require("./router");


router.get("/calculator", calculatorProcessor);

router.post("/greet", function(req, res, next){
})*/

app.use(dataParser);
app.use(staticResourceServer);
app.use(calculatorProcessor);
app.use(notFoundAction);

var server = http.createServer(app);

server.listen(9090);
