var Page = require('./page');
var HomePage = function () {

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
};
HomePage.prototype = Object.create(Page.prototype);
HomePage.prototype.constructor = HomePage;

module.exports = new HomePage();