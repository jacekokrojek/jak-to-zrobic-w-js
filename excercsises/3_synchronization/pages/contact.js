var Contact = function () {
  this.get = function () {
    browser.driver.get(
      "http://jacekokrojek.github.io/jak-to-zrobic-w-js/contact.html"
    );
  };

  this.getTitle = function () {
    return browser.driver.getTitle();
  };
  this.fillFormSubmit  = (name, email, content,success) => {
    element(by.id("name")).clear().sendKeys(name);
    element(by.id("email")).clear().sendKeys(email);
    element(by.id("content")).clear().sendKeys(content);
    element(by.css(".test")).click();
  };
  this.getSuccessInformation = ()=>{
    const success = "Your message has been sent.";
    let getSuccess = element(by.css(".alert-success"));
    let ec = protractor.ExpectedConditions;
    browser.wait(ec.textToBePresentInElement(getSuccess, success),
      6000
    );
    return getSuccess.getText();
  }
};

module.exports = new Contact();