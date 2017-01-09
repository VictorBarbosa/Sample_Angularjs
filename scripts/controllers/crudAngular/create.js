angular.module('app').controller('usercreatecontrol', function ($scope, passParam, userService) {
    var person = passParam.getPerson();
    if (person === null || person.length > 0) {
        passParam.setPerson(person);
        $scope.Title = "New";
        $scope.TitleButton = "Save";
    } else {
        $scope.Person = person;
        $scope.Title = "Edit";
        $scope.TitleButton = "Update";
    }
    $scope.AddUpdate = function (person, TitleButton) {
        if (TitleButton == "Save") {
            Save(person);
        } else {
            Update(person);
        }
    }
    function Save(person) {
        userService.Add(person);
        window.location.href = '#/';
    }
    function Update(person) {
        var data = {
            Id: person.Id,
            Name: person.Name,
            Age: person.Age,
            Country: person.Country
        };
        userService.Update(data);
        passParam.setPerson(person);
    }
});
