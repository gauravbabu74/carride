(function () {
    'use strict';

    var controllerId = 'employeeDetails';
    angular.module('employeeDetailsApp').controller(controllerId, ['$state','$scope','employeeService', employeeDetails]);
    function employeeDetails($state, $scope, employeeService) {
        $scope.employees = employeeService.all();
    }
})();