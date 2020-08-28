var express = require("express");
const fs = require("fs");
var path = require("path");
var htmlRoutes = require("./routes/htmlRoutes")
var apiRoutes = require("./routes/apiRoutes")
var note = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/" , htmlRoutes);
apiRoutes(app);






















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });