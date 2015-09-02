var Bird = require("./../models/Bird.js");

module.exports = {
  newBird: function(req, res){
    var newBird = new Bird(req.body);
    newBird.save(function(err, result){
      if(err){
        console.log(err);
        res.status(500).json(err);
      }
      else res.json(result);
    })
  },
  getBirds: function(req, res){
    Bird.find(req.query, function(err, result){
      res.json(result);
    })
  }
}
