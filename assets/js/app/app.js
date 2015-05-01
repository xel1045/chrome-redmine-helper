var redmineApp = angular.module('redmineApp', ['restangular'], ['$interpolateProvider', function($interpolateProvider) {
	$interpolateProvider.startSymbol('(:');
	$interpolateProvider.endSymbol(':)');
}]);
