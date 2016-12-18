angular.module('app').config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: 'views/user/list.html'
    }).when("/list", {
        templateUrl: 'views/user/list.html'
    }).when("/new", {
        templateUrl: 'views/user/new.html'
    }).otherwise({
        templateUrl: 'views/pageError.html'
      });// if page not found
})