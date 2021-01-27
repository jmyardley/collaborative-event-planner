const db = require("../models");
const passport = require('../passport')


module.exports = {
    updateById: function (req, res) {
        db.Item
            .findOneAndUpdate({ _id: req.params.id }, { completed: true })
            .then(dbModel => res.json(dbModel))            
            .catch(err => res.status(422).json(err));
    },

};