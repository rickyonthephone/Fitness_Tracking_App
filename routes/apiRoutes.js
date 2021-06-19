const db = require('../models');

module.exports = function (app) {
//Get all workout data
    app.get ('/api/workouts', (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });

    app.get ('/api/workouts/range', (req, res) => {
        db.Workout.find({})
            .sort({date: -1})
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });
//Create/post a workout    
    app.post ('/api/workouts', async (req, res) => {
        db.Workout.create({})
        .then(dataNew => 
            { res.json(dataNew)
        })
        .catch(err => {
            console.log('Error!', err); 
            res.json(err)
        })
    });
//Update a workout based on workout id
    app.put('/api/workouts/:id', (req, res) => {
        db.Workout.findOneAndUpdate(
            {_id: req.params.id},
            { $push: {exercises: req.body} })
            .then(dataUpdate => res.json(dataUpdate))
            .catch(err => {
                console.log('Error!', err)
                res.json(err)
            })
    });
};

