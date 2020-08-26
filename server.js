var express = require("express")

var path = require("path");
const htmlRoute = require("/htmlRoute")

var app = express();
var PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });