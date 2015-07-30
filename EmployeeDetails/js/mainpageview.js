(function () {
    'use strict';

    var controllerId = 'carRidingMainView';
    angular.module('carRidingApp').controller(controllerId, ['$state','$scope','carService', carRidingMainView]);
    function carRidingMainView($state, $scope, carService) {
        $scope.cars = carService.all();
    }
})();