var HomePage = function() {

  this.menuItems = element.all(by.css('ul.nav > li > a')); 
  this.nextArrow = element(by.css('a.right'));
  this.header = element(by.xpath('//div[2]/div/div/div[1]/div/h1'));
  this.drop = element(by.xpath('//ul/li[2]/a/b'));
  this.menuAbout = element(by.css('ul.dropdown-menu'));

  this.get = function() {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
  };

  this.getTitle = function() {
    return browser.driver.getTitle();
  };

  this.clickMenuAtIdx = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function(idx) {
    return this.menuItems.get(idx);
  };
  
  this.clickArrow = function() {
    this.nextArrow.click();
    browser.sleep(1000);
  }

  this.getHeadline2 = function () {
    return this.header.getText();
  }

  this.clickDropAndCheck = function() {
    this.drop.click();
    var EC = protractor.ExpectedConditions;
		var isPresent = EC.presenceOf(this.menuAbout);
		browser.wait(isPresent, 5000)
  }

  this.getMenuAbout = function() {
    return this.menuAbout.isDisplayed();
  }
};

module.exports = new HomePage();
