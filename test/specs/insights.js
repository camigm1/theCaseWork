
import Insights from "../pageobjects/insights.js";

import LoginPage from "../pageobjects/login.js";
import Helpers from "../pageobjects/helpers.js";

describe("Tests Create New Case Functionality", () => {
  before(async () => {
    await LoginPage.openLogin();
    await LoginPage.login("CAMILA.GALLEGOS9317@STU.MTEC.EDU", "SoftwareQA!");
  });
  it("Positive Test: Check for Total number of cases", async () => {
    await Insights.insights.click()
    //assert that number matches the case list
    
  });
});
