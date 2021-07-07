const contact = require("../3_synchronization/pages/contact");
const home = require("./pages/home");
const { getInTouch } = require("./pages/home");
var homePage = require("./pages/home");

describe("Protractor Workshop app", function () {
  beforeEach(function () {
    homePage.get();
  });

  it('should have "Get in touch" and "Address" sections on Contact Us page', function () {
    homePage.findContactBtn();
    const contactPageItems = ["Get in Touch","Address"];
    expect(homePage.findAdressAndgetInTouch()).toEqual(contactPageItems);
   
  
  });
})
