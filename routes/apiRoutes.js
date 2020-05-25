const express = require("express");
//let db = require("../models/workout.js");
const db = require("../models");
const logger = require('morgan');
const mongoose = require("mongoose");


module.exports = function(app) {

    app.get("/api/workout", function(request, response) {
       console.log(db);
        db.Workout.find()
       .then(function(db) {
           response.json(db);
       })
    .catch(function(error) {
        response.json(error);
         });
    });

    app.post("/api/workout", function({body}, response) {
        console.log(body);
        db.Workout.create(body)
            .then(function(workout) {
                response.json(workout);
            })
        .catch(function(error){
            response.status(400).json(error);
        })
    });
}

app.put("/api/workout", function(request, response){
    
})
module.exports = router;