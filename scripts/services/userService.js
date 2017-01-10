angular.module('app').service('userService', function ($http, ngAlert) {
    var productList = [];

    var url = 'http://victorbarbosa-com-br.web04.redehost.net/api/Users';
    //Get All
    var GetAll = function () {
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
        $http.post(url, newUser).success(function (retorno) {
            ngAlert.Alert_Sucess("Success to Save");
        }).error(function (erro) {
            ngAlert.Alert_Error("Error to Save");
            console.log(erro);
        });
    };
    var Update = function (newUser) {
        $http.post('http://victorbarbosa-com-br.web04.redehost.net/api/update', newUser).success(function (retorno) {
        ngAlert.Alert_Sucess("Success to Update") ;
       }).error(function (erro) {

            ngAlert.Alert_Error("Error to Update");
            console.log(erro);
        });
    };
    var GetById = function (id) {
        return $http.get('http://victorbarbosa-com-br.web04.redehost.net/api/Users/' + id).error(function (erro) {
            ngAlert.Alert_Error("Error :"+ erro);
            console.log(erro);
        });
    };
    var Delete = function (id) {
        return $http
            .get('http://victorbarbosa-com-br.web04.redehost.net/api/delete/?Id=' + id)
            .success(function (retorno) {
                  ngAlert.Alert_Sucess("Success to Delete") 
            }).error(function (erro) {
                ngAlert.Alert_Error("Erro to Delete")
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
});
