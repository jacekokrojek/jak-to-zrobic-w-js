exports.config = {
    directConnect: true,
    suites: {
        full: '*.spec.js',
    },

    capabilities: {
        'browserName': 'chrome',
    },
    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters'),
            SpecReporter = require('jasmine-spec-reporter'),
            Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: true
        }));

        browser.ignoreSynchronization = true;
        browser.baseUrl = 'http://aadays.pl';

        browser.__dataDir = __dirname + '/data/',
            browser.__pagesDir = __dirname + '/pages/',
            browser.__srcDir = __dirname + '/../../src/',
            browser.__scrDir = __dirname + '/screenshots',

            browser.driver.manage().window().maximize();

    },

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: true,
        showColors: true,
        defaultTimeoutInterval: 120000,
        includeStackTrace: true,

    }

};
