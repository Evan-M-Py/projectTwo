const path = require("path");
const db = require("./models");

// HTML Routes
module.exports = function(app) {

  // landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/dummy.html"));
    res.json({data: "data"});
  });

  // main page of all artists
  app.get("/artists", function(req, res) {
    db.Bands.findAll({
        order: ["id"]
    }).then(function(data) {
        const handlebarsObj = {
            bands: data
        };
        console.log(handlebarsObj);
        res.render("artists", handlebarsObj);
    });
  });

  // single artist page
  app.get("/band", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/band.html"));
  });
};
