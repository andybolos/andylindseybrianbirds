angular.module("app", ["ngRoute"]);
angular.module("app").config(function($routeProvider){
  $routeProvider
    .when("/user/:id", {
      controller: "userCtrl",
      templateUrl: "template/user.html"
    })
    .when("/new-user", {
      controller: "newUser",
      templateUrl: "template/newUser.html"
    })
    .when("/birds", {
      controller: "birdsCtrl",
      templateUrl: "template/birds.html"
    })
    .when("/pairing", {
      controller: "pairingCtrl",
      templateUrl: "template/pairing.html",
      resolve: {
        users: function(userService){
          return userService.getUsers();
        },
        birds: function(birdsService){
          return birdsService.getBirds();
        }
      }
    })
    .when("/404", {
      template: "<h1>404</h1>"
    })
    .otherwise("/404")
})
