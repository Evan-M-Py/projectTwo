const path = require("path");
const db = require("../models");

// HTML Routes
module.exports = function(app) {

  // main page of all artists
  app.get("/artists", function(req, res) {
    db.Bands.findAll({
        order: ["bandName"]
    }).then(function(data) {
        const mappedBand = data.map((res)=> {
            return res;
        });
        const handlebarsObj = {
            bands: mappedBand
        };
        console.log(handlebarsObj);
        res.render("artists", handlebarsObj);
    });
  });

};
