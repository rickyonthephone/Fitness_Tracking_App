const { Workout } = require('../../models');
const router = require('express').Router();


//Get workout data
    router.get ('/', (req, res) => {
        Workout.find({})
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });

    router.get ('/range', (req, res) => {
        Workout.find({})
            .sort({date: -1})
            .then(data => {
                res.json(data)
            })
            .catch (err => {
                res.json(err)
            })
    });
//Create/post a workout    
    router.post ('/', async (req, res) => {
        Workout.create({})
        .then(dataNew => 
            { res.json(dataNew)
        })
        .catch(err => {
            console.log('Error!', err); 
            res.json(err)
        })
    });
//Update a workout based on workout id
    router.put('/:id', (req, res) => {
        Workout.findOneAndUpdate(
            {_id: req.params.id},
            { $push: {exercises: req.body} })
            .then(dataUpdate => res.json(dataUpdate))
            .catch(err => {
                console.log('Error!', err)
                res.json(err)
            })
    });

    module.exports = router;