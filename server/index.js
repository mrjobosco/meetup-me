import {MeetupRoutes} from './modules'
import dbConfig from './config/db'
import express from 'express'
import middlewareConfig from './config/middlewares'

const app = express()

// Database connection
dbConfig()

// Middleware
middlewareConfig(app)

app.use('/api', [MeetupRoutes])

const PORT = process.env.PORT || 3000

app.listen(PORT, err =>{
    if(err){
        console.log(err)
    }else{
        console.log(`App Listening on ${PORT}`)  
    }
})