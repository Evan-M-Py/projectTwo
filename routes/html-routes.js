const path = require("path");
const db = require("../models");

// HTML Routes
module.exports = function(app) {
    app.get("/home", function(req, res) {
        res.render("home");
    });
    // main page of all artists
    app.get("/artists", function(req, res) {
        db.Bands.findAll({
            order: ["bandName"]
        }).then(function(data) {
            const mappedBand = data.map(res => {
                return res;
            });
            const handlebarsObj = {
                bands: mappedBand
            };
            res.render("artists", handlebarsObj);
        });

        app.get("/band", function(req, res) {
            res.render("band");
        });

        // main page of all artists
        app.get("/artists", function(req, res) {
            db.Bands.findAll({
                order: ["bandName"]
            }).then(function(data) {
                const mappedBand = data.map(res => {
                    return res;
                });
            });
        });
    });
};
