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

//send the html
router.get('/new', function(req, res, next){
    res.render('tasks/new');
});

//access the data and save it
router.post('/new', function(req, res, next){
    var newTaskId = tasks.reduce(function(result, task){
        return result > task.id ? result : task.id
    },0) + 1;
    var newTask = {
        id : newTaskId,
        name : req.body.newTask,
        isCompleted : false
    };
    tasks.push(newTask);
    res.redirect('/tasks');
});

router.get('/toggle/:id', function(req, res, next){
    var taskId = parseInt(req.params.id,10);
    var task = tasks.filter(function(task){ return task.id === taskId })[0];
    task.isCompleted = !task.isCompleted;
    res.redirect('/tasks');
})

module.exports = router;
