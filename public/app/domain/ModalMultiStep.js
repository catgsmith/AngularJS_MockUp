angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap', 'multiStepForm']);
angular.module('ui.bootstrap.demo').controller('ModalDemoCtrl', function ($scope, $modal, $log) {
	
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

	$scope.animationsEnabled = true;

	$scope.open = function (size) {

		var modalInstance = $modal.open({
		  animation: $scope.animationsEnabled,
		  templateUrl: 'myModalContent.html',
		  controller: 'ModalInstanceCtrl',
		  size: size,
		  resolve: {
			steps: function () {
			  return $scope.steps;
			}
		  }
    });

    modalInstance.result.then(function (model) {
		$scope.model = model;
		//console.log("ModalDemoCtrl Model: "+ JSON.stringify(model));
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($scope, $modalInstance, steps) {
	
	$scope.steps = steps;

	$scope.model = {};	
  
  $scope.ok = function () {
    $modalInstance.close($scope.model);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})
.controller('IsolatedStepCtrl', [
    '$scope',
    'multiStepFormScope',
    function ($scope, multiStepForm) {

        $scope.model = angular.copy(multiStepForm.model);

        $scope.$on('$destroy', function () {
            multiStepForm.model = angular.copy($scope.model);
			console.log("Model destroy: "+ JSON.stringify($scope.model));
			console.log("destroy");
        });
    }]	
);
