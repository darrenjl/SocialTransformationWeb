var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('weighin');
});

// process the signup form
router.post('/', function(req, res) {
        var user          = req.user;
        // user.google.token = undefined;
        // user.save(function(err) {
        //    res.redirect('/profile');
        // });
        res.redirect('/profile');
    });

    module.exports = router;
