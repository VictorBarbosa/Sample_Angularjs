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
    $scope.colors = [
     {name:'black',  },
     {name:'black',  },
     {name:'white',  },
     {name:'white',  },
     {name:'red',    },
     {name:'red',    },
     {name:'yellow', },
     {name:'yellow', }
];

 $scope.list = [
        { 'name' : "ipad" },
        { 'name' : "ipad" },
        { 'name' : "ipad" },
        { 'name' : "ipod" },
        { 'name' : "iMac" },
        { 'name' : "iMac" },
        { 'name' : "iMac" },
        { 'name' : "iPhone" },
        { 'name' : "iWatch" },
        { 'name' : "iWatch" },
        { 'name' : "iWatch" },
        { 'name' : "iPeed" }
        ];
    $scope.Delete = function (index) {
        $scope.People.pop(index)
    }
})
 