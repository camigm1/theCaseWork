// import Insights from "../pageobjects/insights.js";
// import insightsProcedures from "../pageobjects/insightsProcedures.js";
// import LoginPage from "../pageobjects/login.js";
// import Helpers from "../pageobjects/helpers.js";
// import { privateInfo } from "../../privateInfo.js";

// describe("Tests Create New Case Functionality", () => {
//   before(async () => {
//     await LoginPage.openLogin();
//     await LoginPage.login(privateInfo.username, privateInfo.password);
//   });
//   it("Positive Test: Check for number of Open cases Insights match dashboard", async () => {
//     const rows = await Insights.rowsCountDashboard;
//     await Insights.insights.click();
//     const openCasesCount = await Insights.openCasesTile.getText();
//     expect(rows.length).toEqual(parseInt(openCasesCount));
//   });
//   it("Positive Test: Filters functionality", async () => {
//     await insightsProcedures.filtersCheckbox();
//     await Helpers.assertsExistText(Insights.caseTypeDropdownText, "Case Type");
//   });
//   it("Positive Test: Time Period dropdown functionality", async () => {
//     await Insights.insights.click();
//     await Insights.timePeriod.click();
//     const selectedText = await Insights.selectFirstTimePeriod()
//     const cardLabel = await Insights.timePeriod.getText();
//     expect(cardLabel).toContain(selectedText);
//   });
//   it("Positive Test: Compare total cases to total cases in Cases Page", async () => {
//     await Insights.casesBtn.click();
//     const rows = await Insights.casesPageRowCount;
//     await Insights.insights.click();
//     const total = await Insights.totalText.getText();
//     const totalCount = parseInt(total.replace(/\D/g, ""));
//     expect(rows.length).toEqual(totalCount);
//   });
// //   it("Positive Test: Confirm Unknown cases pop-up", async () => {
// //     await browser.refresh();
// //     await Insights.pieChartUnknown.click();
// //     await $('[role="rowgroup"].fui-DataGridBody').waitForDisplayed({
// //       timeout: 30000,
// //     });
// //     const rows = await Insights.pieChartUnknownRows;
// //     console.log(rows);
// //     const selectedCasesTitle = await Insights.selectedCasesText;
// //     await expect(selectedCasesTitle).toBeDisplayed();
// //     await Insights.closeBtn.click();
// //   });
//   it("Positive Test: Confirm Unknown cases pop-up", async () => {
//     await browser.refresh();
//     await Insights.pieChartUnknown.waitForDisplayed({ timeout: 30000 });
//     await Insights.pieChartUnknown.click();
//     await $('[role="rowgroup"].fui-DataGridBody').waitForDisplayed({
//       timeout: 30000,
//     });
//     const rows = await Insights.pieChartUnknownRows;
//     console.log(rows);
//     const selectedCasesTitle = await Insights.selectedCasesText;
//     await expect(selectedCasesTitle).toBeDisplayed();
//     await Insights.closeBtn.click();
//   });
//   it("Positive Test: Confirm New cases pop-up", async () => {
//     await Insights.newCasesPieChart.click();
//     const rows = await Insights.pieChartRows;
//     console.log(rows.length);
//     const selectedCasesTitle = await Insights.selectedCasesText;
//     await expect(selectedCasesTitle).toBeDisplayed();
//     await Insights.closeBtn.click();
//   });
//   it("Positive Test: Confirm Active cases pop-up", async () => {
//     await Insights.activeCasesPieChart.click();
//     const rows = await Insights.pieChartRows;
//     console.log(rows.length);
//     const selectedCasesTitle = await Insights.selectedCasesText;
//     await expect(selectedCasesTitle).toBeDisplayed();
//     await Insights.closeBtn.click();
//   });
//   it("Positive Test: Confirm Closed cases pop-up", async () => {
//     await Insights.closedCasesPieChart.click();
//     const rows = await Insights.pieChartRows;
//     console.log(rows.length);
//     const selectedCasesTitle = await Insights.selectedCasesText;
//     await expect(selectedCasesTitle).toBeDisplayed();
//     await Insights.closeBtn.click();
//   });
// });
