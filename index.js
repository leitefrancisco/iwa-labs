const { route } = require("express/lib/application");
const   http = require ("http"),
        logger = require("morgan"),
        express = require("express"),
        bodyParser = require("express"),
        mongoose = require("mongoose");

//let to evoque express      
let app = express();

let port = 8000;


//middleware => happens befores gets and posts
//everything goes throught the routes
app.use(require('./routes'));
//force app to use body parser with json enabled to serve json back
app.use(bodyParser.json());
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
