import { $ } from "@wdio/globals";
import Template from "../pageobjects/template.js";
import Helpers from "./helpers.js";
import Page from "../pageobjects/page.js"

class TemplateProcedures extends Page {


get mileName(){
  return 'Milestone Name'
}

async navigateAndOpen(){
  await Template.editDots.click();
  await Template.edit.click();
}

  async createMilestone(name) {
    await Template.milestones.click();
    await Template.milestoneName.setValue(name)
    await Template.milestoneSubmit.click();
  }

async addEvent(name) {
   await Template.addEvent.click();
   await Template.eventName.setValue(name)
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
