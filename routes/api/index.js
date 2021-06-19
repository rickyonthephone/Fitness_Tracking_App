const router = require("express").Router();

const workoutRoutes = require("./apiRoutes");

router.use("/workouts", workoutRoutes);

module.exports = router;