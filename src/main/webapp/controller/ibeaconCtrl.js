app.controller("ibeaconCtrl",function($scope,$http){
	$scope.isShow = false;
	$scope.master = {};
	$http.get("../resources/location/IBeacon.json").success(function(data){
		$scope.ibeacons = data.ibeacons;
	});
});

app.directive("edit",function($document){
	return{
		restrict:"E",
		require:"ngModel",
		link:function(scope,element,attrs,ngModel){
			element.bind("click",function(){
				scope.$apply(function(){
					scope.master = angular.copy(ngModel.$modelValue);
					scope.isShow = true;
				});
				var id = "input" + ngModel.$modelValue.ibeaconID;
				console.log(id);
				var obj = $("."+id);
				obj.removeClass("inactive");
				obj.addClass("active");
				obj.attr("readonly",false);
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
				var id = "input" + ngModel.$modelValue.ibeaconID;
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
				var id = ngModel.$modelValue.ibeaconID;
				console.log(id);
				scope.$apply(function(){
					for(var i = 0;i<scope.ibeacons.length;i++){
						if(scope.ibeacons[i].ibeaconID==id){
							scope.ibeacons.splice(i,1);
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