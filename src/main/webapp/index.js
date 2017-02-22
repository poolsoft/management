var app = angular.module("myApp",['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
    .when('/user', {
        templateUrl: 'html/user/usertable.html',
        controller: 'userCtrl'
    })
    .when('/ibeacon', {
        templateUrl: 'html/location/IBeacontable.html',
        controller: 'ibeaconCtrl'
    })
    .when('/gps',{
    	templateUrl: 'html/location/GPStable.html',
    	controller: 'gpsCtrl'
    })
    .when('/car',{
    	templateUrl: 'html/car/cartable.html',
    	controller: 'carCtrl'
    })
    .when('/map',{
    	templateUrl: 'html/map/map.html',
    	controller: 'mapCtrl'
    })
    .when('/barchart',{
    	templateUrl: 'html/charts/barchart.html',
    	controller: 'barchartCtrl'
    })
    .when('/piechart',{
    	templateUrl: 'html/charts/piechart.html',
    	controller: 'peichartCtrl'
    })
    .when('/dashboard',{
    	templateUrl: 'html/dashboard/dashboard.html',
//    	controller: 'dashboardCtrl',
    })
    .when('/charts',{
    	redirectTo: '/barchart'
    })
    .otherwise({
        redirectTo: '/user'
    });
});