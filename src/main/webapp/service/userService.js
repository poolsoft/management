app.service("userService",function($http,$q){
	this.getUserInfos = function(){
		var deferred = $q.defer();
		$http.jsonp("http://localhost:8080/carlocation/user/getinfos.ll?callback=JSON_CALLBACK").success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("连接失败");
		});
		
		return deferred.promise;
	}
});