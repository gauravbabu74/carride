(function () {
    'use strict';

    var controllerId = 'employee';
    angular.module('employeeDetailsApp').controller(controllerId, ['$state', '$scope', '$stateParams', 'employeeService', employee]);
    function employee($state, $scope, $stateParams, employeeService) {
        console.log($stateParams);
        $scope.employee = employeeService.getEmployee($stateParams.id);
    }
})();