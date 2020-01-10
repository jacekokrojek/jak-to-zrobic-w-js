//var homePage = require('...');

describe('Protractor Workshop app', function() {

	beforeEach(function () {
	});

	it('should have "Get in touch" and "Address" sections on Contact Us page', function(){
		browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
		var CONTACT_INDEX = 4
		var menuItems = element.all(by.css('ul.nav > li > a'));

		var getintouch = element(by.xpath('//span[@class="span6 message"][1]'));
	
		var egaddress = element(by.xpath('//span[@class="span6"][1]'));
	
		menuItems.get(CONTACT_INDEX).click();

		expect(getintouch.getText()).toContain("Get in Touch");
		expect(egaddress.getText()).toContain("Address");

	});


});
