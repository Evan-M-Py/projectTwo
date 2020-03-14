const db = require("../models");
const express = require("express");

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
            const mappedBand = data.map(res => {
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
            const mappedArtist = data.map(res => {
                return res;
            });
            const handlebarsObj = {
                artist: mappedArtist
            };
            res.render("band", handlebarsObj);
        });
    });
    
    app.delete("/api/comment/:id", function(req, res) {
        db.Comment.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(post) {
            res.json(post);
        })
    })
    
app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Comment.create({
      author: req.body.screenName,
      rating: req.body.rating,
      venue: req.body.venue,
      date: req.body.datePicker,
      comment: req.body.body
      
    }).then(function(dbPost) {
        console.log(dbPost);
        res.json(dbPost);
      });
  });

// app.post("/api/comments", function(req, res) {
//     console.log(req.body);
//     db.Comment
//         .create({
//             author: req.body.screenName,
//             rating: req.body.ratingSlideVal,
//             venue: req.body.venue,
//             date: req.body.datePicker,
//             comment: req.body.comment
//         })
//         .then(function(dbPost) {
//             res.json(dbPost);
//         });
// });

};
