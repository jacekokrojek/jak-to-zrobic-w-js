exports.config = {

	directConnect: true,

	specs: ['*.spec.js'],

	capabilities: {
		'browserName': 'chrome',
	},

	onPrepare: function () {

		browser.manage().window().setSize(1680, 1050);
		browser.ignoreSynchronization = true;

		var SpecReporter = require('jasmine-spec-reporter');
		jasmine.getEnv().addReporter(new SpecReporter({
			displayStacktrace: true
		}));

	},

	jasmineNodeOpts: {
		defaultTimeoutInterval: 1200000,
		onComplete: null,
		isVerbose: true,
		showColors: true,
		includeStackTrace: true,
		print: function () { }
	}

};
