// Dependencies
// =============================================================
var express = require("express");
require('dotenv').config();

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });