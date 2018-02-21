var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

var app = express();

/* 
var logger = function(req, res, next){
	console.log("logging...");
	next();
}

app.use(logger);
*/

//initial port
var PORT = process.env.PORT || 8080;

//Body parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({etended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Sert Static Path
app.use(express.static(path.join(__dirname, "app/public")))

//route files

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//listener

app.listen(PORT, function(){
	console.log("Server started on Port "+ PORT);
});