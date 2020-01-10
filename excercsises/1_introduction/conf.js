exports.config = {

	directConnect: true,

	specs: ['minimal.spec.js'],

	capabilities: {
		'browserName': 'chrome',
	},

	onPrepare: function () {

		browser.manage().window().setSize(1680, 1050);
		browser.ignoreSynchronization = true;

	},

	jasmineNodeOpts: {
		defaultTimeoutInterval: 1200000, // 20 minutes
	}

};
