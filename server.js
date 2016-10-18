var express = require("express"),
    http = require("http"),
    app = express();

app.use(express.static(__dirname + "/client"));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);

// set up our routes
app.get("/sum", function (req, res) {
    res.send("sum.html");
});

app.get("/largest", function (req, res) {
    res.send("largest.html");
});

// set up our routes
app.get("/even", function (req, res) {
    res.send("even.html");
});

app.get("/iseven", function (req, res) {
    res.send("iseven.html");
});

app.get("/containsN", function (req, res) {
    res.send("containsN.html");
});

// set up the root route
app.get("/root", function (req, res) {
    res.send("This is the root route!");
});
