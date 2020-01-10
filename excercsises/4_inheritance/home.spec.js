var HomePage = require(browser.__pagesDir + '/home');

describe('How to do it in JS homepage', function () {

	beforeEach(function () {
		HomePage.get();
	});

	it('should Protractor workshop | Home title', function () {
		expect(HomePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	xit('should contain correct speakers', function () {
		browser.driver.get('http://aadays.pl');
		homePage.scrolltoSperakersSection();
		homePage.takeScreenshot("screen-1");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-2");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-3");
		expect(homePage.getSpeakers()).toEqual(speakers.data);
	});

});
