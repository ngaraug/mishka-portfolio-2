import Review from "../models/review.model.js";

export const addReview = async (req, res) =>{
    // const newReview = new Review({
        
    // }) 
    const reviewBody = req.body;
    if(!reviewBody){
        res.json("Invalid body format");
    }else{
        console.log(reviewBody);    //Testing
        res.json({'reviewTitle': reviewBody.title})     //Testing
    }
}