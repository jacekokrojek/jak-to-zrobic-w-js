let contactPage = require("./pages/contact");
describe("Protractor Workshop app", () => {
  beforeEach(() => {
    contactPage.load();
  });

  it('should have Contact  page with title "Protractor workshop | Contact  us"', () => {
    expect(contactPage.getTitle()).toEqual("Protractor workshop | Contact us");
  });

  it('should display text "Your message has been sent." when user sends message  ', () => {
    const success = "Your message has been sent.";
    contactPage.fillFormSubmit("name name", "name.noname@gmail.com", "content content")
    expect(contactPage.getSuccessInformation()).toEqual(success);
  });
});