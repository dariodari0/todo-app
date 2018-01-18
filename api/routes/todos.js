var express =  require('express');
var router = express.Router();
var db = require("../models"); //make connect and take database variables
var helpers = require("../helpers/todos");

router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo)
    
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;
