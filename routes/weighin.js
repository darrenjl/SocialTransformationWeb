var express = require('express');
var log4js = require( "log4js" );
var router = express.Router();

var Weighin       = require('../models/userWeighIns');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('weighin');
});

// process the signup form
router.post('/', function(req, res) {
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
