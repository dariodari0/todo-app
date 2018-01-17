var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    
var toDoRoutes = require('./routes/todos');
    
app.get('/', function(req,res){
        res.send("hello from the root route");
});
 
app.use('/api/todos', toDoRoutes); // add and use route from routes directory
 
app.listen(port, function(){
    console.log("APP IS RUNNNING! on PORT: "+port);
})
