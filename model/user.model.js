const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Username is required"],
        minlength: [5, "Username must have at least five character"],
        maxlength: [15, "Username must not exceed twenty character"]
    },
    email:{
        type: String,
        unique: true,
        required: [true,"Email must not be empty"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "Password must not be empty"],
        maxlength: [14, "Password must be less than 15 character"],
        minlength: [3,"Password must have at least 3 character"]
    }
},{timestamps : true});


const user = mongoose.model("user",userSchema);

module.exports = user;