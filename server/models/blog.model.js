import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    mainContent: {
        type: String
    },
    shortContent: {
        type: String
    }
}, {timestamps: true})

const Blog = mongoose.model("Blog", blogSchema)

export default Blog;