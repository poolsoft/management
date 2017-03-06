var app = angular.module("LoginApp",[]);
	app.controller("loginCtrl",function($scope,loginService){
		$scope.user = {};
		var flag = false;
		$scope.userLogin = function(){
			loginService.userLogin($scope.user).then(function(data){
				for(var i=0;i<data.users.length;i++){
					if(data.users[i].name==$scope.user.name&&data.users[i].password==$scope.user.password){
						flag = true;
						break;
					}
				}
				if(flag){
// 					addCookie("userName",$scope.user.name,2);
					localStorage.removeItem("userName");
					localStorage.userName = $scope.user.name;
					document.write(localStorage.userName);
					window.location.href="index.html";
				}else{
					$scope.errorImg="用户名或密码错误";
				}
			});
		};
		
		$scope.getFocus = function(){
			$scope.errorImg="";
		}
		
// 		$scope.login();
		
	});