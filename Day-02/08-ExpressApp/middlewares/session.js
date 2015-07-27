var sessionStore = {};
var Guid = require('guid');


module.exports = function(options){
    options = options || {};
    var cookieName = options.cookieName || 'sessionid';
    return function(req, res, next){
        //use case - 1
        if (!req.cookies[cookieName]){
            var sessionId = Guid.raw();
            req.session = sessionStore[sessionId] = {};
            res.cookie(cookieName, sessionId);
        } else {
            var sessionId = req.cookies[cookieName];
            if (!sessionStore[sessionId]){
                sessionStore[sessionId] = {};
            }
            req.session = sessionStore[sessionId];
        }
        next();

    };
};
