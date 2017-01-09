
angular.module('app').filter('specificSearce', function () {
    return function (collection, keyname) {
        var output=[];
        if (keyname == null) {
            return collection
        } else {
                  return  collection.filter(x=> x.Country==keyname.Country)
        }
      
    };
});