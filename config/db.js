const mongoose = require('mongoose');

function connecToDB()
{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connected to database');
    })
}


module.exports = connecToDB;