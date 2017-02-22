app.controller("carCtrl",function($scope,$http){
	$http.get("../resources/car/car.json").success(function(data){
		$scope.cars = data.cars;
	});
});