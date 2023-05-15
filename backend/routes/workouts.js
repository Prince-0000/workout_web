const express = require('express');
const Workout = require('../models/workoutModel');
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutController');

//Router
const router = express.Router();

//get all workouts
router.get('/',getWorkouts)

// get a single document
router.get('/:id',getWorkout)

//post a new document
router.post('/',createWorkout)

//Delete a workout
router.delete('/:id',deleteWorkout)

//update workout
router.patch('/:id',updateWorkout)


module.exports = router