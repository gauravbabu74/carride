(function () {
    'use strict';

    var controllerId = 'findaride';
    angular.module('carRidingApp').controller(controllerId, ['$state', '$scope', '$stateParams','$location', 'carService', findaride]);
    function findaride($state, $scope, $stateParams,$location,carService) {
        $scope.movetofindarideLeave = function() {
        	$location.url('/findarideLeave');
        };

        $scope.movetofindarideGo = function() {
        	$location.url('/findarideGo');
            $('.leavingGo').trigger('click');
        };
        $scope.addressModelLeave= sessionStorage.getItem("addressModelLeave");
        $scope.addressModelGo= sessionStorage.getItem("addressModelGo");
        

    }
    
})();