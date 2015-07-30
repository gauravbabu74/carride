angular.module('carRidingApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
     .state('mainpageview', {
         url: "/mainpageview",
         templateUrl: "templates/mainpageview.html"
      })
    .state('findaride', {
        url: "/findaride",
        templateUrl: "templates/findaride.html"
    })
    .state('findarideGo', {
        url: "/findarideGo",
        templateUrl: "templates/findarideGo.html"
    })
    .state('findarideLeave', {
        url: "/findarideLeave",
        templateUrl: "templates/findarideLeave.html"
    })
    .state('offeraride', {
        url: "/offeraride",
        templateUrl: "templates/offeraride.html"
    })
    $urlRouterProvider.otherwise('/mainpageview');
       
});