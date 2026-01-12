const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true,
        //prevents password return 
        select: false
    }
}, {
    timestamps: true
})

// set up the model
const User = mongoose.model("User", userSchema);

module.exports = User;
