var HomePage = function () {
  this.menuItems = element.all(by.css("ul.nav > li > a"));

  this.get = function () {
    browser.driver.get("http://jacekokrojek.github.io/jak-to-zrobic-w-js/");
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };
  this.getSectionTitles =  async () => {
    let array =  new Array();
    ;
    return element(by.xpath("//h3")).getText().then((headers)=>{
      return headers.map((el)=>{
        el.getText()
      })
    });
  };
  this.getContactBtnText = () => {
    return element(by.xpath("//a[contains(text(), 'Contact')]")).getText();
  };
  this.openContact = () => {
    element(by.xpath("//a[contains(text(), 'Contact')]")).click();
  };
};

module.exports = new HomePage();
