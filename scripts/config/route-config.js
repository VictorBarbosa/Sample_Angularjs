angular.module('app').config(function ($routeProvider    ) {
    $routeProvider.when("/", {
        templateUrl: 'views/crudAngular/index.html'
    })
     .when("/list", {
        templateUrl: 'views/crudAngular/index.html'
    })
    .when("/create", {
        templateUrl: 'views/crudAngular/create.html'
    } )
    .when("/github", {
        templateUrl: 'views/crudAngular/github.html'
    })
     .when("/crop", {
        templateUrl: 'views/crop/crop.html'
    })
     .when("/dialog", {
        templateUrl:'views/dialog/dialog.html'
    })
       .otherwise({
        templateUrl: 'views/pageError.html'
      });// if page not found
});