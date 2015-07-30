(function () {
    'use strict';

    var controllerId = 'offeraride';
    angular.module('carRidingApp').controller(controllerId, ['$state', '$scope', '$stateParams', 'carService', offeraride]);
    function offeraride($state, $scope, $stateParams, carService) {
        console.log($stateParams);
        $scope.offeraride = "This is offer a ride page.";
    }
})();