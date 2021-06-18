const Workout = require('../models/Workout.js');

const updateExercise = async (req, res) => {
    const {id} = req.params
    const {newExercise} = req.body
    try {
    const updated = await Workout.findByIdAndUpdate(
        id,
        {$push: {'exercises': newExercise }},
        {safe: true, upsert: true}
    )
    console.log(updated)
        res.json(updated);
} catch (err) { 
    console.error(err);
    res.status(404);
    throw new Error('Workout not found!')
}
}

const addExercise = async (req, res) => {
    const {id} = req.params
    const {newExercise} = req.body
    try {
    const updated = await Workout.findByIdAndUpdate(
        id,
        {$push: {'exercises': newExercise }},
        {safe: true, upsert: true}
    )
    console.log(updated)
        res.json(updated);
} catch (err) { 
    console.error(err);
    res.status(404);
    throw new Error('Workout not found!')
}
}

module.exports = {updateExercise, addExercise}
// {
//     day: new Date(new Date().setDate(new Date().getDate() - 9)),
//     exercises: [
//       {
//         type: 'resistance',
//         name: 'Bicep Curl',
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4,
//       },
//     ],
//   },