var Contact = function () {

  this.menuItems = element.all(by.css('ul.nav > li > a'));
  this.name = element(by.css('#name'));
  this.email = element(by.css('#email'))
  this.message = element(by.css('#content'));
  this.submitButton = element(by.css('fieldset > button'));
  this.header = element(by.xpath('//span[1]/h3[1]'));


  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.clickMenuItemAt = function (idx) {
    this.menuItems.get(idx).click();
  };

  this.sendKeysName = function (name) {
    this.name.sendKeys(name)
  }

  this.typeEmail = function (email) {
    this.email.sendKeys(email);
  }

  this.sendKeysMessage = function (message) {
    this.message.sendKeys(message)
  }

  this.submitMessage = function (name, email, message) {
    this.sendKeysName(name);
    this.typeEmail(email);
    this.sendKeysMessage(message);
    this.submitButton.click();
  }

  /*this.waitForMessage = function (ms) { 
    var EC = protractor.ExpectedConditions;
		var isPresent = EC.presenceOf(this.header);
		browser.wait(isPresent, ms);
  } */
  
  this.getHeader = function () {
    var EC = protractor.ExpectedConditions;
		var isPresent = EC.presenceOf(this.header);
		browser.wait(isPresent, 5000)
    return this.header.getText();
  }
};

module.exports = new Contact();
