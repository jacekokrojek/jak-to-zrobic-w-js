var Page = require('./page');
var contactPage = function() {

  Page.call(this);

  var self = this;

  this.menuItems = element.all(by.css('ul.nav > li > a')); 

  this.get = function() {
    this.load('/contact.html');
  };

  this.clickMenuAtIdx = function(idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function(idx) {
    return this.menuItems.get(idx);
  };
  
  this.sendMessage = function(NAME, EMAIL, CONTENT)
  {
    var inputName = element(by.id('name'));
    var inputEmail = element(by.id('email'));
    var inputText = element(by.id('content'));
    var clickbutton = element(by.buttonText('Submit'));		
    
    inputName.sendKeys(NAME);    
    inputEmail.sendKeys(EMAIL);
    inputText.sendKeys(CONTENT);
		clickbutton.click();

  };

  this.getFinalContent = function()
  {
    var CONTAIIN = 'Your message has been sent.';
		var expectmessage = element(by.css('.alert-success'));
		var EC = protractor.ExpectedConditions;
    browser.wait(EC.textToBePresentInElement(expectmessage, CONTAIIN),5000);
    return expectmessage.getText();
  };


};
contactPage.prototype = Object.create(Page.prototype);
contactPage.prototype.constructor = contactPage;

module.exports = new contactPage();
