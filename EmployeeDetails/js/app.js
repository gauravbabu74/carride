angular.module('employeeDetailsApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('employeelist', {
         url: "/employeelist",
         templateUrl: "templates/employeelist.html"
      })
    .state('employee', {
        url: "/employee/:id",
        templateUrl: "templates/employee.html"
    })
    $urlRouterProvider.otherwise('/employeelist');
       
});