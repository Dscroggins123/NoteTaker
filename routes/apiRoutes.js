
var note = require("../db/db.json")
const fs = require("fs");

module.exports = function(app) {
    app.get("/api/notes",function(req,res){

  
        res.json(note)
        })
      
      
      app.post("/api/notes",function(req,res){
        console.log("adding new notes")
        var newNote = req.body;
        note.push({...newNote,id:note.length+1})
       
       fs.writeFile("./db/db.json",JSON.stringify(note),(err)=>{
        if (err) {
          return console.log(err)
        }
        
        res.json(note)
       })
      })
      app.delete("/api/notes/:id",function(req,res){
        var notenumber = req.params.id
        console.log(notenumber)
        for (let i = 0; i < note.length;i++){
        if (note[i].id == notenumber) {
          note.splice(i,1)
        }
        
        }
        fs.writeFile("./db/db.json",JSON.stringify(note),(err)=>{
          if (err) {
            return console.log(err)
          }
          
          res.json(note)
      
        })
        
        
        })
}

