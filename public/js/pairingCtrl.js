angular.module("app").controller("pairingCtrl", function($scope, users, birds, userService){
  $scope.birds = birds.data;
  $scope.users = users.data;

  $scope.isCurrent = function(user){
    if(user === $scope.currentUser) return {background: "blue"};
  }
  $scope.setCurrent = function(user){
    $scope.currentUser = user;
    console.log($scope.currentUser);
  }
  $scope.addBird = function(bird){
    $scope.currentUser.birds.push(bird._id)
    userService.updateUser($scope.currentUser).then(function(){
      console.log("added bird");
    })
  }

})
