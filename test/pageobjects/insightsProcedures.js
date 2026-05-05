import { $ } from "@wdio/globals";
import Insights from "../pageobjects/insights.js"
import Helpers from "./helpers.js";
import Page from "../pageobjects/page.js"

class InsightsteProcedures extends Page {

async filtersCheckbox(){
    await Insights.insights.click();
    await Insights.filtersCheckbox.click();
}

async casesCount(){
    
}


}

export default new InsightsteProcedures();
