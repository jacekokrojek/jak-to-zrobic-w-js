describe('Protractor workshop app', function() {

	// beforeEach(function () {
	//
	// });

	it('should have home page with title Protractor workshop | Home', function(){
		browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
		var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', function(){		
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(footerCopyright.getText()).toContain(expectedHTML)
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementFinder
	 * to see how to select element for verification
	 */

	it('should have "Example Headline 1" carousel item after entering site', function(){
		var header = element(by.css('.active h1'));
		var expectedHeader = "Example Headline 1";
		expect(header.getText()).toContain(expectedHeader); 
	});
	
	it('should have correct feature header', function(){
		var feature = element(by.xpath('//div[2]/div[1]/h1'));
		var expectedFeature = "At vero eos et accusamus et iusto odio dignissimos";
		expect(feature.getText()).toEqual(expectedFeature);
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how get function can be used
	 */
	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages',function(){
		var menuItems = element.all(by.css('ul.nav > li > a'));	
		expect(menuItems.get(0).getText()).toBe("Home");
		expect(menuItems.get(1).getText()).toBe("About");
		expect(menuItems.get(2).getText()).toBe("Services");
		expect(menuItems.get(3).getText()).toBe("Blog");
		expect(menuItems.get(4).getText()).toBe("Contact");
			
	});

	 /**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how map function can be used to verify content of multiple elements
	 */

	it('should have Feature A, Feature B, Feature C sections ...', function(){
		var features = element.all(by.xpath('//h2'));
	});

	/**
	 * Check http://angular.github.io/protractor/#/api?view=ElementArrayFinder
	 * to see how fileter function can be used select elements based on condition
	 */	
	it('should route to "Blog" pages after selecting link',function(){
		var menuItems = element.all(by.css('ul.nav > li > a'));
	});

	it ('should present test "Thank you for registration" after entering correct user details', function(){
		browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/signup.html');
		var userName = element(by.css('#usernamesignup'));
		var email = element(by.css('#emailsignup'));
		var password = element(by.css('#passwordsignup'));
		var confirmPassword = element(by.css('#passwordsignup_confirm'));
		var submit = element(by.css('.signin.button .btn'));
		userName.sendKeys("Kamila");
		email.sendKeys("email@wp.pl");
		password.sendKeys("klucze");
		confirmPassword.sendKeys("klucze");
		submit.click();
		var header1 = element(by.xpath('//div/div/h2'));
		expect(header1.getText()).toBe("Thank you for registration");
	})

});
