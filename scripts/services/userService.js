angular.module('app').service('userService', function ($http) {
    var productList = [];

    var url = 'http://victorbarbosa-com-br.web04.redehost.net/api/Users';
    //Get All
    var GetAll= function () {
        var config = {
            headers: {
                "cache-control": "no-cache",
                "postman-token": "5dd953aa-024b-44b3-02f6-b81ff51fbb55"
            }
        };
        return $http.get(url, config);
    };
//Add
    var Add = function (newUser) {
        debugger
        $http.post(url,  newUser).success(function (retorno) {
            debugger
        }).error(function (erro) {
            debugger
            console.log(erro);
        });
    };
    var  Update = function (newUser) {
        $http.post('http://victorbarbosa-com-br.web04.redehost.net/api/update', newUser).success(function (retorno) {
            debugger
        }).error(function (erro) {
            debugger
            console.log(erro);
        });
    };
    var GetById = function (id) {
        return $http.get('http://victorbarbosa-com-br.web04.redehost.net/api/Users/' + id);
    };
    var Delete = function (id) {
        return $http
            .get('http://victorbarbosa-com-br.web04.redehost.net/api/delete/?Id=' + id)
           .success(function (retorno) {
                debugger
            }).error(function (erro) {
                debugger
                console.log(erro);
            });

    };

    return {
        Add: Add,
        Update: Update,
        GetAll: GetAll,
        GetById: GetById,
        Delete: Delete,
    };

})
