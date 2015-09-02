angular.module("app").controller("newUser", function($scope, userService, $timeout){
  $scope.user = {};
  $scope.newUser = function(user){
    $scope.saving = true;
    $timeout(function(){
      userService.newUser(user).then(function(){
        $scope.saving = false;
      })
    }, 1000);

  }
})
