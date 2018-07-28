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
var imageSchema = new mongoose.Schema({
    image: String
});

var Image = mongoose.model("Image", imageSchema);

var hitterSchema = new mongoose.Schema({
    batter: String,
    image: String,
    batter_pos: String,
    batter_team: String,
    image: String,
    HitsAB: String,
    R: String,
    HR: String,
    RBI: String,
    SB: String,
    OPS: String
});

var Hitter = mongoose.model("Hitter", hitterSchema);

var pitcherSchema = new mongoose.Schema({
    pitcher: String,
    image: String,
    pitcher_pos: String,
    pitcher_team: String,
    IP: String,
    SV: String,
    K: String,
    ERA: String,
    WHIP: String,
    QS: String
});

var Pitcher = mongoose.model("Pitcher", pitcherSchema);

app.get("/", function(req, res) {
    res.redirect("/home");
});

// INDEX ROUTE
app.get("/home", function(req, res) {
    Image.find({}, function(err, images) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {images: images});
        }
    });
});

// Hitters page
app.get("/hitters", function(req, res) {
    Hitter.find({}, function(err, hitters) {
        if(err) {
            console.log("ERROR!");
        } else {
            res.render("hitters", {hitters: hitters});
        }
    });
});

// Pitchers page
app.get("/pitchers", function(req, res) {
    Pitcher.find({}, function(err, pitchers) {
        if(err) {
            console.log("ERROR!");
        } else {
            res.render("pitchers", {pitchers: pitchers});
        }
    });
});



app.listen(3000, function() {
    console.log("Fantasy stats server has started!")
});