const express = require('express'); //require package
require('dotenv').config();
const mongoose = require('mongoose');

const app = express(); // express app
const workoutRoutes = require('./routes/workouts');

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
app.use('/api/workouts', workoutRoutes);

//connecting to database;
mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        app.listen(process.env.PORT, ()=>{ //listening to port 4000
            console.log("connected to database and Listening to port ",process.env.PORT);
        })
    })
    .catch((err)=>{
        console.log("Something went wrong - ",err);
    })




