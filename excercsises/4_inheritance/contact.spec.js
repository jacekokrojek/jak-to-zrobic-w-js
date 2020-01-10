var contactPage = require(browser.__pagesDir + '/contact');
//var speakers = require(browser.__dataDir + '/speakers');
describe('How to do it in JS contactpage', function () {

		beforeEach(function () {
			contactPage.get();
		});

	it('should Protractor workshop | Contact us title', function () {
	//	browser.driver.get('http://aadays.pl');
		expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
	});

	xit('should contain correct speakers', function () {
		browser.driver.get('http://aadays.pl');
		//	browser.actions().mouseMove(element(by.xpath('//h1[3]')));
		// browser.executeScript('window.scrollTo(0,1200);').then(async function () {
		// 	await browser.takeScreenshot("screen-1");
		// 	browser.sleep(2000);
		// });
		browser.sleep(4000);
		browser.executeScript('window.scrollTo(0,1200);');
		browser.takeScreenshot("screen-1");
		
		// browser.executeScript('window.scrollTo(0,1600);').then(function () {
		// 	browser.sleep(2000);
		// 	browser.takeScreenshot("screen-2");
		// });

		//browser.executeScript('window.scrollTo(0,1000)');

		// homePage.scrollPageDown();
		// homePage.takeScreenshot("screen-3");
		// expect(homePage.getSpeakers()).toEqual(speakers.data);
	});

});
