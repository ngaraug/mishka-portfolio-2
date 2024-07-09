import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    subGenre: {
        type: String,
        required: true
    },
    pOverview: {
        type: String
    },
    why: {
        type: String
    },
    quotes: {
        type: String
    },
    bExpect: {
        type: String
    },
    bAnalysis: {
        type: String
    },
    bFlaws: {
        type: String
    },
    similar: {
        type: String
    },
    rating: {
        type: String,
        required: true
    },
    bImage: {
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review', reviewSchema)

export default Review;