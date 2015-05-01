redmineApp.controller('AppController', function($scope, UserService, ConfigurationService) {
	$scope.isLoading = true;
	$scope.isConfigured = false;

	$scope.isReady = function() {
		return ! $scope.isLoading && $scope.isConfigured;
	};

	$scope.launch = function() {
		if ( ! ConfigurationService.hasConfiguration()) {
			$scope.isConfigured = false;
			$scope.isLoading = false;
			return;
		}

		UserService.getCurrent()
			.success(function(data) {
				$scope.isConfigured = true;
				$scope.isLoading = false;
			})
			.error(function() {
				$scope.isConfigured = false;
				$scope.isLoading = false;
			});
	};

	$scope.$on('configured', function() {
		$scope.isConfigured = true;
	});

	$scope.launch();
});
