'use strict';

var _ = require('lodash');
var fs = require('fs');
var grunt = require('grunt');
var config = require('../config.js');

module.exports = {
	concurrent: {
		watch_build: {
			tasks: [
				'watch:less', 'watch:jshint', 'watch:uglify'],
			options: {
				logConcurrentOutput: true
			}
		}
	},

	jshint: {
		options: {
			reporter: require('jshint-stylish')
		},
		all: {
			src: _.union(_.pluck(_.filter(config.js, function(js) {
				return js.jshint;
			}), 'src'))
		}
	},

	watch: {
		less: {
			tasks: ['css:debug'],
			files: _.union(_.pluck(config.less, 'watch')),
		},
		jshint: {
			tasks: ['jshint:all'],
			files: _.union(_.pluck(_.filter(config.js, function(js) {
				return js.jshint;
			}), 'src')),
		},
		uglify: {
			tasks: ['js:debug'],
			files: _.union(_.pluck(config.js, 'src')),
		},
	},
};
