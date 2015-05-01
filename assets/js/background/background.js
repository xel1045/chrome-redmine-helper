var extension = {
	browserActions: {
		init: function() {
			chrome.browserAction.setPopup({ popup: '/index.html' });
		},
	},
	init: function() {
		extension.browserActions.init();
	}
};

document.addEventListener('DOMContentLoaded', function() {
	extension.init();
});
