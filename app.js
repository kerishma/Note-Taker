const express = require("express");
const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");

// setup the Express App

const app = express();
const port = process.env.PORT || 3000;

// setup Express App to handler data

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.listen(port, () => {
  console.log(`Running app at http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public", `index.html`));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public", `notes.html`));
});

// Displays all notes

app.get("/api/notes", function (req, res) {
  fs.readFile("public/db/db.json", function (error, data) {
    if (error) {
      throw error;
    }
    let allNote = JSON.parse(data);
    return res.json(allNote);
  });
});

// Save notes
app.post("/api/notes", (req, res) => {
  fs.readFile("public/db/db.json", function (error, data) {
    if (error) {
      throw error;
    }
    let allNote = JSON.parse(data);
    let genID = uniqid();
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: genID,
    };
    allNote.notes.push(newNote);
    fs.writeFile(
      "public/db/db.json",
      JSON.stringify(allNote, null, 2),
      (error) => {
        if (error) {
          throw error;
        }
        res.send(`ID of the note: ${genID}`);
      }
    );
  });
});

// Delete notes
app.delete("/api/notes/:id", function (req, res) {
  deleteID = req.params.id;
  fs.readFile("public/db/db.json", function (error, data) {
    if (error) {
      throw error;
    }
    let allNotes = JSON.parse(data);
    let allNotesArray = allNotes.notes;
    let getNoteIDIndex = allNotesArray
      .map(function (note) {
        return note.id;
      })
      .indexOf(deleteID);
    if (getNoteIDIndex == -1) {
      res.send(`Note with ID ${deleteID} does not exist`);
    } else {
      allNotesArray.splice(getNoteIDIndex, 1);
      allNotes.notes = allNotesArray;
      fs.writeFile(
        "public/db/db.json",
        JSON.stringify(allNotes, null, 2),
        (error) => {
          if (error) {
            throw error;
          }
          res.send(`Note with ID ${deleteID} has been deleted`);
        }
      );
    }
  });
});
