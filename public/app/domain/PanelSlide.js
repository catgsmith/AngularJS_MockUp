var app = angular.module('app');

app.controller('MyController', function ($scope, $window) {
}
app.directive('vehicle', function(domain, dataService) {
    return {
        // scope: {},
        restrict: 'E',
        templateUrl: '/app/categories/checks/index.html',
        link: function(scope) {

            scope.jobList = JSON.parse(data); 
			scope.appName = domain.appName;
            scope.vehicleJob = dataService.getVehicleJob();
			//console.log('List:'+ JSON.stringify(vm.vehicleJob));           
        }
    };
});

});