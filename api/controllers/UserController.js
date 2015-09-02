var User = require("./../models/User.js");

var userHub = {
  newUser: function(req, res){
    var user = new User(req.body);
    user.save(function(err, results){
      if(err) res.status(500).json(err);
      else res.json(results);
    })
  },
  getUsers: function(req, res){
    User.find(req.query, function(err, result){
      res.json(result);
    })
  },
  updateUser: function(req, res){
    User.findOneAndUpdate({_id: req.body._id}, req.body, function(err, result){
      if(err) console.log(err);
      else res.json(result);
    })
  },
  getUserBirds: function(req, res){
    User.findOne(req.query, function(err, users){
      if(!users) res.status(418).json({nofing: "nofing"});
      if(err) res.status(418).json(err);
      users.populate("birds", function(err){
        if(!err) res.json(users);
      })
    })
  }
}

module.exports = userHub;
