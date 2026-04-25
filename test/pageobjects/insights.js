import { $ } from "@wdio/globals";
import Page from "./page.js";
import Menu from "./task.js";
import Helpers from "./helpers.js";

class Insights extends Page {
  //Main Selectors
  get timePeriod() {
    return $('[data-testid="case-insights-time-period-filter-menu"]');
  }
  get today() {
    return $(
      '[data-testid="case-insights-time-period-filter-menu-Today-option"]',
    );
  }

  get month() {
    return $(
      '[data-testid="case-insights-time-period-filter-menu-This Month-option"]',
    );
  }

  get last6Months() {
    return $(
      '[data-testid="case-insights-time-period-filter-menu-Last 6 Months-option"]',
    );
  }

  get yearToDate() {
    return $(
      '[data-testid="case-insights-time-period-filter-menu-Year To Date-option"]',
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
}

export default new Insights();
