const db = require("../models");
const passport = require('passport')


module.exports = {
    create: function (req, res) {
        console.log(req.body)
        db.User
            .create(req.body)
            .then(dbModel => {
                res.json(dbModel);
                console.log(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    login: function (req, res) {
        (passport.authenticate('local'),
        (req, res) => {
            console.log('logged in', req.user);
            var userInfo = {
                username: req.user.username
      
            };
            res.send(userInfo);
        })(req, res);
    }



};