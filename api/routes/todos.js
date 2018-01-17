var express =  require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send("helllo from todos routes");
})

module.exports = router;
