app.controller("ibeaconCtrl",function($scope,$http){
	$http.get("../resources/location/IBeacon.json").success(function(data){
		$scope.ibeacons = data.ibeacons;
	});
});