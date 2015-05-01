'use strict';

var _ = require('lodash');
var moment = require('moment');
var cfg = require('./build/grunt/cfg');

module.exports = function(grunt) {
	grunt.log.writeln('%s - Loading external tasks...', moment().format());

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	grunt.log.writeln('%s - done!', moment().format());

	grunt.loadTasks('./build/grunt/tasks');
	grunt.initConfig(_.merge.apply({}, _.values(cfg)));

	function alias(name, tasks) {
		grunt.registerTask(name, tasks.split(' '));
	}

	// Build tasks
	alias('less:debug', 'less:debug_app');
	alias('less:release', 'less:release_app');

	alias('autoprefixer:debug', 'autoprefixer:debug_app');
	alias('autoprefixer:release', 'autoprefixer:release_app');

	alias('css:debug', 'less:debug autoprefixer:debug');
	alias('css:release', 'less:release autoprefixer:release');

	alias('uglify:debug', 'uglify:debug_app uglify:debug_background uglify:debug_components');
	alias('uglify:release', 'uglify:release_app uglify:release_background uglify:release_components');

	alias('js:debug', 'uglify:debug jshint:all');
	alias('js:release', 'ngAnnotate:release uglify:release');

	// Testing tasks
	alias('test', 'jshint:all');

	alias('build:debug', 'copy css:debug js:debug');
	alias('build:release', 'copy css:release js:release');

	// Development tasks
	alias('dev', 'build:debug watch');

	// Continuous integration
	alias('ci', 'build:release test');

	alias('default', 'dev');
};
