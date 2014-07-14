var express = require('express');
var log4js = require( "log4js" );
var router = express.Router();

var Weighin       = require('../models/userWeighIns');

/* GET home page. */
router.get('/', isLoggedIn, function(req, res) {
    Weighin.find({},{},function(e,docs){
        log4js.getLogger("app").debug(docs);
        res.render('weighin', {
            "weighinsList" : docs
        });
    });
});

// process the signup form
router.post('/', isLoggedIn, function(req, res) {
        var user          = req.user;
        var weighin       = new Weighin();

        weighin.user = user._id;
        weighin.weight = req.body.weight;

        weighin.save(function(err) {
            if (err) {
                log4js.getLogger("app").debug(err);
                throw err;
            }

            res.redirect('/profile');
        });
    });

    module.exports = router;

    // route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/login');
}
