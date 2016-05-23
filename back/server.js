var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");

var Item = require('./models/item.model');

var app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/items');


//ROUTES
app.get('/api/items', function(req, res){
    Item.find(function(err, docs){
        res.send(docs);
    });
})
 

app.get('/api/items/:id', function(req, res){
    Item.findById(req.params.id, function(err, doc){
        res.send(doc);
    });
})

app.post('/api/items/', function(req, res){
    var newItem = new Item(req.body);
    newItem.save(function(err, doc){
        res.send(doc);
    });
})
  
app.post('/api/items/:id', function(req, res){
    Item.update({_id: req.params.id}, req.body, function(err){
        res.send({_id: req.params.id});
    })
})  

app.delete('/api/items/:id', function(req, res){
   Item.remove({_id: req.params.id}, function(err){
      res.send({_id: req.params.id});
   })
}) 

 var port = 5678;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });