const mongoose = require('mongoose');

const exerciseSchema = mongoose.Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    duration: {type: Number, required: false},
    weight: {type: Number, required: false},
    reps: {type: Number, required: false},
    sets: {type: Number, required: false}
}, {
    timestamps: true
})

const workOutSchema = mongoose.Schema ({
    day: {type: Date, required: true},
    exercises: [exerciseSchema]
},
{
    timestamps: true
})

const Workout = mongoose.model('Workout', workOutSchema);

module.exports = Workout;
