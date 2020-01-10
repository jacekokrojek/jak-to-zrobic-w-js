var Page = require('./page');
var contactPage = function () {

  Page.call(this);

  var self = this;

  this.menuItems = element.all(by.css('ul.nav > li > a'));

  this.get = function () {
    this.load('/contact.html');
  };

  this.clickMenuAtIdx = function (idx) {
    this.menuItems.get(idx).click();
  };

  this.getMenuTextAtIdx = function (idx) {
    return this.menuItems.get(idx);
  };
};
contactPage.prototype = Object.create(Page.prototype);
contactPage.prototype.constructor = contactPage;

module.exports = new contactPage();
