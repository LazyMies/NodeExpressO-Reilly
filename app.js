var express = require("express"),
    path = require("path");

var directoryPath = path.join(__dirname, "public");

var app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(directoryPath, "home.html"));
});

app.get("/about", function (req, res) {
    res.sendFile(path.join(directoryPath, "about.html"));
});


// custom 404 page
app.use(function (req, res) {
    res.status(404);
    res.sendFile(path.join(directoryPath, "404.html"));
});

// custom 404 page
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.sendFile(path.join(directoryPath, "500.html"));
});

app.listen(app.get("port"), function () {
    console.log('Express app started on http://localhost:' + app.get("port") );
});
