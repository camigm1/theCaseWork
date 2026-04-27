import { $ } from "@wdio/globals";
import Template from "../pageobjects/template.js";
import Helpers from "./helpers.js";

class TemplateProcedures extends Page {

  async createMilestone() {
    await Template.milestones.click();
    await Template.milestoneName.setValue('Milestone name')
    await Template.milestoneSubmit.click();
  }

async addEvent() {
   await Template.addEvent.click();
   await Template.eventName.setValue('this event name')
   await Template.eventSave.click();
  }

  async removeEvent() {
   await Template.eventRemoveDots.click();
   await Template.eventRemove.click();
  }

  async engagementTemplate(){
    await Template.engagement.click();
    //create a function to search for random choice in dropdown
    //assert that it matches what you chose
  }

}

export default new TemplateProcedures();
