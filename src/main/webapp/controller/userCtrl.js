app.controller("userCtrl",function($scope,$http){
	$http.get("../resources/user/users.json").success(function(data){
		$scope.users = data.users;
	});
});