(function(){

    angular.module('angularSpa', [
    'ngRoute'
    ])
    .config(function($routeProvider){
        $routeProvider
        .when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          })
        .when('/actors', {
            templateUrl:'views/actors.html',
            controller:'ActorsCtrl'
        })
        .when('/actors/crear', {
            templateUrl:'views/publicarActor.html',
            controller:'PubActorCtrl'
        })
        .when('/actor/:actorId/', {
            templateUrl:'views/verActor.html',
            controller:'VerActorCtrl.js'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          })
        .otherwise({
            redirectTo: '/home'
          });
    });

})();
