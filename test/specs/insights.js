
import Insights from "../pageobjects/insights.js";

import LoginPage from "../pageobjects/login.js";
import Helpers from "../pageobjects/helpers.js";

describe("Tests Create New Case Functionality", () => {
  before(async () => {
    await LoginPage.openLogin();
    await LoginPage.login("CAMILA.GALLEGOS9317@STU.MTEC.EDU", "SoftwareQA!");
  });
  it("Positive Test: Check for number of Open cases Insights match dashboard", async () => {
    await $('[role="rowgroup"]').waitForDisplayed({ timeout: 30000 });
    const rows = await $$('.fui-DataGridBody [role="row"]');
    console.log(`Total rows: ${rows.length}`);
    await Insights.insights.click();
    const openCasesCount = await $('.fui-LargeTitle').getText();
    console.log(`Open Cases: ${openCasesCount}`);
    expect(rows.length).toEqual(parseInt(openCasesCount));
  });
  it("Positive Test: Filters functionality", async () => {
    await Insights.insights.click()
    //assert that number matches the case list
    await Insights.filtersCheckbox.click();
    const caseTypeLabel = await $('//label[text()="Case Type"]');
    await expect(caseTypeLabel).toBeDisplayed();
  });
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
   it("Positive Test: check for Pie-pop up", async () => {
const element = await $('.MuiPieArc-data-index-7');
  await browser.action('pointer')
    .move({ origin: element })
    .down()
    .up()
    .perform();

  const dialog = await $('[role="alertdialog"]');
  await expect(dialog).toBeDisplayed();

  const dialogTitle = await $('//span[text()="Selected Cases"]');
  await expect(dialogTitle).toBeDisplayed();
  });
   it("Positive Test: check for Pie-pop up", async () => {
    await $('button=Close').click();
    await Insights.casesBtn.click();
    const rows = await $$('.fui-DataGridBody [role="row"]');
    console.log(`Total rows: ${rows.length}`);  
  });
});
