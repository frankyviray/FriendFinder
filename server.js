
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



var app = express();


var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/app/public", function (req, res) {
    // we're using path.join here to safely combine two filepaths
    // __dirname + "/index.html" would also work
    res.sendFile(path.join(__dirname, "home.html"));
});

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});