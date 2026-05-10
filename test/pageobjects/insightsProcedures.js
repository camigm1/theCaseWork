import { $ } from "@wdio/globals";
import Insights from "../pageobjects/insights.js";
import Helpers from "./helpers.js";
import Index from "./index.js";

class InsightsteProcedures extends Index {
  async filtersCheckbox() {
    await Insights.insights.click();
    await Insights.filtersCheckbox.click();
  }

  async casesCount() {}
}

export default new InsightsteProcedures();
