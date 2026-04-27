
import Template from "../pageobjects/template.js"
import TemplateProcedures from "../pageobjects/templateProcedures.js";
import LoginPage from "../pageobjects/login.js";
import Helpers from "../pageobjects/helpers.js";

describe("Tests Create New Case Functionality", () => {
  before(async () => {
    await LoginPage.openLogin();
    await LoginPage.login("CAMILA.GALLEGOS9317@STU.MTEC.EDU", "SoftwareQA!");
  });
  it("Positive Test: Input required Information", async () => {
    await browser.url('https://app.thecasework.com/templates');
    await Template.templateFieldName.setValue('Edited version');
    await Template.templateDescription.setValue('description')
    await Template.saveTemplate.click();
    await Template.backToTemplates.click();
//assert that the name matches what you wrote down 
  });
   it("Positive Test: click on cancel button functionality", async () => {
    await browser.url('https://app.thecasework.com/templates');
    await Template.templateFieldName.setValue('Edited version');
    await Template.cancel.click();
    //assert that the name doesn't match
  });
   it("Positive Test: click on cancel button functionality", async () => {
    await browser.url('https://app.thecasework.com/templates');
    await Template.templateFieldName.setValue('');
    await Template.templateDescription.setValue('')
    await Template.saveTemplate.click();
    //assert that the button is not enabled
  });
   it("Positive Test: Remove Milestone", async () => {
    await browser.url('https://app.thecasework.com/templates');
    await Template.milestoneDots.click();
    await Template.milestoneRemove.click();
    await Template.milestoneConfirmDelete.click();
    //assert that the milestone is not showing- one less in the list? or name removed?
  });
   it("Positive Test: Edit case template description with more than 200 words", async () => {
    await browser.url('https://app.thecasework.com/templates');
    const over200chars = "a".repeat(201);
    await Template.templateDescription.setValue(over200chars);
    const actualValue = await Template.templateDescription.getValue();
    await expect(actualValue.length).toBeLessThanOrEqual(200);
  });
  it("Positive Test: Test default text with more than 200 words", async () => {
    await browser.url('https://app.thecasework.com/templates');
    const over200chars = "a".repeat(201);
    await Template.templateDefaultText.setValue(over200chars);

    const actualValue = await Template.templateDefaultText.getValue();
    await expect(actualValue.length).toBeLessThanOrEqual(200);
  });
  it("Positive Test: Initial notes word limit SHOULD be 2000", async () => {
    await browser.url('https://app.thecasework.com/templates');
    const over2000chars = "a".repeat(2001);
    await Template.notes.setValue(over2000chars);
    const actualValue = await Template.notes.getValue();
    await expect(actualValue.length).toBeLessThanOrEqual(2000);
  });
   it("Positive Test: Add a Milestone", async () => {
    await browser.url('https://app.thecasework.com/templates');
   await TemplateProcedures.createMilestone()
    //assert milestone was create-look for name?
  });
   it("Positive Test: Add an Event ", async () => {
    await browser.url('https://app.thecasework.com/templates');
    await TemplateProcedures.addEvent()
    //assert event was create-look for name?
  });
  it("Positive Test: Remove an Event ", async () => {
    await browser.url('https://app.thecasework.com/templates');
    await TemplateProcedures.removeEvent();
    //assert event was deleted?-look for name?
  });
  it("Positive Test: Reload Template", async () => {
    await browser.url('https://app.thecasework.com/templates');
    //  const thingy = "This Case Name"; set-up the template name
    // await Template.name.click();
    await browser.refresh();
//     await expect($(`=${thingy}`)).not.toExist();
  });
});
