
var _actions = [];

function exec(req, res, actions){
    var first = actions[0],
        remaining = actions.slice(1),
        next = function(){
            exec(req, res, remaining);
        };
    if (first) first(req, res, next);

}
function app(req, res){
    exec(req, res, _actions);
}

app.use = function(action){
    _actions.push(action);
};

module.exports = app;
