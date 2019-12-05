var Todo = require('./models/todo');
var ToKeyword = require('./models/keyword');

function getTodos(req,res) {
    

    // Todo.find(function (err, todos) {
        if (req !== null || req !== undefined) {
            console.log("req", req.body.text);
            const k =req.body.text;
            Todo.find({"text": {$regex: k} },function(err, tos){
                console.log("result", tos);
                
                res.json(tos);
            });        
        }else{
            res.json(todos); // return all todos in JSON format
        }
        
};


module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.post('/api/todoss', function (req, res) {

        // use mongoose to get all todos in the database
        getTodos(req,res);
    });
   

    // create todo and send back all todos after creation
    app.post('/api/create', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);
        });

    });

    // delete a todo
    app.delete('/api/todos/:todo_id', function (req, res) {
        Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

        });
    });
   
    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
