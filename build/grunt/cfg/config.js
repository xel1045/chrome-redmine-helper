'use strict';

module.exports = {
	less: {
		app: {
			src: 'assets/less/app.less',
			dist: 'src/css/app.css',
			watch: [
				'assets/less/**/*.less',
				'assets/less/**/*.css'
			]
		}
	},

	js: {
		app: {
			src: [
				'assets/js/app/app.js',
				'assets/js/app/**/*.js',
			],
			dist: 'src/js/app.js',
			jshint: true
		},
		background: {
			src: [
				'assets/js/background/**/*.js',
			],
			dist: 'src/js/background.js',
			jshint: true
		},
		components: {
			src: [
				'assets/vendor/jquery/dist/jquery.js',
				'assets/vendor/lodash/dist/lodash.compat.js',
				'assets/vendor/angular/angular.js',
				'assets/vendor/angular-resource/angular-resource.js',
				'assets/vendor/angular-route/angular-route.js',
				'assets/vendor/restangular/dist/restangular.js',
				'assets/vendor/js-yaml/dist/js-yaml.js',
				'assets/vendor/bootstrap/dist/js/bootstrap.js',
				'assets/vendor/textile-js/lib/textile.js',
				'assets/js/vendor/*.js',

			],
			dist: 'src/js/components.js',
		}
	},

	copy: {
		files: [
			{
				expand: true,
				cwd: 'assets/vendor/font-awesome/fonts',
				src: '*',
				dest: 'src/fonts'
			},
			{
				expand: true,
				cwd: 'assets/vendor/bootstrap/dist/fonts',
				src: '*',
				dest: 'src/fonts'
			}
		]
	}
};
