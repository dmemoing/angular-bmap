angular.module('typhoon.services')
.service('Typhoon', function ($http) {
	var pointsArray = [];
	
	function level(strong) {
		switch (strong) {
			case "超强台风(Super TY)":
				return 0;
				break;
			case "强台风(STY)":
				return 1;
				break;
			case "台风(TY)":
				return 2;
				break;
			case "强热带风暴(STS)":
				return 3;
				break;
			case "热带风暴(TS)":
				return 4;
				break;
			case "热带低压(TD)":
				return 5;
				break;
			default:
				return -1;
		}
	}
	
	var promise = $http.get('lib/Meranti.json').success(function (data) {
		var dataPoints = data[0].points;
		dataPoints.forEach(function (point) {
			var lv = level(point.strong);
			pointsArray.push([lv, new BMap.Point(point.longitude, point.latitude), point.radius7, point.radius10,
				point.radius12, point.power, point.speed, point.pressure, point.move_speed, point.time, point.strong]);
		});
	});
	
	return {
		promise: promise,
		getFirst: function () {
			return pointsArray[0][1];
		}
	}
});