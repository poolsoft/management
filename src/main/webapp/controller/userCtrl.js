//app.controller("userCtrl",function($scope,$http){
//	$scope.master = {};
//	$scope.isShow = false;
//	$http.get("../resources/user/users.json").success(function(data){
//		$scope.users = data.users;
//		console.log($scope.users);
//	});
//});

app.controller("userCtrl",function($scope,userService){
	$scope.master = {};
	$scope.isShow = false;
	userService.getUserInfos().then(function(data){
		$scope.users = data;
	});
});


app.directive("edit",function($document){
	return{
		 restrict: "E",
		 require: "ngModel",
		 link:function(scope,element,attrs,ngModel){
			 element.bind("click",function(){
				 var id = "input" + ngModel.$modelValue.userName;
				 console.log(id);
				 var obj = $("."+id);
				 obj.removeClass("inactive");  
		         obj.addClass("active");
		         obj.removeAttr("readonly");
		         obj.focus();
//		         obj.next().removeClass("inactive");
//		         obj.next().addClass("active");
//		         obj.next().removeAttr("readonly");
		         scope.$apply(function(){
//		        	 angular.copy(scope.master,ngModel.$modelValue);
		        	 scope.master = angular.copy(ngModel.$modelValue);
		        	 scope.isShow = true;
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
				var id = "input" + ngModel.$modelValue.userName;
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
				var id = ngModel.$modelValue.userName;
//				console.log(id);
				scope.$apply(function(){
					for(var i = 0;i<scope.users.length;i++){
						if(scope.users[i].userName==id){
							scope.users.splice(i,1);
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