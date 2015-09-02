var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
var port = 7898;

var UserCtrl = require("./api/controllers/UserController.js");
var BirdCtrl = require("./api/controllers/BirdController.js");


app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.post("/user", UserCtrl.newUser);
app.get("/user", UserCtrl.getUsers);
app.put("/user", UserCtrl.updateUser);
app.get("/userbirds", UserCtrl.getUserBirds);
app.post("/bird", BirdCtrl.newBird);
app.get("/bird", BirdCtrl.getBirds);






mongoose.connect("mongodb://localhost/bird");
mongoose.connection.once('open', function(){
  console.log('Successfully connected');
});
app.listen(port, function(){
  console.log("Listening on " + port)
});
