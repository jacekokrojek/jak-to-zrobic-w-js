var Page = require('./page');
var homePage = function () {

  Page.call(this);

  var self = this;

  this.menuItems = element.all(by.css('ul.nav > li > a'));

  this.get = function () {
    this.load('/');
  };

  this.clickMenuAtIdx = function (idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function (idx) {
    return this.menuItems.get(idx);
  };
  this.getArrow = function () {
    var activeCarouselHeader = element(by.css('div.active h1'));
    var nextButton = element(by.css('a.right'));
    nextButton.click();
    browser.sleep(1000);
    return activeCarouselHeader.getText();
  }

  this.getDropDownMenu = function () {
    var MENUABOUT_INDEX = 1
    var DDCOMPANY_INDEX = 0;
    var menuItems = element.all(by.css('ul.nav > li > a'));
    var checkelement = element.all(by.css('ul.dropdown-menu > li > a'));

    menuItems.get(MENUABOUT_INDEX).click();
    return checkelement.get(DDCOMPANY_INDEX).getText()
  }

};
homePage.prototype = Object.create(Page.prototype);
homePage.prototype.constructor = homePage;

module.exports = new homePage();