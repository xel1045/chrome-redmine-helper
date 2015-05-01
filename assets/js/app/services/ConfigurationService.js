redmineApp.service('ConfigurationService', function ($http, Restangular) {
	var _restServiceBase, _apiKey;

	this.getRestServiceBase = function () {
		return _restServiceBase;
	};

	this.setRestServiceBase = function (url) {
		_restServiceBase = url;
		Restangular.setBaseUrl(url);
	};

	this.getApiKey = function () {
		return _apiKey;
	};

	this.setApiKey = function (apiKey) {
		_apiKey = apiKey;
		$http.defaults.headers.common['X-Redmine-API-Key'] = apiKey;
		Restangular.setDefaultHeaders({
			'X-Redmine-API-Key': apiKey
		});
	};

	this.reset = function() {
		this.setRestServiceBase(localStorage.getItem('restServiceBase'));
		this.setApiKey(localStorage.getItem('apiKey'));
	};

	this.hasConfiguration = function() {
		return localStorage.getItem('restServiceBase') && localStorage.getItem('apiKey');
	};

	this.save = function() {
		localStorage.setItem('restServiceBase', _restServiceBase);
		localStorage.setItem('apiKey', _apiKey);
	};

	this.clear = function() {
		localStorage.removeItem('restServiceBase');
		localStorage.removeItem('apiKey');
	};

	this.reset();
});
