var express = require("express"),
    http = require("http"),
    app = express(),
    path = require('path');

app.use(express.static(__dirname + "/client"));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);

app.get("/largest", function (req, res) {
    res.sendFile(path.join(__dirname+"/largest.html"))
});

console.log("Server running on port 3000");