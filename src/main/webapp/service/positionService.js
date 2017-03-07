app.service("positionSer",function($http,$q){
	this.getPositionInfos = function(){
		var deferred = $q.defer();
		$http.jsonp("http://localhost:8080/carlocation/ibeacon/getinfos.ll?callback=JSON_CALLBACK").success(function(data){
			deferred.resolve(data);
		}).error(function(){
			deferred.reject("连接失败");
		});
		
		return deferred.promise;
	}
});