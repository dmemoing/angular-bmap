angular.module('typhoon.services')
.service('Typhoon', function () {
	var pointsArray = [];
	
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