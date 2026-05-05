import { $ } from "@wdio/globals";
import Page from "./page.js";
import Menu from "./task.js";
import Helpers from "./helpers.js";

class Insights extends Page {
  //Main Selectors

  get insights() {
    return $('[data-testid="vert-nav-insights"]');
  }

  get filtersCheckbox() {
    return $('//input[@id=//label[text()="Filter By Case Type"]/@for]');
  }

  get timePeriod() {
    return $('[data-testid="time-period-filter-menu"]');
  }
  get today() {
    return $(
      '[data-testid="case-insights-time-period-filter-menu-Today-option"]',
    );
  }

 
  get totalCases() {
    return $(
      '[class="fui-Text ___g0or4u0 fk6fouc fkhj508 f1i3iumi fl43uef fpgzoln f1w7gpdv f6juhto f1gl81tg f2jf649"]',
    );
  }

  get caseList() {
    return $(
      '[class="fui-DataGridBody fui-TableBody ___v0s6v60 ftgm304 f5zp4f f1p9o1ba fly5x3f f1dswu5g"]',
    );
  }

  get casesBtn() {
    return $('[data-testid="vert-nav-cases"]');
  }

  get closeBtn(){
   return $("button=Close")
  }


  //Secondary Selectors
  get rowsCountDashboard(){
    return $$('.fui-DataGridBody [role="row"]')
  }

  get openCasesTile(){
    return $(".fui-LargeTitle")
  }

  get caseTypeDropdownText(){
    return $('//label[text()="Case Type"]')
  }

  get casesPageRowCount(){
    return $$('.fui-DataGridBody [role="row"]')
  }

  get totalText(){
    return $('//span[contains(text(), "Total:")]')
  }

  get pieChartUnknown(){
    return $(
      ".MuiPieArc-series-systemStatusSeries.MuiPieArc-data-index-3",
    )
  }

  get pieChartRows(){
    return $$('[role="rowgroup"].fui-DataGridBody [role="row"]');
  }

  get selectedCasesText(){
    return $('//span[text()="Selected Cases"]')
  }

  get newCasesPieChart(){
    return $(
      ".MuiPieArc-series-systemStatusSeries.MuiPieArc-data-index-0",
    )
  }

  get activeCasesPieChart(){
    return $(
      ".MuiPieArc-series-systemStatusSeries.MuiPieArc-data-index-1",
    )
  }

  get closedCasesPieChart(){
    return $(
      ".MuiPieArc-series-systemStatusSeries.MuiPieArc-data-index-2",
    )
  }



  //Functions
  async selectRandomMenuItem() {
    await $('[role="menuitemradio"]').waitForDisplayed({ timeout: 10000 });
    const items = await $$('[role="menuitemradio"]');

    if (items.length === 0) {
      throw new Error("No menu items found");
    }

    const randomIndex = Math.floor(Math.random() * items.length);
    const selectedItem = items[randomIndex];

    if (!selectedItem) {
      throw new Error(`No item found at index ${randomIndex}`);
    }

    const itemText = await selectedItem.$(".fui-MenuItem__content").getText();
    await selectedItem.click();
    return { selectedItem, itemText };
  }


  async selectRandomTimePeriod() {
  // Open the dropdown
  await $('[data-testid="time-period-filter-menu"]').click();

  // Wait for options to appear
  await $('[role="option"]').waitForDisplayed({ timeout: 5000 });

  // Grab all options
  const options = await $$('[role="option"]');

  if (options.length === 0) throw new Error('No dropdown options found');

  // Pick a random option
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOption = options[randomIndex];

  const selectedText = await randomOption.getText();
  await randomOption.click();

  return selectedText.trim();
}
}

export default new Insights();
