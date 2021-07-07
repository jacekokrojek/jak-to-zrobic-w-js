var homePage = require('./pages/home');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
		homePage.get();
	});

	it('hould have home page with title Protractor workshop | Home', function(){
		expect(homePage.getTitle()).toEqual("Protractor workshop | Home");
	});

	it('should have Contact menu item with link to Contact us page', function(){
		expect(homePage.getContactBtnText()).toEqual("Contact");
	});


});
