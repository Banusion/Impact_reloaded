"use strict";
let User = require('../models/users');

module.exports = function(app, passport) {
   update = function (req, res) {
        User.findOneAndUpdate(
            {
                'local.email': req.email
            },
            {
                'local.pseudo': req.pseudo
            },
            {
                new: true
            },
            function (err, user) {
                if (err) {
                    return console.log(err)
                }
                console.log(user);
                return res(user)
            }
        )
   }
}