const express = require("express");
const models = require("./models");
const handlebars = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("./views/layouts"));
app.use(express.static(__dirname + '/public'));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    //     const insert = (value, val, valyou, valll) => {
    //         models.Bands.create({
    //             bandName: value,
    //             genre: val,
    //             homeTown: valyou,
    //             active: valll
    //         }).then(foo => {
    //             console.log("Artist Added!");
    //         });
    //     };
        
    //     //Rock
    //     insert("The Beatles", "Rock", "Liverpool", false);
    //     insert("The Rolling Stones", "Rock", "London, England", true);
    //     //Hip Hop
    //     insert("Nas", "Hip Hop", "New York", true);
    //     insert("The Wu-Tang Clan", "Hip Hop", "New York, New York", true);
    //     //Pop
    //     insert("Ariana Grande", "Pop", "Florida", true);
    //     insert("Kali Uchis", "Pop", "Pereira, Risaralda, Columbia", true);
    //     //Electronic
    //     insert("Deadmau5", "Electronic", "Canada", true);
    //     insert("Dan Deacon", "Electronic", "Baltimore, Maryland", true);
    //     //Alternative
    //     insert("Nirvana", "Alternative", "Seattle", false);
    //     insert("Sonic Youth", "Alternative", "New York, New York", false);
        
    });

});