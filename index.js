var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
    
app.get('/', function(req,res){
        res.send({message: "Hi from js object !! via send method"});
        //we can use also .json({message: "Hi from js object !! via json method"})
});

app.get('/happy', function(req,res){
    res.send(":)");
});

    
app.listen(port, function(){
    console.log("APP IS RUNNNING! on PORT: "+port);
})
