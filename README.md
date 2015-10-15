# AngularJS_MockUp
AngularJS_MockUp
This is a sandbox project set up to tryout angular UI components. (see directory called different_versions_of_index_html)
Just swop one of these for index.html to try out the sample code.
In particular the angular-multi-step-form provided by: https://github.com/troch/angular-multi-step-form


## Requirements

- Angular 1.3+



## Getting started
Make sure you have node installed; 

```sh
$ node --version
```
If you haven't already done so you need to install the node dependencies by running:
```sh
$ npm install
```	
Install bower components (dependancies listed in bower.json) into the `public` directory.
   Note: bower components will be installed in folder lib (see AngularJS_MockUp/.bowerrc)
   
```sh
$ cd public
$ bower install
```
   
## To run application:
To see the app running in a browser, open a separate terminal/command line tab or window, then run `node server.js` to start the web server. Now, open a browser window for the app and navigate to `http://localhost:3000`  
```sh
$ node server.js
```	
