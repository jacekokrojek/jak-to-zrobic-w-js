var Page = require('./page.js');

var homePage = function () {

  Page.call(this);

  var self = this;

  this.speakers = element.all(by.css('figcaption'));

  this.get = function () {
    this.load('/');
    this.logNavigationTiming();
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };

  this.clickRegisterButton = function () {
    this.registerButton.click();
  };

  this.getSpeakers = function () {
    return this.speakers.map(function (elm, index) {
      return {
        index: index,
        name: elm.element(by.css('a')).getText()
      };
    });
  };

  this.getSpeakerByIdx = function (idx) {
    return this.speakers.get(0).element(by.css('a')).getText();
  };

  this.scrolltoLocationSection = function () {
    var sectionPlace = element(by.xpath('//*[contains(text(),"LOCATION")]'));
    this.scrollToElement(sectionPlace)
  };

  this.scrolltoSperakersSection = function () {
    var sectionPlace = element(by.xpath('//*[contains(text(),"SPEAKERS")]'));
    this.scrollToElement(sectionPlace);
  };
};

homePage.prototype = Object.create(Page.prototype);
homePage.prototype.constructor = homePage;

module.exports = new homePage();
