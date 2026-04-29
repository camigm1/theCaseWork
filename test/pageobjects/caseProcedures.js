import { $ } from "@wdio/globals";
import Case from "../pageobjects/case.js";
import Page from "./page.js";
import Menu from "./task.js";
import Helpers from "./helpers.js";

class CaseProcedures extends Page {
  async caseName() {}
  //Creating an Event
  async createEvent() {
    await Case.addEvent.click();
    await Case.eventInput.setValue("example input");
    await Case.eventDate.click();
    await Case.selectDateTest();
    await Case.eventSave.click();
  }

  async caseType() {
    await Case.caseType.click();
    await Case.selectRandomOption();
  }

  async caseStatus() {
    await Case.caseStatus.click();
    await Case.selectRandomCaseStatus();
  }

  async assignUser() {
    await Case.assignTo.click();
    await Case.clickRandomUser();
    await Case.selectUser.click();
  }

  async affiliatedUser() {
    await Case.addAffiliated.click();
    await Case.clickRandomUser();
    await Case.confirmAffiliated.click();
  }
  async bill() {
    await Case.billingToggle.click();
    await Case.fixedFeeInput.waitForDisplayed({ timeout: 5000 });
    await Case.fixedFeeInput.setValue("100.00");
  }
}

export default new CaseProcedures();
