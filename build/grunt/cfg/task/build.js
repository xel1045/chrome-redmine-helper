'use strict';

var config = require('../config.js'),
	_ = require('lodash');

module.exports = {
	copy: {
		dist: {
			files: config.copy.files
		}
	},

	less: _.reduce(config.less, function(actual, value, key) {
		actual['debug_' + key] = {
			options: {
				sourceMap: true,
				sourceMapFilename: value.dist + ".map",
				sourceMapURL: key + '.css.map',
			},
			files: {}
		};

		actual['debug_' + key]['files'][value.dist] = value.src;

		actual['release_' + key] = {
			options: {
				cleancss: true,
			},
			files: {}
		};

		actual['release_' + key]['files'][value.dist] = value.src;

		return actual;
	}, {}),

	autoprefixer: _.reduce(config.less, function(actual, value, key) {

		actual['options'] = { browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12'] }

		actual['debug_' + key] = {
			src: value.dist
		};

		actual['release_' + key] = {
			src: value.dist
		};

		return actual;
	}, {}),

	ngAnnotate: {
		release: {
			files: _.object(_.pluck(config.js, 'dist'), _.pluck(config.js, 'src'))
		}
	},

	uglify: _.reduce(config.js, function(actual, value, key) {
		actual['debug_' + key] = {
			files: {},
			options: {
				mangle: false,
				preserveComments: 'all',
				beautify: true,
				sourceMap: true,
			}
		};

		actual['debug_' + key]['files'][value.dist] = value.src;

		actual['release_' + key] = {
			files: {},
			options: {
				report: 'min',
				preserveComments: 'some',
				compress: {
					global_defs: {
						"_DEBUG": false
					},
				},
			}
		};

		actual['release_' + key]['files'][value.dist] = value.src;

		return actual;
	}, {}),
};
