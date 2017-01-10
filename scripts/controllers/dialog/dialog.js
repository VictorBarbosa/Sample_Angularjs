angular.module('app').controller('dialogControl', function ($scope, ngAlert) {
    $scope.Alert = function () {
ngAlert.Alert("Mesage here");
    };
    $scope.Alert_Sucess = function () {
ngAlert.Alert_Sucess("Mesage here");
    };
    $scope.Alert_Error = function () {
ngAlert.Alert_Error("Mesage here");
    };
    $scope.Alert_Attention = function () {
ngAlert.Alert_Attention("Mesage here");
    };
    $scope.Alert_Neutro = function () {
ngAlert.Alert_Neutro("Mesage here");
    };
});


