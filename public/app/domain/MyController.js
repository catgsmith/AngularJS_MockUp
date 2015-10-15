(function() {

    angular.module('app')
        .controller('MyController', MyController);


    function MyController(domain, dataService) {

        var vm = this;

        vm.appName = domain.appName;

        vm.vehicleJob = dataService.getVehicleJob();

        //console.log('List:'+ JSON.stringify(vm.vehicleJob));	

    }
	
    $("document").ready(function() {
		$("body").append("<p>The page just loaded!</p>");
	});


    //jQuery('#default_slider').jbhSlider();			

}());