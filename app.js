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

// Ball.create({
//     name: "Kris Bryant",
//     team: "Cubs",
//     image: "http://1440wrok.com/files/2015/09/Kris-Bryant.jpg?w=980&q=75",
//     HitsAB: "82/290",
//     R: "46",
//     HR: "11",
//     RBI: "42",
//     SB: "2",
//     OPS: ".878"
// });

app.get("/", function(req, res) {
    res.redirect("/stats");
});

// INDEX ROUTE
app.get("/stats", function(req, res) {
    Ball.find({}, function(err, balls) {
        if(err) {
            console.log("ERROR!");
        } else {
            res.render("index", {balls: balls});
        }
    });
});


app.listen(3000, function() {
    console.log("Fantasy stats server has started!")
});