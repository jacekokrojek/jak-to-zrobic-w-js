var contactPage = require('./pages/contact');
/*var speakers = require(browser.__dataDir + '/speakers');*/

describe('How to do it in JS homepage', function() {

	beforeEach(function () {
		contactPage.get();
	});

	it('hould have Contact page with title "Protractor workshop | Contact us"', function(){
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});


	xit('should contain correct speakers', function(){
		homePage.scrolltoSperakersSection();
		homePage.takeScreenshot("screen-1");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-2");
		homePage.scrollPageDown();
		homePage.takeScreenshot("screen-3");
		expect(homePage.getSpeakers()).toEqual(speakers.data);
	});

});
