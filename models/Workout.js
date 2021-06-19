const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const workOutSchema = new Schema ({
        day: {type: Date, default: Date.now, required: true},
        exercises: [
        {
            type: {type: String, required: true},
            name: {type: String, required: true},
            duration: {type: Number, required: false},
            weight: {type: Number, required: false},
            reps: {type: Number, required: false},
            sets: {type: Number, required: false},
            distance: {type: Number, required: false},
        }
    ]
    }, 
    {
    timestamps: true
    },
);


  
  const Workout = mongoose.model("Workout", workOutSchema);
  
  module.exports = Workout;
