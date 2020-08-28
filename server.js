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
app.use("/" , htmlRoutes)




app.get("/api/notes",function(req,res){

  
  res.json(note)
  })


app.post("/api/notes",function(req,res){
  console.log("adding new notes")
  var newNote = req.body;

 
 fs.writeFile("dbjson",JSON.stringify(newNote),(err)=>{
  if (err) {
    return console.log(err)
  }
  note.push(newNote)
  res.json(note)
 })




})

















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });