const db = require('../../models');
const router = require('express').Router();


//Get workout data
    router.get ('/', (req, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });

    router.get('/', (req, res) => {
        db.Workout.aggregate([{
            $addFields: { totalDuration: { $sum: '$exercises.duration'}}}
        ])
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
    });

    router.get('/range', (req, res) => {
        db.Workout.aggregate([{
            $addFields: { totalDuration: { $sum: '$exercises.duration'}}}
        ])
        .sort({date: -1})
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });

    router.get ('/range', (req, res) => {
        db.Workout.find({})
            .sort({date: -1})
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });

//Get workout by ID just for kicks

router.get ('/:id', (req, res) => {
    db.Workout.find({})
        .then(data => {
            res.json(data)
        })
        .catch (err => {
            res.json(err)
        })
});
    
//Create/post a workout    
    router.post ('/', ({ body }, res) => {
        db.Workout.create(body)
          .then (dbNewWorkout => { res.json(dbNewWorkout)})
          .catch (err => { res.status(400).json(err)})
    });

//Update a workout based on workout id
    router.put('/:id', (req, res) => {
        db.Workout.findByIdAndUpdate(
                req.params.id,
                { $push: { 
                    exercises: req.body }
                })
            .then(dbWorkout => {
                res.json(dbWorkout)
            }) 
            .catch (err => {
            res.status(500).json(err);
            });
    });

    module.exports = router;

