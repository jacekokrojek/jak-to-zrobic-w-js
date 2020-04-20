describe('Protractor workshop app', function () {

	it('should have home page with title Protractor workshop | Home', function () {
		browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
		var pageTitle = browser.driver.getTitle();
		expect(pageTitle).toEqual("Protractor workshop | Home");
	});

	it('should have footer with Copyright © 2013 Shapebootstrap | All Rights Reserved', function () {
		var footerCopyright = element(by.xpath('//footer/div/div'));
		var expectedHTML = "Copyright © 2013 Shapebootstrap | All Rights Reserved"
		expect(footerCopyright.getText()).toContain(expectedHTML)
	});

	it('should have "Example headline 1" carousel item after entering site', function () {
		var examplehead = element(by.xpath('//body/div/div/div/div/div/div/div/div'));
		var expecthead = "Example Headline 1"
		expect(examplehead.getText()).toContain(expecthead)
	});

	it('should have correct feature header', function () {
		var featureheaderA = element(by.xpath('//div[@class="span4"][1]'));
		var expectfeatureA = "Feature A"
		expect(featureheaderA.getText()).toContain(expectfeatureA)

		var featureheaderB = element(by.xpath('//div[@class="span4"][2]'));
		var expectfeatureB = "Feature B"
		expect(featureheaderB.getText()).toContain(expectfeatureB)

		var featureheaderC = element(by.xpath('//div[@class="span4"][3]'));
		var expectfeatureC = "Feature C"
		expect(featureheaderC.getText()).toContain(expectfeatureC)
	});

	it('should have menu items with links to "Home", "About", "Services", "Blog", "Contact",  pages', function () {

		var HOME_INDEX = 0
		var ABOUT_INDEX = 1
		var SERVICES_INDEX = 2
		var BLOG_INDEX = 3
		var CONTACT_INDEX = 4

		var menuItems = element.all(by.css('ul.nav > li > a'))

		expect(menuItems.get(HOME_INDEX).getText()).toBe('Home');
		expect(menuItems.get(ABOUT_INDEX).getText()).toBe('About');
		expect(menuItems.get(SERVICES_INDEX).getText()).toBe('Services');
		expect(menuItems.get(BLOG_INDEX).getText()).toBe('Blog');
		expect(menuItems.get(CONTACT_INDEX).getText()).toBe('Contact');

	});

	it('should have Feature A sections ...', function () {
		var features = element.all(by.xpath('//h2'))
		expect(features.get(0).getText()).toBe('Feature A');
	});
	it('should have Feature B sections ...', function () {
		var features = element.all(by.xpath('//h2'))
		expect(features.get(1).getText()).toBe('Feature B');
	});
	it('should have Feature C sections ...', function () {
		var features = element.all(by.xpath('//h2'))
		expect(features.get(2).getText()).toBe('Feature C');
	});

	it('should route to "Blog" pages after selecting link', function () {
		var BLOG_INDEX = 3
		var menuItems = element.all(by.css('ul.nav > li > a'));
		menuItems.get(BLOG_INDEX).click();

		expect(browser.getCurrentUrl()).toMatch(/http:.*blog\.html/);

	});

});
