angular.module("app").service("userService", function($http, $q){
  this.newUser = function(user){
    return $http.post("/user", user);
  }
  this.getUsers = function(query){
    if(!query) query = "";
    return $http.get("/user" + query);
  }
  this.updateUser = function(user){
    return $http.put("/user", user);
  }
})
