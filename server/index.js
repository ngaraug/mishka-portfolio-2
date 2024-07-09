import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"


const app = express();
app.use(express.json()); //Allows usage of json in request body
app.use(cors())

// Importing Routes
import blogRoutes from "./routes/blog.routes.js";
import authRoutes from "./routes/auth.routes.js";
import reviewRoutes from "./routes/review.routes.js"

dotenv.config();
const uri = process.env.MONGOURI;

mongoose.connect(uri)
    .then( 
        () => console.log("Connected to DB")
    ).catch(
        (err) => console.log(err)
    )


// Routes
app.get('/test', (req, res)=>{
    res.json({message: "Working!"})
})
app.use("/api/blog", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/review", reviewRoutes);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server running on port 3000!!!");    
})