const express = require("express").Router();

let Route = require("../models/WorkoutPlan.js");

module.exports = function(app) {

    app.get("/api/workouts", function(request, response) {
       console.log(Route);
        Route.find()
       .then(function(data) {
           response.json(data);
       })
    .catch(function(error) {
        response.json(error);
         })
    });

    app.post("/api/workouts", function(request, response) {
        
    }

