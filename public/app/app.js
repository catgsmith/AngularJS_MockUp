(function() {

    var app = angular.module('app', ['ui.bootstrap']);


    app.provider('domain', function() {

		/* EXPOSE SOME CONFIGURATION Pts */
		var includeVersionInTitle = false;
        this.setIncludeVersionInTitle = function (value) {
            includeVersionInTitle = value;
        };



    	// PROVIRER COMES WITH GET FUNCTION
        this.$get = function () {

            var appName = 'Vehicle';
            var appDesc = 'Tracker';
            var version = '1.0';

            if (includeVersionInTitle) {
            	appName += ' ' + version;
            }

            return {
                appName: appName,
                appDesc: appDesc
            };
        };
	});


    // framework names domainProvider from provider('domain') - appends Provider 
    app.config(function(domainProvider) {
    	domainProvider.setIncludeVersionInTitle(true); // controll the provider here!

    });

}());