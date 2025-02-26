const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        required: [true, 'Please provide a path']
    },

    originalname:{
        type:String,
        required: [true, 'Please provide a originalname']
    },

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'Please provide a user']
    }
})


const file = mongoose.model('file', fileSchema);

module.exports = file;