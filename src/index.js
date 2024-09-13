// require('dotenv').config({path :'./env'})    //we can write this with import also 

import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

import connectDB from "./db/index.js";


dotenv.config({
    path :'./env'
})



// import express from "express"
// const app = express()

//the below code to connect for db is the best practice but we will write another approach in db then call it from there itself 

// we have used semicolon its a best practice to avoid error //hitesh 5 hour 6 min backend video

/*


;(async () => {
    try{
        await mongoose.connect( `${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("Error",(error) => {
            console.log("Error" ,error)
            throw error
        })

        app.listen(process.env.PORT,() => {
            console.log(`App is listning on port ${process.env.PORT}`);
        })

    }catch(error){
        console.error("ERROR" ,error)
        
    }
})()



*/



connectDB()

