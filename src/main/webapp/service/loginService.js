app.service("loginService",function($http,$q){
		this.userLogin=function(user){
			var deferred = $q.defer();
			$http.get("../resources/user/users.json").success(function(data){
				deferred.resolve(data);
			}).error(function(){
				deferred.reject("连接失败");
			});
			
			return deferred.promise;
		}
		
	});
