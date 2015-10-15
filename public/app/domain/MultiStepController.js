
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp', ['ngAnimate','multiStepForm'])


// our controller for the form
// =============================================================================
.controller('formController', function($scope) {
	$scope.name = "Catherine";
	
	$scope.cancel = function () {
		alert('Cancel has been called. You are going to be redirected home!');
		console.log("cancelled! $location.path('/home')");
		//$location.path('/home');
	};
		
	$scope.finish = function () {
		alert('Finish has been called. You are going to be redirected home now!');
		console.log("finished! $location.path('/home')");
		//$location.path('/home');
	};
	
	
	$scope.customers = [{
		name: 'Naomi',
		address: '1600 Amphitheatre'
	  }, {
		name: 'Peter',
		address: '1601 Amphitheatre'
	  },{
		name: 'John',
		address: '1603 Amphitheatre'
	  }];
	
	$scope.model = {};
	
	$scope.steps = [
		{
			templateUrl: 'forms/steps/step1.html',
			title: 'Saving data'
		},
		{
			templateUrl: 'forms/steps/step2.html',
			hasForm: true,
			title: 'Using scope inheritence'
		},
		{
			templateUrl: 'forms/steps/step3.html',
			hasForm: true,
			isolatedScope: true,
			controller: 'IsolatedStepCtrl',
			title: 'Isolated step scopes'
		},
		{
			templateUrl: 'forms/steps/step4.html',
			title: 'Your name is...'
		}
	];
})

.controller('IsolatedStepCtrl', [
    '$scope',
    'multiStepFormScope',
    function ($scope, multiStepForm) {
		$scope.cancel = function () {
			alert('Cancel has been called. You are going to be redirected home!');
			console.log("cancelled! $location.path('/home')");
			//$location.path('/home');
		};
			
		$scope.finish = function () {
			alert('Finish has been called. You are going to be redirected home now!');
			console.log("finished! $location.path('/home')");
			//$location.path('/home');
		};
        $scope.model = angular.copy(multiStepForm.model);

        $scope.$on('$destroy', function () {
            multiStepForm.model = angular.copy($scope.model);
			console.log("destroy");
        });
    }
]);



