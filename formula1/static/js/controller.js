angular.module('f1.controllers', []).controller("f1", function($scope, ergastAPIservice){
	$scope.driversList = null;
	$scope.teamsList = null;
	$scope.racesList = null;
	$scope.championshipYear = 2014;
	$scope.championshipYears = [];
	$scope.nameFilter = null;
	$scope.loader = false;
	for (var i = 2014; i > 1949; i--) {
		$scope.championshipYears.push(i);
	}
	$scope.driverFilter = function (driver) {
		var keyword = new RegExp($scope.nameFilter, 'i');
		return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
	};
	$scope.getDriversByYear = function() {
		if ($scope.championshipYear != null) {
			$scope.driversList = null;
			$scope.loader = true;
			ergastAPIservice.getDrivers($scope.championshipYear).success(function (response) {
				$scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			});
		}
	};
	$scope.getTeamsByYear = function() {
		if ($scope.championshipYear != null) {
			$scope.teamsList = null;
			$scope.loader = true;
			ergastAPIservice.getTeams($scope.championshipYear).success(function (response) {
				$scope.teamsList = response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
			});
		}
	};
	$scope.getRacesByYear = function() {
		if ($scope.championshipYear != null) {
			$scope.racesList = null;
			$scope.loader = true;
			ergastAPIservice.getRaces($scope.championshipYear).success(function (response) {
				$scope.racesList = response.MRData.RaceTable.Races;
			});
		}
	};
});