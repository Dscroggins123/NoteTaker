var express = require("express");
const fs = require("fs");
var path = require("path");
var htmlRoutes = require("./assets/js/htmlRoutes")
var apiRoutes = require("./assets/js/apiRoutes")
var notes = require("./db/db.json")
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/" , htmlRoutes)


// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });
// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname,"/public/notes.html"));
//   });

// app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "notes.html"));
//   });

// app.get("/api/notes",function(req,res){
  
//   res.json(notes[i].title)
  




// })

















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });