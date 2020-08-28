var express = require("express");
const fs = require("fs");
var path = require("path");
var htmlRoutes = require("./assets/js/htmlRoutes")
var apiRoutes = require("./assets/js/apiRoutes")
var note = require("./db/db.json")
// const createNotes = require("./index");
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
  
  var newNote = req.body;
 storedNotes = 
 storedNotes.push(newNote)
 fs.writeFile("dbjson",JSON.stringify(storedNotes),(err,data)=>{
  if (err) {
    return console.log(err)
  }
  
  return storedNotes
 })




})

















app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });