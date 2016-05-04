var express = require("express"),
    path = require("path");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render("index");
});

app.get("/about", function (req, res) {
    res.render("about");
});


// custom 404 page
app.use(function (req, res) {
    res.status(404);
    res.render("404");
});

// custom 404 page
app.use(function (err, req, res, next) {
    console.log(err.stack);
    res.status(500);
    res.render("500");
});

app.listen(app.get("port"), function () {
    console.log('Express app started on http://localhost:' + app.get("port") );
});
