app.controller("gpsCtrl",function($scope,$http){
	$http.get("../resources/location/GPS.json").success(function(data){
		$scope.GPSS = data.GPSS;
	});
});