import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGOURI;

mongoose.connect(uri)
    .then( 
        () => console.log("Connected to BD")
    ).catch(
        (err) => console.log(err)
    )

const app = express();

app.listen(3000, ()=>{
    console.log("Server running on port 3000!!!");
})