(function() {

    angular.module('app')
        .factory('dataService', dataService);


    function dataService() {
        // Expose properties as API
        return {
            getVehicleJob: getVehicleJob
        };

        function getVehicleJob() {

            var images=["http://files.parsetfss.com/9a0a5deb-0537-411e-87df-ad1a42d11200/tfss-2b541f24-1c53-46fd-933e-52cce8fd45f9-defectImage.png", 
            "http://files.parsetfss.com/9a0a5deb-0537-411e-87df-ad1a42d11200/tfss-5976f3eb-7a07-41ae-893c-25c7c084d747-defectImage.png", 
            "http://files.parsetfss.com/9a0a5deb-0537-411e-87df-ad1a42d11200/tfss-93d3aa6c-d20f-46e0-9c09-cc1286c459fc-defectImage.png"];

            var vehicleJob = {fleetNo: 11, make: 'Toyota', model: 'Sprinter', reg: 'UI123 JKJ', driver:'Henry Ford', date: 1439424623006, status: 'Reviewed' };


            var jobTasks = [
            {title: 'Ligths or indicators defective', desc: 'Tail light cracked', actionTaken: 'Taped it up', start:1439425413006, mechanic: 'Phil Collins', status: 'In progress'},
            {title: 'Fluid,fuel or oil leak', desc: 'Oil leak', actionTaken: 'None', start:1439425423006, status: 'In progress'},
            {title: 'Tyre Issue', desc: 'Nearly bald', actionTaken: 'None' }];

            jobTasks[0].image = images[0];
            jobTasks[1].image = images[1];
            jobTasks[2].image = images[2];


            var comments = [
            {user: "Tom Jones", comment: "Waiting on a part from Germany", date: 1439424623006 },
            {user: "Tom Jones", comment: "Wrong part received from Supplier", date: 1439424625006 }]


            vehicleJob.jobTasks = jobTasks; 

            return vehicleJob;
        }
    }

}());