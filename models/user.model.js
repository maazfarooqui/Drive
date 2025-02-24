const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,  
        min: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        min: 10
    },
    password: {
        type: String,
        required: true,
        trim: true,
        min: 5
    }
})


const user = mongoose.model('user', userSchema);

module.exports = user;