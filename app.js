var express = require("express"),
    path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);

app.get('/', function (req, res) {
    res.sendfile("home.html");
});

app.get("/about", function (req, res) {
    res.sendfile("about.html");
});


// custom 404 page
app.use(function (req, res) {
    res.status(404);
    res.sendfile("404.html");
});

// custom 404 page
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.sendfile("500.html");
});

app.listen(app.get("port"), function () {
    console.log('Express app started on http://localhost:' + app.get("port") );
});
