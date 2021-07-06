var HomePage = function () {
  this.menuItems = element.all(by.css("ul.nav > li > a"));

  this.get = function () {
    browser.driver.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/");
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };
  this.getContactText = () => {
    return element(by.xpath("//a[contains(text(), 'Contact')]")).getText();
  };
  this.getContactClick = () => {
    element(by.xpath("//a[contains(text(), 'Contact')]")).click();
  };
};

module.exports = new HomePage();
