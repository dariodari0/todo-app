var express =  require('express');
var router = express.Router();
var db = require("../models"); //make connet and take database variables

router.get('/', function(req,res){
    db.toDo.find()
    .then(function(todos){
     res.json(todos);
    })
    .catch(function(err){
      res.send(err);
    })
});

router.post('/', function(req,res){
    res.send("this is the post route");
});

module.exports = router;
