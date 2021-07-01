var Contact = function () {

  this.leftHeader = element(by.xpath('//fieldset/h3'));
  this.rightHeader = element(by.xpath('//span[2]/h3'));

  this.get = function () {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html');
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };
  this.getLeftHeader = function () {
    return this.leftHeader.getText()
  };
  this.getRightHeader = function () {
    return this.rightHeader.getText();
  };

};
module.exports = new Contact();