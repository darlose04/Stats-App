var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

// App config
mongoose.connect("mongodb://localhost/fantasy_stats");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose/model config
var statSchema = new mongoose.Schema({
    name: String,
    image: String,
    stats: {
        hitters: {
            HitsAB: String,
            R: String,
            HR: String,
            RBI: String,
            SB: String,
            OPS: String
        },
        pitchers: {
            IP: String,
            SV: String,
            K: String,
            ERA: String,
            WHIP: String,
            QS: String
        }
    }
});

var Stats = mongoose.model("Stats", statSchema);





app.listen(3000, function() {
    console.log("Stats server has started!");
});