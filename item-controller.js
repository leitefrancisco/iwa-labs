exports.helloWorld = function(req, res){
        res.json({
            "message": "Helo World!",
            "data":[
                req.params.foo,
                req.params.bar
            ]});
}