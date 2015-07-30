(function () {
    'use strict';

    var serviceId = 'carService';
    angular.module('carRidingApp').factory(serviceId, ['$http',carService]);
	var CitiesData = [];
    function carService($http,carService) {
        $http.get("cities.json").success(function (data) {
            CitiesData.push(data);
        });
        function all() {
            return CitiesData[0];
        }
        return {
            all: all
        }
    };
})();