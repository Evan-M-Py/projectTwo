const path = require("path");

// HTML Routes
module.exports = function(app) {

  // landing page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // main page of all artists
  app.get("/artists", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/artists.html"));
  });
  // single artist page
  app.get("/band", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/band.html"));
  });
};
