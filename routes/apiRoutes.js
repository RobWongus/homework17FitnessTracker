const router = require("express").Router();
const db = require("../models/workout");


    router.get("/api/workout", function(request, response) {
      
        db.find({})
       .then(function(db) {
           response.send(db);
       })
    .catch(function(error) {
        response.status(400).json(error);
         });
    });

    router.post("/api/workout", function({body}, response) {
        console.log(body);
        db.create(body)
            .then(function(db) {
                response.json(workout);
            })
        .catch(function(error){
            response.json(error);
        })
    });


    router.put("/api/workout/:id", function({body,params}, response){
        db.findByIdAndUpdate(params.id,
           {
               $push: {
                   exercises: body
               }
           },
           function(error, data) {
               if (error) {
                   response.send(error);
               } else {
                   response.send(data);
               }
           }
        );
    });

    router.get("/api/workout/range", function(request, response) {
        db.find({}).limit(7)
        .then(function(db) {
            response.json(db);
        })
        .catch(function(error) {
            response.status(400).json(error);
        });
    });

module.exports = router;