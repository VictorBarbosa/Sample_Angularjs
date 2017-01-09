angular.module('app').controller('userindexcontrol', function ($scope, userService, passParam) {
       userService.GetAll().success(function (retorno) {
        $scope.People = retorno;
         passParam.setPerson(null);
    });

  $scope.CreateNew = function () {
      passParam.setPerson({});
      window.location.href = '#/create';
  }
  $scope.Edit = function (person) {
    passParam.setPerson(person);
    window.location.href = '#/create';
  }
  $scope.Delete = function (person) {
    $scope.People = $scope.People.filter(function (e) {
      if (e.Id !== person.Id) return e;
    });
    userService.Delete(person.Id);
  }
}); 