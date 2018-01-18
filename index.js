var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    ip = process.env.IP,
    bodyParser = require('body-parser');
    
    
var toDoRoutes = require('./routes/todos');


app.use(bodyParser.json()); // to handle that data coming in Express doesnt give access to it automatically
app.use(bodyParser.urlencoded({extended: true}));// this two lines: allow us to access the req.body that commes in a POST or a PUT req
    
app.get('/', function(req,res){
        res.send("hello from the root route");
});
 
app.use('/api/todos', toDoRoutes); 
 
app.listen(port, function(){
    console.log("APP IS RUNNNING! on PORT: "+port+", and IP is: " +ip);
})
