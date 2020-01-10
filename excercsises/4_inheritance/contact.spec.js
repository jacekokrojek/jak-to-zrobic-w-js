var contactPage = require(browser.__pagesDir + '/contact');

describe('How to do it in JS contactpage', function () {

	beforeEach(function () {
		contactPage.get();
	});

	it('should Protractor workshop | Contact us title', function () {
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	xit('should contain correct speakers', function () {
		homePage.scrolltoSperakersSection();
		homePage.takeScreenshot("screen-1");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-2");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-3");
		expect(homePage.getSpeakers()).toEqual(speakers.data);
	});

});
