(function () {
    'use strict';

    var serviceId = 'employeeService';
    angular.module('employeeDetailsApp').factory(serviceId, [employeeService]);

    function employeeService() {
       
        var employeeList = [
            { id:'1001', name: 'John', lastName: 'Theison', age: 32, Address: 'Towson,MD' },
            { id: '1002', name: 'Scott', lastName: 'Weddle', age: 40, Address: 'Parkville,MD' },
            { id: '1003', name: 'Adam', lastName: 'Sandler', age: 32, Address: 'Huntvalley,MD' }
        ];

        function all() {
            return employeeList;
        }

        function getEmployee(id) {
            return _.find(employeeList, function (employee) {
                return employee.id === id;
            });
        }
        return {
            all: all,
            getEmployee:getEmployee
        }
    };
})();