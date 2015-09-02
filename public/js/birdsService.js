angular.module("app").service("birdsService", function($http, $q){
  this.newBird = function(bird){
    var dfd = $q.defer();
    $http.post("/bird", bird).then(function(data){
      dfd.resolve();
    });
    return dfd.promise;
  }
  this.getBirds = function(query){
    if(!query) query = "";
    return $http.get("/bird" + query);
  }
})
