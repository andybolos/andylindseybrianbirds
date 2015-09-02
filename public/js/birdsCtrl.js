angular.module("app").controller("birdsCtrl", function($scope, birdsService){
  $scope.birdDescrip = [{label: "Bird Color", value: "color"}, {label: "Bird Name", value: "name"}, {label: "Bird Smell", value: "smell"}];
  $scope.search = {};
  $scope.newBird = function(bird){
    birdsService.newBird(bird).then(function(){
      console.log("I did it!");
    })
  }
})
