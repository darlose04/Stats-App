var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");

// App config
mongoose.connect("mongodb://localhost/fantasy_stats");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
