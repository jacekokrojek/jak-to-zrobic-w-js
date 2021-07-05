var HomePage = function() {

  this.get =  () => {
    browser.driver.get('http://jacekokrojek.github.io/jak-to-zrobic-w-js/');
  };

  this.getTitle = () => {
    return browser.driver.getTitle();
  };
  this.caruselButton = ()=>{
		let nextButton = element(by.css('a.right'));
		nextButton.click();
		browser.sleep(1000);
  }
  this.getHeadline = ()=>{
    let headlineValue = element(by.css('div.active h1'))
     return headlineValue.getText();
  }
  this.dropdownMenu = ()=>{
    let dropdown = element.all(by.css('ul.nav > li > a'));
    dropdown.get(1).click();
    let checkDropdown = element.all(by.css('ul.dropdown-menu > li > a'));
    checkDropdown.get(2).click();
  }
  
};

module.exports = new HomePage();
