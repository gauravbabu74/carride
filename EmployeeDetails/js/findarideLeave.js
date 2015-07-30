(function () {
    'use strict';

    var controllerId = 'findarideLeave';
    angular.module('carRidingApp').controller(controllerId, ['$state', '$scope', '$stateParams','$location','$http', 'carService', findarideLeave]);
    function findarideLeave($state, $scope, $stateParams,$location,$http,carService) {

        $scope.cities = carService.all();
        $scope.addressModelLeave= sessionStorage.getItem("addressModelLeave");
    }
    angular.module('carRidingApp').directive('autoleave', function ($location) {
        return {
            scope: {
                addressModel: '=',
                latModel: '=',
                lngModel: '='
            },
            require: '^form',
            link: function (scope, element, attrs, ctrl) {
                // Add a helper element invoke the Place Services
                var helperId = element.attr('id') + '_helper';
                $('<input type="hidden" id="' + helperId + '">').insertAfter(element);

                element.on('keyup paste change', function () {
                    if (element.val() !== scope.addressModel) {
                        scope.$parent.$apply(function () {
                            scope.addressModel = null;
                            scope.latModel = null;
                            scope.lngModel = null;
                            scope.fromSelection = false;
                        });
                    }
                });

                ctrl.$setValidity('choiced', false);
                // Flag to inform when the result is from the user selection instead of the prediction
                scope.fromSelection = false;

                if (scope.addressModel) {
                    element.val(scope.addressModel);
                }
                var options = {
                	componentRestrictions: {country: 'IN'},
                };
                var autocomplete = new google.maps.places.Autocomplete(element[0],options);
                google.maps.event.addListener(autocomplete, 'place_changed', function () {
                    scope.fromSelection = true;

                    scope.$parent.$apply(function () {
                        var place = autocomplete.getPlace();
                        if (!!place.geometry) {
                            ctrl.$setValidity('choiced', true);
                            scope.fromSelection = true;
                            scope.latModel = place.geometry.location.lat();
                            scope.lngModel = place.geometry.location.lng();
                            scope.addressModel = element.val();
                            sessionStorage.setItem("latModelLeave", scope.latModel);
                            sessionStorage.setItem("lngModelLeave", scope.lngModel);
                            sessionStorage.setItem("addressModelLeave", scope.addressModel);
                            $location.url('/findaride');
                        }
                    });
                });
                
            }
        };
});
    
})();