var express = require("express");

var app = express();

app.set("port", process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.type("text/plain");
    res.send("Home Page");
});

app.get("/about", function (req, res) {
    res.type("text/plain");
    res.send("About Page");
});


// custom 404 page
app.use(function (req, res) {
    res.type("text/plain");
    res.status(404);
    res.send("404 - not found");
});

// custom 404 page
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server Error");
});

app.listen(app.get("port"), function () {
    console.log('Express app started on http://localhost:' + app.get("port") );
});
