const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },photo:{
        type: String,
    },courses:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
    ]
})

const User = mongoose.model("User", userSchema)

module.exports = User;