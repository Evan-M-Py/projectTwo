const db = require("../models");

module.exports = function(app) {
    app.get("/api/artists/", function(req, res) {
        db.Bands.findAll({
            order: ["bandName"]
        }).then(function(band) {
            res.json(band);
            console.log(band);
        });
    });

    app.get("/api/artists/:genre", function(req, res) {
        db.Bands.findAll({
            where: {
                genre: req.params.genre
            }
        }).then(function(data) {
            const mappedBand = data.map((res)=> {
                return res;
            });
            const handlebarsObj = {
                bands: mappedBand
            };
            res.render("artists", handlebarsObj);
        });
    });

    app.get("/api/band/:id", function(req, res) {
        db.Band.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbPost) {
            res.json(dbPost);
        });
    });
};
