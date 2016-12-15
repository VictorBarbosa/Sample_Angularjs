(function() {
'use strict';
    angular.module('app')
        .filter('Filter', Filter);
    function Filter() {
        return FilterFilter;
        function FilterFilter(Params) {
            return Params;
        }
    }
})();