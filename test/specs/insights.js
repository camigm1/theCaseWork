
// import Insights from "../pageobjects/insights.js";

// import LoginPage from "../pageobjects/login.js";
// import Helpers from "../pageobjects/helpers.js";

// describe("Tests Create New Case Functionality", () => {
//   before(async () => {
//     await LoginPage.openLogin();
//     await LoginPage.login("CAMILA.GALLEGOS9317@STU.MTEC.EDU", "SoftwareQA!");
//   });
//   it("Positive Test: Check for Total number of cases", async () => {
//     await Insights.insights.click()
//     //assert that number matches the case list
    
//   });
//   it("Positive Test: Filters functionality", async () => {
//     await Insights.insights.click()
//     //assert that number matches the case list
//     await Insights.filtersCheckbox.click();
//     const caseTypeLabel = await $('//label[text()="Case Type"]');
//     await expect(caseTypeLabel).toBeDisplayed();
//   });
//   it("Positive Test: Time Period dropdown functionality", async () => {
//     await Insights.insights.click()
//     //assert that number matches the case list
//    await Insights.timePeriod.click()
//    // Assertions outside the function
// const { selectedItem, itemText } = await Insights.selectRandomMenuItem();
// console.log(`Selected: ${itemText}`);

// // Assert the selected text appears in the trigger button
// const triggerButton = await $('[data-testid="time-period-filter-menu"]');
// await expect(triggerButton).toHaveText(`Time Period: ${itemText}`);
//   });
// });
