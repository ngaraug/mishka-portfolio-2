import mongoose from "mongoose";

const adminPassSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    passwd: {
        type: String,
        required: true
    }
});

const Passwd = mongoose.model("passwd", adminPassSchema);

export default Passwd;