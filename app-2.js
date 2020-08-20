const express = require("express");
const path = require("path");
const fs = require("fs");
// const bodyParser = require("body-parse");

// setup the Express App
const app = express();
const PORT = 3050;

let noteDate = [];

// setup Express App to handler data
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "Develop/public")));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// Routes

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "Develop/public", `index.html`));
// });

// app.get("/notes", function (req, res) {
//   res.sendFile(path.join(__dirname, "Develop/public", `notes.html`));
// });

// // Displays all notes

// app.get("/api/notes", function (req, res) {
//   fs.readFile("Develop/public/db/db.json", function (error, data) {
//     if (error) {
//       throw error;
//     };
//     let Note = JSON.parse(data);
//     return res.json(Note);
//   });
// });

// app.post("/api/notes",(req, res) => {
//   noteData = fs.readFileSync("./Develop/public/db/db.json", function (error, data) {
//     if (error) {
//       throw error;
//     }
//     noteDate = JSON.parse(noteData);
//     req.body.id = noteDate.length
//     let newNote = {
//       title: req.body.title,
//       text: req.body.text,
//       //   id: nameid.generate(),
//     }
//     fs.writeFile(
//       "Develop/public/db/db.json",
//       JSON.stringify(Note, null, 2),
//       (error) => {
//         if (error) {
//           throw error;
//         };
//         res.send('100');
//       }
//     );
//   });
// });

// Starts the server to begin listening

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
