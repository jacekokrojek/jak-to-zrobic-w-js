let Page = require("./page.js");
let HomePage = function () {
  this.get = () => {
    this.load("/");
    this.logNavigationTiming();
  };
  this.getTitle = () => {
    return browser.driver.getTitle();
  };
  this.menuAboutButton = () => {
    browser.executeScript("window.scrollTo(0,850)").then(function () {
      browser.driver.sleep(1000);
      let about = element(by.id("menu-item-4988"));
      about.click();
    });
  };
  this.getSpeakers = function () {
    return element.all(by.css("figcaption h3 a")).map((el, idx) => {
      return { index: idx, name: el.getText() };
    });
  };
};

HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();
