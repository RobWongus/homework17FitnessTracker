const express = require("express");
//let db = require("../models/WorkoutPlan.js");
const db = require("../models");
const logger = require('morgan');
const mongoose = require("mongoose");


module.exports = function(app) {

    app.get("/api/workouts", function(request, response) {
       console.log(db);
        db.Workout.find()
       .then(function(db) {
           response.json(db);
       })
    .catch(function(error) {
        response.json(error);
         })
    });

    app.post("/api/workouts", function({body}, response) {
        db.Workout.create({
            
        })

    })
}