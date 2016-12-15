var ang = angular.module('app', []);
ang.controller('control', function ($scope) {
    $scope.People = [
        { age: 29, name: "Victor Barbosa",country:"Brazil" },
        { age: 44, name: "Justin Trudeau" ,country:"Canada" },
        { age: 69, name: "Stephen King",country:"USA" }
    ]

    $scope.Add = function (value) {
        $scope.People.push(angular.copy(value))
        delete   $scope.value;
             
    }
    $scope.Delete = function (index) {
        $scope.People.pop(index)
    }
})