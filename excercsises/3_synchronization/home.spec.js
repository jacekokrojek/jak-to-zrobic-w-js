var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		homePage.clickArrow();
		expect(homePage.getHeadline2()).toBe('Example Headline 2');
		
		/*var expectedHeader = 'Example Headline 2'
		var activeCarouselHeader = element(by.css('div.active h1'));
		var nextButton = element(by.css('a.right'));
		nextButton.click();
		//Replace this agly code 
		browse.sleep(5000);
		expect(activeCarouselHeader.getText).toEqual(expectedHeader);*/

		/*var EC = protractor.ExpectedConditions;
		var button = $('#xyz');
		var isPresent = EC.presenceOf(button);
		browser.wait(isPresent, 5000);*/
		//browser.wait(EC.presenceOf(button), 5000);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		homePage.clickDropAndCheck();
		expect(homePage.getMenuAbout()).toBe(true);
		
	});

});
