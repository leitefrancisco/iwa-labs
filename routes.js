const express = require("express"),
                router = express.Router();


app.get("/:foo/:bar",(req,res)=>{
    res.json({"message": "Helo World!",
                "data":[
                    req.params.foo,
                    req.params.bar
                ]});
});

modules.exports = routes;