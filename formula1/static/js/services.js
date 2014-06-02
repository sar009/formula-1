angular.module('f1.services', []).factory('ergastAPIservice', function($http) {
	var ergastAPI = {};
	ergastAPI.getDrivers = function(year) {
		return $http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/' + year + '/driverStandings.json?callback=JSON_CALLBACK'
		});
	}
	ergastAPI.getTeams = function(year) {
		return $http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/' + year + '/constructorstandings.json?callback=JSON_CALLBACK'
		});
	}
	ergastAPI.getRaces = function(year) {
		return $http({
			method: 'JSONP', 
			url: 'http://ergast.com/api/f1/' + year + '.json?callback=JSON_CALLBACK'
		});
	}
	return ergastAPI;
});