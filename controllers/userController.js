const db = require("../models");
const passport = require('../passport')


module.exports = {
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(user => {
                res.json(dbModel);
                console.log(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

    login: (req, res, next) => {
        passport.authenticate('local', (err, user) => {
            if (!user) return res.sendStatus(404);
            const { username } = user;
            req.logIn(user, err => {
                if (err) return next(err);
            })
            res.json({ username });
        })(req, res, next);
    }



};