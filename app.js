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
    HitsAB: String,
    R: String,
    HR: String,
    RBI: String,
    SB: String,
    OPS: String
});

var Stat = mongoose.model("Stat", statSchema);

Stat.create({
    name: "Kris Bryant",
    image: "http://mlb.mlb.com/mlb/images/players/head_shot/592178.jpg",
    HitsAB: "82/290",
    R: "46",
    HR: "11",
    RBI: "42",
    SB: "2",
    OPS: ".878"
}, function(err, stat) {
    if(err) {
        console.log(err);
    } else {
        console.log("New Stats!");
        console.log(stat);
    }
});



app.listen(3000, function() {
    console.log("Stats server has started!");
});