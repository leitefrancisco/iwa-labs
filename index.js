const   http = require ("http"),
        logger = require("morgan"),
        express = require("express"),
        mongoose = require("mongoose");

//let to evoque express      
let app = express();
let port = 8000;


//middleware => happens befores gets and posts
app.use(express.json());
//everything goes throught the routes
app.use(require('./routes'));
//setting the logger
app.use(logger("tiny"));

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

//make sure the server listen to an specific port
app.listen(port, function(err){
    //once it is connected it says it is litening to the port
    console.log("Listening on port: "+ port);
});



