var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

// App Config
mongoose.connect("mongodb://localhost/baseball");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose/model config
var ballSchema = new mongoose.Schema({
    batter: String,
    batter_team: String,
    image: String,
    HitsAB: String,
    R: String,
    HR: String,
    RBI: String,
    SB: String,
    OPS: String,
    pitcher: String,
    pitcher_team: String,
    IP: String,
    SV: String,
    K: String,
    ERA: String,
    WHIP: String,
    QS: String
});

var Ball = mongoose.model("Ball", ballSchema);


app.get("/", function(req, res) {
    res.redirect("/home");
});

// INDEX ROUTE
app.get("/home", function(req, res) {
    res.render("index");
});

// Hitters page
app.get("/hitters", function(req, res) {
    Ball.find({}, function(err, balls) {
        if(err) {
            console.log("ERROR!");
        } else {
            res.render("hitters", {balls: balls});
        }
    });
});

// Pitchers page
app.get("/pitchers", function(req, res) {
    Ball.find({}, function(err, balls) {
        if(err) {
            console.log("ERROR!");
        } else {
            res.render("pitchers", {balls: balls});
        }
    });
});






app.listen(3000, function() {
    console.log("Fantasy stats server has started!")
});