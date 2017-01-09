var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to the database
mongoose.Promise = global.Promise; mongoose.connect('mongodb://test:test@ds054619.mlab.com:54619/todolisteugene');

// create a schema - this is like a blueprint
var todoSchema = new mongoose.Schema({
  item: String
});

var Todo = mongoose.model('Todo', todoSchema);

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

app.get('/todo', function(req, res){
  // get data from mongogb and pass it to the view
  Todo.find({}, function(err, data){
    if (err) throw err;
    res.render('todo', {todos: data});
  });
});

app.post('/todo', urlencodedParser, function(req, res){
  // get data from view and add it to mongodb
  var newTodo = Todo(req.body).save(function(err, data){
    if (err) throw err;
    res.json(data);
  });
});

app.post('/edit/:_id', urlencodedParser, function(req, res){
  // get data from view and add it to mongodb
  Todo.update({_id: req.params._id}, {item: req.body.updateItem}, function(err, data){
      if (err) {res.json({message: 'error', err})}

      res.redirect('/todo');
    });
});

app.delete('/todo/:item', function(req, res){
  // delete the requested item from mongogb
  Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
    if (err) {
      res.json(err)
    }
    res.json(data)
  })
});

app.get('/edit', function(req, res){
  // get data from mongogb and pass it to the view
  Todo.find({}, function(err, data){
    if (err) throw err;
    res.render('edit', {todos: data});
  });
});

app.post('/edit/:item', function(req, res){
    Todo.findById(req.params.item, function(err, data) {
        if (err) {
            res.send(err);
        }
          console.log(data);
        res.json(data);
    });


});


};
