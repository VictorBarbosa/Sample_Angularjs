var ang = angular.module('app', []);
ang.controller('control', function ($scope) {
    $scope.People = [
        { age: 29, name: "Victor Barbosa" },
        { age: 44, name: "Justin Trudeau" },
        { age: 69, name: "Stephen King" }
    ]
    $scope.Add = function (name, age) {
        $scope.People.push({ name: name, age: age })
    }
    $scope.Delete = function (index) {
        $scope.People.pop(index)
    }
})