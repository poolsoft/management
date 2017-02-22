app.controller("mapCtrl",function($timeout){
// 		function initmap(){
		var centerPoint = [31.1707739,121.406607];
		var map = L.map('leafletMap').setView(centerPoint, 19);
		
		var aerial = new L.tileLayer("../resources/Tiles/{z}/{x}/{y}.png", {
    		maxZoom: 21,
    		minZoom: 8,
		});
		aerial.addTo(map);
		
		L.control.scale().addTo(map);//添加比例尺
// 		}
	
	
// 		$timeout(function(){
// 			initmap();
// 		}, 100);
});