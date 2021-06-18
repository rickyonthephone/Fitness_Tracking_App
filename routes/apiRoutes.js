const Workout = require('../models/Workout.js')

module.exports = function (app) {
//Get all workout data
    app.get ('/api/workouts', (req, res) => {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });
//Create/post a workout    
    app.post ('/api/workouts', (req, res) => {
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            console.log('Error!', err); 
            res.json(err)
        })
    });
//Update a workout based on workout id
    app.put('/api/workouts/:id', ({body, params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: {'exercises': body }},
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log('Error!', err)
                res.json(err)
            })
    });
}

