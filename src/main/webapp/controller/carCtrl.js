//app.controller("carCtrl",function($scope,$http){
//	$scope.master = {};
//	$scope.isShow = false;
//	$http.get("../resources/car/car.json").success(function(data){
//		$scope.cars = data.cars;
//	});
//	
//});

app.controller("carCtrl",function($scope,carService){
	$scope.master = {};
	$scope.isShow = false;
	carService.getCarInfos().then(function(data){
		console.log(data);
		$scope.cars = data;
	});
});

app.directive("edit",function($document){
	return{
		restrict:"E",
		require:"ngModel",
		link:function(scope,element,attrs,ngModel){
			element.bind("click",function(){
				var id = "input" + ngModel.$modelValue.carFrameNum;
				console.log(id);
				var obj = $("."+id);
				obj.removeClass("inactive");
				obj.addClass("active");
				obj.attr("readonly",false);
				scope.$apply(function(){
					scope.isShow = true;
					scope.master = angular.copy(ngModel.$modelValue);
				});
			});
		}
	}
});

app.directive("cancel",function($document){
	return{
		restrict:"E",
		require:"ngModel",
		link:function(scope,element,attrs,ngModel){
			element.bind("click",function(){
				scope.$apply(function(){
					angular.copy(scope.master,ngModel.$modelValue);
				});
				var id = "input" + ngModel.$modelValue.carFrameNum;
				console.log(id);
				var obj = $("."+id);
				obj.removeClass("active");
				obj.addClass("inactive");
				obj.attr("readonly",true);
				scope.$apply(function(){
					scope.isShow = false;
				});
			});
		}
	}
});

app.directive("delete",function($document){
	return{
		restrict:"E",
		require:"ngModel",
		link:function(scope,element,attrs,ngModel){
			element.bind("click",function(){
				var id = ngModel.$modelValue.carFrameNum;
				scope.$apply(function(){
					for(var i = 0;i<scope.cars.length;i++){
						if(scope.cars[i].carFrameNum==id){
							scope.cars.splice(i,1);
						}
					}
				});
				
			});
		}
	}
});

app.directive("update",function($document){
	return{
		restrict:"E",
		require:"ngModel",
		link:function(scope,element,attrs,ngModel){
			element.bind("click",function(){
				
			});
		}
	}
});