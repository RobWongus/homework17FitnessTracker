const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let workout = new Schema (

{
    day: {
        type: Date,
        default: () => new Date()
    },
    excercises: [
        {
            type: {
                type: String,
                trime: true,
                require: "Enter type of exercise."
            },
            name: {
                type: String, 
                trim: true,
                require: "Enter excercise name."
            },
            duration: {
                type: Number,
                trim: true,
                require: "Enter the duration of excercise."
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            }
        }
    ]
},

{
    toJSON: {
        virtuals: true
    }
}

);
const Workout = mongoose.model("Workout", workout);

module.exports = Workout

