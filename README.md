# NoteTaker
Pseudo Code 

First I need to do a npm init and npm install to add all the modules I need for the assignment .
CREATE SERVER
next I need to create a server.js file 
Require express and path modules in server file
create PORT that server will be hosted on
Add listener for server
HTML ROUTES
use the get function to render html pages
ex. app.get("/",function(req,res)){
    res.sendFile (index.html)
}

API Routes
require fs
create variable to grab,store,and delete new notes
var notes[{id:
title:
}]
ADD
app.get("/api/notes",){
    fs.readFile(db.json, (err,data)=> {
        return data.json
    }

}
STORE
app.post("/api/notes", function(req,res){
    var newNote = req.body;
fs.writeFile(db.json, new Note (err,res)=>{}
notes.push(newNote)
    return newNote
}
DELETE // add id function to notes object that increments
app.delete(/api/notes/:id, function(req,res) => { 
  fs.readFile(dc.json,(err,data){
  remove({_id:? ( req.params.id)}
  }
  
  
  res.send("") 
}) 
