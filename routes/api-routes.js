const db = require("../models");

module.exports = function(app) {
    app.get("/api/artists/", function(req, res) {
        db.Bands.findAll({
            order: ["bandName"]
        }).then(function(band) {
            res.json(band);
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
        }).then(function(band) {
            res.json(band);
            const mappedArtist = data.map((res)=> {
                return res;
            });
            const handlebarsObj = {
                artist: mappedArtist
            };
            res.render("band", handlebarsObj);
        });
    });
    
    app.delete("/api/post/:id", function (req, res) {
        db.Band.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(post){
            res.json(post);
        })
    })
};
