const db = require("../models");

module.exports = {
    create: function (req, res) {
        db.Item
            .insertMany(req.body.items)
            .then(items => {
                const ids = items.map(item => item._id);
                db.Event
                    .create({
                        title: req.body.title,
                        date: req.body.date,
                        descr: req.body.descr,
                        items: ids,
                        owner: req.user._id
                    })
                    .then(dbModel => {
                        res.json(dbModel);
                        console.log(dbModel);
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(422).json(err)
                    });


            })
            .catch(err => {
                console.log(err);
                res.status(422).json(err)
            });
    },
    findAll: function (req, res) {
        db.Event
            .find(req.query)
            .populate(["items", "owner"])
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: function (req, res) {
        db.Event
            .findById(req.params.id)
            .populate(["items", "owner"])
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
};