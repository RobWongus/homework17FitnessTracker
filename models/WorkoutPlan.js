const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let WorkoutPlan = new Schema (

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
                required: "Enter Excercise Type."
            },
            name: {
                type: String, 
                trim: true,
                required: "Enter an excercise name"
            },
            duration: {
                type: Number,
                required: "Enter the durations of excercise"
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
const Workout = mongoose.model("Workout", WorkoutPlan);

module.exports = Workout

