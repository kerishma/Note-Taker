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

// Starts the server to begin listening

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
