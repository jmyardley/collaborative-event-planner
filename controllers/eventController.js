const db = require("../models");

module.exports = {
    create: function (req, res) {
        console.log(req.body)
        db.Item
             .insertMany(req.body.items)
        db.Event
            .create(req.body)
            .then(dbModel => {
                res.json(dbModel);
                console.log(dbModel);
            })
            .catch(err => res.status(422).json(err));
    },

};