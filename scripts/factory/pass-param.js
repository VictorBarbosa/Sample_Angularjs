angular.module('app').factory('passParam', function () {
    var data = null;
    return {
        getPerson: function () {
            return data;
        },
        setPerson: function (person) {
            data  = person;
        }
    };
});

