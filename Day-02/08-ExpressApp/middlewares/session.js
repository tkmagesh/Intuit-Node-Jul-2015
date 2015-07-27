var sessionStore = {};
var Guid = require('guid');


module.exports = function(options){
    options = options || {};
    var cookieName = options.cookieName || 'sessionid';
    var sessionTimeout = options.sessionTimeout || 60000;
    triggerCleanUp(sessionTimeout);
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
        req.session.lastAccessTime = Date.now();
        next();

    };
};

function triggerCleanUp(sessionTimeout){

    setInterval(function(){
        console.log("session cleaning");
        for(var sessionId in sessionStore){
            var session = sessionStore[sessionId];
            var delta = Date.now() - session.lastAccessTime;
            if (delta >= sessionTimeout){
                delete sessionStore[sessionId];
            }
        }
    },60000);
}

