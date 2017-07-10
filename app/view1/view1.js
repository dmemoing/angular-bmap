'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])
	
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/typhoon', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])
	
	.controller('View1Ctrl', ['$timeout', '$interval', '$scope', '$http', '$filter', function ($timeout, $interval, $scope, $http, $filter) {
		
		
		$timeout(function () {
			$scope.typhoon = {};
			$scope.typhoon.name = "莫兰蒂";
			$scope.show = false;
			
			var height = $("#warning-panel").height();
			$("#warning-panel").height(height);
			$("#info-panel").height(height);
			
			$scope.show = true;
			
			$scope.chart_resize = function () {
				chartCity.forEach(function (chart) {
					chart.resize();
				})
			};
			
			var rainData = [
				["2016/06/28 00:00", 0.5, 8.21],
				["2016/06/28 02:00", 0.5, 8.16],
				["2016/06/28 04:00", 0.5, 8.12],
				["2016/06/28 06:00", 0.5, 8.14],
				["2016/06/28 08:00", 0.5, 8.30],
				["2016/06/28 10:00", 0.5, 8.36],
				["2016/06/28 12:00", 3.0, 8.39],
				["2016/06/28 14:00", 0.5, 8.36],
				["2016/06/28 16:00", 0.5, 8.32],
				["2016/06/28 18:00", 0.5, 8.32],
				["2016/06/28 20:00", 0.5, 8.57],
				["2016/06/28 22:00", 0.5, 8.72],
				["2016/06/29 00:00", 0.5, 8.72],
				["2016/06/29 02:00", 0.5, 8.69],
				["2016/06/29 04:00", 0.5, 8.64],
				["2016/06/29 06:00", 0.5, 8.61],
				["2016/06/29 08:00", 0.5, 8.69],
				["2016/06/29 10:00", 1.0, 8.82],
				["2016/06/29 12:00", 1.0, 8.84],
				["2016/06/29 14:00", 1.0, 8.83],
				["2016/06/29 16:00", 1.0, 8.79],
				["2016/06/29 18:00", 1.0, 8.77],
				["2016/06/29 20:00", 2.0, 8.98],
				["2016/06/29 22:00", 1.0, 9.22],
				["2016/06/30 00:00", 1.5, 9.23],
				["2016/06/30 02:00", 0.5, 9.22],
				["2016/06/30 04:00", 0.5, 9.15],
				["2016/06/30 06:00", 0.5, 9.10],
				["2016/06/30 08:00", 0.5, 9.08],
				["2016/06/30 10:00", 0.5, 9.25],
				["2016/06/30 12:00", 0.5, 9.30],
				["2016/06/30 14:00", 4.0, 9.28],
				["2016/06/30 16:00", 7.5, 9.29],
				["2016/06/30 18:00", 5.0, 9.23],
				["2016/06/30 20:00", 2.5, 9.24],
				["2016/06/30 22:00", 5.5, 9.62],
				["2016/07/01 00:00", 2.0, 9.66],
				["2016/07/01 02:00", 1.0, 9.65],
				["2016/07/01 04:00", 13.5, 9.56],
				["2016/07/01 06:00", 41.5, 9.51],
				["2016/07/01 08:00", 21.0, 9.47],
				["2016/07/01 10:00", 12.5, 9.58],
				["2016/07/01 12:00", 13.5, 9.69],
				["2016/07/01 14:00", 10.0, 9.66],
				["2016/07/01 16:00", 4.5, 9.64],
				["2016/07/01 18:00", 5.0, 9.59],
				["2016/07/01 20:00", 15.5, 9.54],
				["2016/07/01 22:00", 3.0, 9.85],
				["2016/07/02 00:00", 0.5, 9.96],
				["2016/07/02 02:00", 0.5, 9.91],
				["2016/07/02 04:00", 0.5, 9.84],
				["2016/07/02 06:00", 0.5, 9.76],
				["2016/07/02 08:00", 0.5, 9.69],
				["2016/07/02 10:00", 1.0, 9.66],
				["2016/07/02 12:00", 1.0, 9.81],
				["2016/07/02 14:00", 1.0, 9.78],
				["2016/07/02 16:00", 1.0, 9.72],
				["2016/07/02 18:00", 1.0, 9.65],
				["2016/07/02 20:00", 2.0, 9.57],
				["2016/07/02 22:00", 1.0, 9.64],
				["2016/07/03 00:00", 1.5, 9.96],
				["2016/07/03 02:00", 0.5, 9.92],
				["2016/07/03 04:00", 4.0, 9.83],
				["2016/07/03 06:00", 1.5, 9.73],
				["2016/07/03 08:00", 0.5, 9.64],
				["2016/07/03 10:00", 0.5, 9.57],
				["2016/07/03 12:00", 0.5, 9.73],
				["2016/07/03 14:00", 0.5, 9.76],
				["2016/07/03 16:00", 0.5, 9.71],
				["2016/07/03 18:00", 0.5, 9.64],
				["2016/07/03 20:00", 4.0, 9.59],
				["2016/07/03 22:00", 7.5, 9.55],
				["2016/07/04 00:00", 5.0, 9.91],
				["2016/07/04 02:00", 2.5, 9.94],
				["2016/07/04 04:00", 5.5, 9.87],
				["2016/07/04 06:00", 10.5, 9.78],
				["2016/07/04 08:00", 9.5, 9.68],
				["2016/07/04 10:00", 8.5, 9.62],
				["2016/07/04 12:00", 2.0, 9.70],
				["2016/07/04 14:00", 2.5, 9.78],
				["2016/07/04 16:00", 3.0, 9.74],
				["2016/07/04 18:00", 1.5, 9.68],
				["2016/07/04 20:00", 16.0, 9.61],
				["2016/07/04 22:00", 5.0, 9.55],
				["2016/07/05 00:00", 15.0, 9.80],
				["2016/07/05 02:00", 28.0, 9.91],
				["2016/07/05 04:00", 0.5, 9.86],
				["2016/07/05 06:00", 0.5, 9.77],
				["2016/07/05 08:00", 0.5, 9.67],
				["2016/07/05 10:00", 0.5, 9.59],
				["2016/07/05 12:00", 3.0, 9.59],
				["2016/07/05 14:00", 0.5, 9.75],
				["2016/07/05 16:00", 0.5, 9.73],
				["2016/07/05 18:00", 0.5, 9.66],
				["2016/07/05 20:00", 0.5, 9.58],
				["2016/07/05 22:00", 0.5, 9.51],
				["2016/07/06 00:00", 0.5, 9.62],
				["2016/07/06 02:00", 0.5, 9.84],
				["2016/07/06 04:00", 0.5, 9.81],
				["2016/07/06 06:00", 2.5, 9.75],
				["2016/07/06 08:00", 1.0, 9.64],
				["2016/07/06 10:00", 0.5, 9.56],
				["2016/07/06 12:00", 0.5, 9.51],
				["2016/07/06 14:00", 0.5, 9.64],
				["2016/07/06 16:00", 0.5, 9.66],
				["2016/07/06 18:00", 0.5, 9.62],
				["2016/07/06 20:00", 0.5, 9.54],
				["2016/07/06 22:00", 0.5, 9.48],
				["2016/07/07 00:00", 5.0, 9.46],
				["2016/07/07 02:00", 2.5, 9.69],
				["2016/07/07 04:00", 5.5, 9.71],
				["2016/07/07 06:00", 10.5, 9.67],
				["2016/07/07 08:00", 9.5, 9.59],
				["2016/07/07 10:00", 8.5, 9.50],
				["2016/07/07 12:00", 2.0, 9.43],
				["2016/07/07 14:00", 2.5, 9.49],
				["2016/07/07 16:00", 3.0, 9.57],
				["2016/07/07 18:00", 1.5, 9.54],
				["2016/07/07 20:00", 2.5, 9.49],
				["2016/07/07 22:00", 5.0, 9.44],
				["2016/07/08 00:00", 5.0, 9.39],
				["2016/07/08 02:00", 2.5, 9.51],
				["2016/07/08 04:00", 5.5, 9.59],
				["2016/07/08 06:00", 6.0, 9.57],
				["2016/07/08 08:00", 9.5, 9.52],
				["2016/07/08 10:00", 8.5, 9.45],
				["2016/07/08 12:00", 2.0, 9.38],
				["2016/07/08 14:00", 2.5, 9.38],
				["2016/07/08 16:00", 3.0, 9.48],
				["2016/07/08 18:00", 1.5, 9.50],
				["2016/07/08 20:00", 8.0, 9.46],
				["2016/07/08 22:00", 5.0, 9.42],
				["2016/07/09 00:00", 5.0, 9.37],
				["2016/07/09 02:00", 2.5, 9.39],
				["2016/07/09 04:00", 5.5, 9.48],
				["2016/07/09 06:00", 10.5, 9.51],
				["2016/07/09 08:00", 9.5, 9.47],
				["2016/07/09 10:00", 8.5, 9.39],
				["2016/07/09 12:00", 2.0, 9.33],
				["2016/07/09 14:00", 2.5, 9.30],
				["2016/07/09 16:00", 3.0, 9.38],
				["2016/07/09 18:00", 1.5, 9.41],
				["2016/07/09 20:00", 3.0, 9.40],
				["2016/07/09 22:00", 5.0, 9.38],
				["2016/07/10 00:00", 5.0, 9.33],
				["2016/07/10 02:00", 2.5, 9.33],
				["2016/07/10 04:00", 5.5, 9.37],
				["2016/07/10 06:00", 10.5, 9.39],
				["2016/07/10 08:00", 9.5, 9.38],
				["2016/07/10 10:00", 8.5, 9.35],
				["2016/07/10 12:00", 2.0, 9.30],
				["2016/07/10 14:00", 2.5, 9.26],
				["2016/07/10 16:00", 3.0, 9.28],
				["2016/07/10 18:00", 1.5, 9.37],
				["2016/07/10 20:00", 6.0, 9.39],
				["2016/07/10 22:00", 5.0, 9.38],
				["2016/07/11 00:00", 5.0, 9.36],
				["2016/07/11 02:00", 2.5, 9.32],
				["2016/07/11 04:00", 5.5, 9.30],
				["2016/07/11 06:00", 7.0, 9.34],
				["2016/07/11 08:00", 9.5, 9.36],
				["2016/07/11 10:00", 8.5, 9.37],
				["2016/07/11 12:00", 2.0, 9.34],
				["2016/07/11 14:00", 2.5, 9.32],
				["2016/07/11 16:00", 3.0, 9.30],
				["2016/07/11 18:00", 1.5, 9.37],
				["2016/07/11 20:00", 4.0, 9.43],
				["2016/07/11 22:00", 5.0, 9.43],
				["2016/07/12 00:00", 5.0, 9.42],
				["2016/07/12 02:00", 2.5, 9.38],
				["2016/07/12 04:00", 5.5, 9.35],
				["2016/07/12 06:00", 10.5, 9.34],
				["2016/07/12 08:00", 9.5, 9.37],
				["2016/07/12 10:00", 8.5, 9.38],
				["2016/07/12 12:00", 2.0, 9.34],
				["2016/07/12 14:00", 2.5, 9.30],
				["2016/07/12 16:00", 3.0, 9.26],
				["2016/07/12 18:00", 1.5, 9.27],
				["2016/07/12 20:00", 16.0, 9.37],
				["2016/07/12 22:00", 5.0, 9.41]
			];
			
			var rain = [];
			var water = [];
			for (var index = 0; index < rainData.length; index++) {
				var date = new Date(rainData[index][0]);
				var key = $filter("date")(date, 'yyyy/M/d HH:mm');
				rain.push({
					name: date.toString(),
					value: [key, rainData[index][1]]
				});
				water.push({
					name: date.toString(),
					value: [key, rainData[index][2]]
				})
			}
			
			var initialData = [];
			var now = +new Date("2016-09-10T14:00:00");
			var gap = 2 * 3600 * 1000;
			now = new Date(+now - 31 * gap);
			for (var index = 0; index < 30; index++) {
				now = new Date(+now + gap);
				var key = $filter("date")(now, 'yyyy/M/d HH:mm');
				//key.replace(' ', '\n');
				initialData.push({
					name: now.toString(),
					value: [key, 0]
				});
			}
			
			// function randomData() {
			// 	now = new Date(+now + oneDay);
			// 	value = value + Math.random() * 21 - 10;
			// 	return {
			// 		name: now.toString(),
			// 		value: [
			// 			[now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
			// 			Math.round(value)
			// 		]
			// 	}
			// }
			
			// var data = [];
			// var now = +new Date(1997, 9, 3);
			// var oneDay = 24 * 3600 * 1000;
			// var value = Math.random() * 1000;
			// for (var i = 0; i < 1000; i++) {
			// 	data.push(randomData());
			// }
			
			
			// var date1 = +new Date("2016-09-10T14:00:00");
			// var date2 = +new Date("2016-09-10T16:00:00");
			// console.log((date2 - date1)/(3600 * 1000));
			
			var option = {
				title: {
					text: '动态数据 + 时间坐标轴',
					textStyle: {
						fontWeight: 'normal',
						fontSize: 15
					}
				},
				tooltip: {
					trigger: 'axis',
					formatter: function (params) {
						params = params[0];
						var date = new Date(params.name);
						return $filter("date")(date, 'M/d HH:mm') + '<br/>' + params.seriesName + ' : ' + params.value[1];
					},
					axisPointer: {
						animation: false
					}
				},
				grid: [{
					left: '3%',
					bottom: '3%',
					containLabel: true
				}],
				xAxis: {
					type: 'time',
					splitLine: {
						show: false
					},
					axisLabel: {
						formatter: function (value) {
							return $filter("date")(new Date(value), 'H');
						},
						textStyle: {
							fontSize: 8
						}
					}
				},
				yAxis: {
					type: 'value',
					boundaryGap: [0, '100%'],
					splitLine: {
						show: true
					}
				},
				series: [{
					name: '模拟数据',
					type: 'line',
					showSymbol: false,
					hoverAnimation: false,
					data: initialData
				}]
			};
			
			var option1 = {
				title: {
					text: '城市',
					textStyle: {
						fontWeight: 'normal',
						fontSize: 15
					}
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				grid: {
					left: '3%',
					right: '5%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					type: 'time',
					splitLine: {
						show: false
					},
					axisLabel: {
						formatter: function (value) {
							return $filter("date")(new Date(value), 'H');
						},
						textStyle: {
							fontSize: 8
						}
					}
				}],
				yAxis: [{
					type: 'value',
					name: "水位(m)",
					max: 25
				}],
				series: [{
					name: '水位',
					type: 'line',
					label: {
						normal: {
							show: true,
							position: 'top'
						}
					},
					areaStyle: {normal: {color: '#72ccff'}},
					lineStyle: {normal: {color: '#72ccff'}},
					itemStyle: {normal: {color: '#72ccff'}},
					data: []
				}]
			};
			
			var chart4 = echarts.init(document.getElementById('grid4'), 'chalk');
			option.title.text = "最大风力";
			option.series[0].name = "最大风力";
			option.yAxis.name = "级";
			option.yAxis.max = 25;
			var chart4Data = JSON.parse(JSON.stringify(initialData));
			option.series[0].data = chart4Data;
			chart4.setOption(option);
			
			var chart1 = echarts.init(document.getElementById('grid1'), 'chalk');
			option.title.text = "最大风速";
			option.series[0].name = "最大风速";
			option.yAxis.name = "m/s";
			option.yAxis.max = 80;
			var chart1Data = JSON.parse(JSON.stringify(initialData));
			option.series[0].data = chart1Data;
			option.series[0].lineStyle = {
				normal: {
					color: "#87f7cf"
				}
			};
			chart1.setOption(option);
			
			var chart2 = echarts.init(document.getElementById('grid2'), 'chalk');
			option.title.text = "中心气压";
			option.series[0].name = "中心气压";
			option.yAxis.name = "hpa";
			option.yAxis.max = 1200;
			var chart2Data = JSON.parse(JSON.stringify(initialData));
			option.series[0].data = chart2Data;
			option.series[0].lineStyle = {
				normal: {
					color: "#72ccff"
				}
			};
			chart2.setOption(option);
			
			var chart3 = echarts.init(document.getElementById('grid3'), 'chalk');
			option.title.text = "移动速度";
			option.series[0].name = "移动速度";
			option.yAxis.name = "km/h";
			option.yAxis.max = 40;
			var chart3Data = JSON.parse(JSON.stringify(initialData));
			option.series[0].data = chart3Data;
			option.series[0].lineStyle = {
				normal: {
					color: "#d4a4eb"
				}
			};
			chart3.setOption(option);
			
			
			function initNanjing() {
				var njRData = rain.slice(0, 30);
				var njWData = water.slice(0, 30);
				var nanjing = echarts.init(document.getElementById("city6"), 'chalk');
				nanjing.setOption(option1);
				nanjing.setOption({
					title: {
						text: "南京"
					},
					series: [{
						data: njWData
						}]
				});
				var tag = 30;
				setInterval(function () {
					if (tag === rain.length) {
						njRData = rain.slice(0, 30);
						njWData = water.slice(0, 30);
						tag = 30;
					} else {
						njRData.shift();
						njRData.push(rain[tag]);
						njWData.shift();
						njWData.push(water[tag]);
					}
					nanjing.setOption({
						series: [{
							data: njWData
						}]
					});
					tag++;
				}, 500);
			}
			
			initNanjing();
			
			var chartCity = [];
			var domCity = [];
			for (var index = 1; index < 6; index++) {
				var idd = "city" + index;
				domCity.push(document.getElementById(idd));
				var chart = echarts.init(domCity[index - 1], 'chalk');
				chart.setOption(option1);
				chartCity.push(chart);
				domCity[index - 1].classList.toggle("hidden");
			}
			
			
			// 百度地图API功能
			var map = new BMap.Map("allmap", {mapType: BMAP_HYBRID_MAP});    // 创建Map实例
			map.centerAndZoom(new BMap.Point(129.26, 26.88), 6);  // 初始化地图,设置中心点坐标和地图级别
			//map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
			map.setMapStyle({style: 'grayscale'});
			//map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
			map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			
			
			var city = {
				"厦门": [118.09567, 24.50259],
				"香港": [114.177046, 22.282374],
				"福州": [119.305293, 26.095614],
				"南昌": [115.862698, 28.686939],
				"长沙": [112.928329, 28.227607],
				"广州": [113.26638, 23.135838],
				"三明": [117.667933, 26.254363],
				"九江": [116.007577, 29.727045],
				"景德镇": [117.180405, 29.292528],
				"上饶": [117.953091, 28.474799],
				"黄山": [118.344034, 29.739088],
				"汕头": [116.688277, 23.378082],
				"泉州": [118.688983, 24.901774],
				"杭州": [120.160767, 30.280503],
				"合肥": [117.230997, 31.82479],
				"南京": [118.803966, 32.064029],
				"马鞍山": [118.514209, 31.671505],
				"扬州": [119.420276, 32.404149],
				"上海": [121.478473, 31.237785]
			};
			
			var cityPoints = {};
			for (var prop in city) {
				cityPoints[prop] = new BMap.Point(city[prop][0], city[prop][1]);
			}
			
			var greenIcon = new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
				scale: 1,//图标缩放大小
				fillColor: "#faf427",//填充颜色
				fillOpacity: 1,//填充透明度
				strokeOpacity: 0.1
			});
			
			var redIcon = new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
				scale: 1,//图标缩放大小
				fillColor: "#fa1121",//填充颜色
				fillOpacity: 1,//填充透明度
				strokeOpacity: 0.1
			});
			
			var markers = {};
			for (var prop in cityPoints) {
				var marker = new BMap.Marker(cityPoints[prop]);
				map.addOverlay(marker);
				marker.hide();
				markers[prop] = marker;
			}
			
			
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
			
			function dataFormat(date, data) {
				var newDate = new Date(date);
				var key = $filter("date")(newDate, 'yyyy/M/d HH:mm');
				return {
					name: newDate.toString(),
					value: [key, data]
				}
			}
			
			$http.get('lib/Meranti.json').success(function (data) {
				var dataPoints = data[0].points;
				var pointsArray = [];
				dataPoints.forEach(function (point) {
					var lv = level(point.strong);
					pointsArray.push([lv, new BMap.Point(point.longitude, point.latitude), point.radius7, point.radius10,
						point.radius12, point.power, point.speed, point.pressure, point.move_speed, point.time, point.strong]);
				});
				
				//设置地图平移到台风起点
				map.panTo(pointsArray[0][1]);
				
				//设置台风路径点数组
				var points = [pointsArray[0][1]];
				
				//设置台风路径
				var polyline = new BMap.Polyline(points, {strokeColor: "white", strokeWeight: 2, strokeOpacity: 1});
				map.addOverlay(polyline);
				
				//设置六种不同强度台风，分别用六种颜色表示这些点
				var colors = ["red", "purple", "orange", "yellow", "blue", "green"];
				//设置六类点存储的数组以及点集存储的数组
				var colorPoints = [];
				var pointCollections = [];
				//初识化出六类点集
				colors.forEach(function (color) {
					var options = {
						size: BMAP_POINT_SIZE_SMALL,
						color: color
					};
					var pointCollection = new BMap.PointCollection([], options);  // 初始化PointCollection
					map.addOverlay(pointCollection);  // 添加Overlay
					colorPoints.push([]);
					pointCollections.push(pointCollection);
				});
				
				//初始化台风起点
				colorPoints[pointsArray[0][0]].push(pointsArray[0][1]);
				pointCollections[pointsArray[0][0]].setPoints(colorPoints[pointsArray[0][0]]);
				
				//设置台风图标
				var myIcon = new BMap.Icon("lib/typhoon.png", new BMap.Size(40, 40));
				var marker2 = new BMap.Marker(pointsArray[0][1], {icon: myIcon});  // 创建标注
				map.addOverlay(marker2);
				
				var circle1 = new BMap.Circle(pointsArray[0][1], pointsArray[0][2], {
					strokeColor: "yellow",
					strokeWeight: 1,
					strokeOpacity: 0.5,
					fillColor: "yellow",
					fillOpacity: 0.2
				}); //创建圆
				map.addOverlay(circle1);
				
				var circle2 = new BMap.Circle(pointsArray[0][1], pointsArray[0][3], {
					strokeColor: "orange",
					strokeWeight: 1,
					strokeOpacity: 0.5,
					fillColor: "orange",
					fillOpacity: 0.2
				}); //创建圆
				map.addOverlay(circle2);
				
				var circle3 = new BMap.Circle(pointsArray[0][1], pointsArray[0][4], {
					strokeColor: "purple",
					strokeWeight: 1,
					strokeOpacity: 0.5,
					fillColor: "purple",
					fillOpacity: 0.2
				}); //创建圆
				map.addOverlay(circle3);
				
				function updateCircle(index) {
					//更新圆心
					circle1.setCenter(pointsArray[index][1]);
					circle2.setCenter(pointsArray[index][1]);
					circle3.setCenter(pointsArray[index][1]);
					//更新半径
					if (pointsArray[index][2] === 0) {
						circle1.setRadius(180 * 1000);
					} else {
						circle1.setRadius(pointsArray[index][2] * 1000);
					}
					circle2.setRadius(pointsArray[index][3] * 1000);
					circle3.setRadius(pointsArray[index][4] * 1000);
					// console.log(pointsArray[index][2]);
				}
				
				var queue = [];
				var existNJ = false;
				
				function existInQueue(city) {
					var index = 0;
					for (index = 0; index < queue.length; index++) {
						if (queue[index].city === city) {
							break;
						}
					}
					return (index !== queue.length);
				}
				
				function observer(center, radius) {
					if (radius === 0) {
						radius = 180;
					}
					Object.keys(cityPoints).forEach(function (prop) {
						var distance = (map.getDistance(center, cityPoints[prop])).toFixed(0);
						distance = (distance / 1000).toFixed(0);
						if (distance < radius) {
							if ((prop === "南京") && (!existNJ)) {
								$("#warning").append(prop + "进入台风影响范围，将迎来强降雨天气。<br/>");
								markers[prop].setIcon(redIcon);
								markers[prop].show();
								existNJ = true;
								return;
							}
							if (!existInQueue(prop)) {
								if (prop === "厦门" || prop === "南昌" || prop === "杭州" || prop === "上海") {
									$("#warning").append(prop + "进入台风影响范围，将迎来强降雨天气。<br/>");
								}
								calCount--;
								markers[prop].setIcon(redIcon);
								markers[prop].show();
								var rdata = rain.slice(0, 30);
								var wdata = water.slice(0, 30);
								queue.push({
									city: prop,
									rdata: rdata,
									wdata: wdata,
									index: 30
								});
							}
						}
					});
				}
				
				var calCount = 0;
				
				function checkDistance(center, radius) {
					if (radius === 0) {
						radius = 180;
					}
					var ngDistance = (map.getDistance(center, cityPoints["南京"])).toFixed(0);
					ngDistance = (ngDistance / 1000).toFixed(0);
					if (ngDistance > radius) {
						markers["南京"].setIcon(greenIcon);
					}
					var count = queue.length - 1;
					for (var index = 0; index < queue.length; index++) {
						var city = queue[index].city;
						var distance = (map.getDistance(center, cityPoints[city])).toFixed(0);
						distance = (distance / 1000).toFixed(0);
						if (distance > radius) {
							calCount++;
							markers[city].setIcon(greenIcon);
							count--;
							clearInterval(queue[index].interval);
							queue.splice(index, 1);
							index--;
						}
					}
				}
				
				function updateInfo() {
					var num = Math.abs(calCount);
					var number = queue.length;
					var index = 0;
					//console.log(num, number);
					if (calCount > 0) {
						for (; index < num; index++) {
							domCity[number].classList.toggle("hidden");
							number++;
						}
					} else {
						number -= num;
						for (; index < num; index++) {
							domCity[number].classList.toggle("hidden");
							//chartCity[number].resize();
							number++;
						}
					}
					
					calCount = 0;
					queue.forEach(function (entry, ind) {
						if (entry.interval !== undefined) {
							clearInterval(entry.interval);
						}
						var id = setInterval(function () {
							entry.rdata.shift();
							entry.rdata.push(rain[entry.index]);
							entry.wdata.shift();
							entry.wdata.push(water[entry.index]);
							entry.index++;
							chartCity[ind].setOption({
								title: {
									text: entry.city
								},
								series: [{
										data: entry.wdata
									}]
							});
						}, 500);
						entry.interval = id;
					});
				}
				
				function job() {
					//if(count%10 === 0){
					map.panTo(pointsArray[count][1]);
					//}
					//添加点到路径点数组
					points.push(pointsArray[count][1]);
					
					// $scope.info += "<p>成灌高速-刘海霞-13213451332</p>";
					$scope.typhoon.strong = pointsArray[count][10];
					
					$scope.typhoon.power = pointsArray[count][5];
					chart4Data.shift();
					chart4Data.push(dataFormat(pointsArray[count][9], pointsArray[count][5]));
					chart4.setOption({
						series: [{
							data: chart4Data
						}]
					});
					
					$scope.typhoon.speed = pointsArray[count][6];
					chart1Data.shift();
					chart1Data.push(dataFormat(pointsArray[count][9], pointsArray[count][6]));
					chart1.setOption({
						series: [{
							data: chart1Data
						}]
					});
					
					$scope.typhoon.pressure = pointsArray[count][7];
					chart2Data.shift();
					chart2Data.push(dataFormat(pointsArray[count][9], pointsArray[count][7]));
					chart2.setOption({
						series: [{
							data: chart2Data
						}]
					});
					
					if (pointsArray[count][8] !== null) {
						$scope.typhoon.move_speed = pointsArray[count][8];
						chart3Data.shift();
						chart3Data.push(dataFormat(pointsArray[count][9], pointsArray[count][8]));
						chart3.setOption({
							series: [{
								data: chart3Data
							}]
						});
					} else {
						chart3Data.shift();
						chart3Data.push(chart3Data[28]);
						chart3.setOption({
							series: [{
								data: chart3Data
							}]
						});
					}
					
					//添加点到相应台风强度点集
					colorPoints[pointsArray[count][0]].push(pointsArray[count][1]);
					pointCollections[pointsArray[count][0]].setPoints(colorPoints[pointsArray[count][0]]);
					
					//更新路径
					polyline.setPath(points);
					//更新台风图标位置
					marker2.setPosition(pointsArray[count][1]);
					
					updateCircle(count);
					
					checkDistance(pointsArray[count][1], pointsArray[count][2]);
					observer(pointsArray[count][1], pointsArray[count][2]);
					updateInfo();
					
					if (count < (pointsArray.length - 1)) {
						var date1 = +new Date(pointsArray[count][9]);
						var date2 = +new Date(pointsArray[count + 1][9]);
						var interval = (date2 - date1) / 3600;
						if (count >= 45) {
							interval = interval * 2;
						}else{
							interval = interval / 2;
						}
						$timeout(job, interval);
					}
					
					count++;
					//如果台风绘制完成，清除定时
					if (pointsArray.length === count) {
						//添加点集点击显示台风影响范围的事件
						pointCollections.forEach(function (pointCollection) {
							pointCollection.addEventListener('click', function (e) {
								for (var ind = 0; ind < pointsArray.length; ind++) {
									if (pointsArray[ind][1] === e.point) {
										break;
									}
								}
								//console.log(pointsArray.length, ind);
								//alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
								updateCircle(ind);
							});
						});
					}
				}
				
				//开始绘制台风移动动画
				var count = 1;
				var date1 = +new Date(pointsArray[0][9]);
				var date2 = +new Date(pointsArray[1][9]);
				var interval = (date2 - date1) / 3600 / 2;
				$timeout(job, interval);
				
				$("#warning").append("台风莫兰蒂生成。<br/>");
				
			});
			
		});
	}]);