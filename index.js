const   http = require ("http"),
        logger = require("morgan"),
        express = require("express"),
        bodyParser = require("express");

//let to evoque express      
let app = express();

let port = 8000;

//force app to use body parser with json enabled to serve json back
app.use(bodyParser.json());

//setting the logger
app.use(logger("tiny"));

app.get("/:foo/:bar",(req,res)=>{
    res.json({"message": "Helo World!",
                "data":[
                    req.params.foo,
                    req.params.bar
                ]});
})



//make sure the server listen to an specific port
app.listen(port, function(err){
    //once it is connected it says it is litening to the port
    console.log("Listening on port: "+ port);
});
