redmineApp.controller('ConfigController', function($scope, UserService, ConfigurationService) {
	$scope.redmineUrl = ConfigurationService.getRestServiceBase();
	$scope.apiKey = ConfigurationService.getApiKey();
	$scope.hasError = false;
	$scope.isLoading = false;

	$scope.save = function() {
		$scope.isLoading = true;

		ConfigurationService.setRestServiceBase($scope.redmineUrl);
		ConfigurationService.setApiKey($scope.apiKey);

		UserService.getCurrent()
			.success(function(data) {
				ConfigurationService.save();

				$scope.$emit('configured');
			})
			.error(function() {
				$scope.isLoading = false;
				$scope.hasError = true;
			});
	};

	$scope.isValid = function() {
		return $scope.redmineUrl !== '' && $scope.apiKey !== '';
	};

	$scope.canSave = function() {
		return $scope.isValid() && ! $scope.isLoading && ! $scope.hasError;
	};

	$scope.$watchGroup(['redmineUrl', 'apiKey'], function() {
		$scope.hasError = false;
	});
});
