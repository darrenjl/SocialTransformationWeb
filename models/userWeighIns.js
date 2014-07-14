// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var userWeighInSchema = mongoose.Schema({
    userEmail : String,
    date : timestamp,
    weight : Number
});

// create the model for users and expose it to our app
module.exports = mongoose.model('WeighIn', userWeighInSchema);
