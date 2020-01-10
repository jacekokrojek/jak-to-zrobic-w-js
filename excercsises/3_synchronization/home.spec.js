var homePage = require('./pages/home');
describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title "Protractor workshop | Home"', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have "Example headline 2" carousel item after clicking on next arrow', function(){
		var expectedHeader = 'Example Headline 2'
		expect(homePage.getArrow()).toEqual(expectedHeader);
	});
	
	it('should display drop down after clicking on About menu item', function(){
		var CONTENT = 'Company';
		//expect(checkelement.get(COMPANY_INDEX).getText()).toBe('Company');
		expect(homePage.getDropDownMenu()).toBe(CONTENT);
	});

});
