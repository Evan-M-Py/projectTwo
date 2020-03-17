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

    app.get("/api/artist/:id", function(req, res) {
        console.log(req.params.id)
        db.Bands.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(band) {
            const mappedArtist = band
            res.render("band", band);
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
    
app.post("/api/posts/", function(req, res) {
    db.Comment.create({
      author: req.body.author,
      rating: req.body.rating,
      venue: req.body.venue,
      date: req.body.date,
      comment: req.body.comment
      
    }).then(function(dbPost) {
        console.log('show me the money' + dbPost);
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


app.post("/api/comments", function(req, res) {
    console.log(req.body);
    db.Comment
    .create({
        author: req.body.screenName.value,
        rating: req.body.ratingSlideVal.value,
        venue: req.body.venue.value,
        date: req.body.datePicker.value,
        comment: req.body.comment.value
    })
    .then(function(dbPost) {
        res.json(dbPost);
        console.log(req.body);
    });
});
};
// };
