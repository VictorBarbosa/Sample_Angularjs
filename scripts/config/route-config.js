angular.module('app').config(function($routeProvider){
   
$routeProvider.when("/",{
    templateUrl:'views/user/list.html'
}).when("/new",{
    templateUrl:'views/user/new.html'
})
})