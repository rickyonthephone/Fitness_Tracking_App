const express = require('express');
const {updateExercise} = require('../controllers/workoutController.js');

const router = express.Router();

//update exercise by ID
router.route('/exercise/:id')
    .put(updateExercise)


module.exports = router;