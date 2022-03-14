const express = require('express');
const uuid = require('uuid');
const path = require('path');
const fs = require('fs');
const dbData=require('./db/db.json')
const api = require('./routes/index.js');

const PORT = process.env.PORT ||3001;

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api)
app.use(express.static('public'));

 app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);
/* app.get('/*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
); */

 


/*
//delete note according to their tagged id.
app.delete("/api/notes/:id", (req, res) => {
  let noteList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
  let noteId = (req.params.id).toString();

  //filter all notes that does not have matching id and saved them as a new array
  //the matching array will be deleted
  noteList = noteList.filter(selected =>{
      return selected.id != noteId;
  })

  //write the updated data to db.json and display the updated note
  fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
  res.json(noteList);
});
app.use(function(req, res, next) {
  res.status(404);
    res.sendFile(path.join(__dirname, '/public/index.html') );
    return;
});   */
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
