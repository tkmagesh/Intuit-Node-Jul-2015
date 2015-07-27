var express = require('express');
var router = express.Router();

var tasks = [
    {id :1, name : "Watch Bhahubali", isCompleted : false},
    {id :2, name : "Fill appraisal report", isCompleted : false},
    {id :3, name : "Read design patterns", isCompleted : false}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tasks/list', {tasks : tasks});
});

module.exports = router;
