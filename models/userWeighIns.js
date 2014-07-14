// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userWeighInSchema = mongoose.Schema({
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date : { type: Date, default: Date.now },
    weight : Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Weighin', userWeighInSchema);
