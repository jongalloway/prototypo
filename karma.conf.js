'use strict';

// Karma configuration
module.exports = function(config) {
	config.set({
		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-firefox-launcher'
		],

		frameworks: ['jasmine'],

		// base path, that will be used to resolve files and exclude
		basePath: '',

		// list of files / patterns to load in the browser
		files: [
			'app/bower_components/angular/angular.js',
			'app/bower_components/angular-mocks/angular-mocks.js',
			'app/scripts/*.js',
			'app/scripts/**/*.js',
			'test/mock/**/*.js',
			'test/spec/**/*.js'
		],

		// list of files to exclude
		exclude: [
			'app/scripts/templates/*.js'
		],

		// test results reporter to use
		// possible values: dots || progress || growl
		reporters: ['progress'],

		// web server port
		port: 8080,

		// cli runner port
		runnerPort: 9100,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: 'OFF' || 'ERROR' || 'WARN' || 'INFO' || 'DEBUG'
		logLevel: 'DEBUG',

		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],

		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 15000,

		// Continuous Integration mode
		// if true, it capture browsers, run tests and exit
		singleRun: false

	});
};