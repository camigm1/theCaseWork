import Template from "../pageobjects/template.js";
import TemplateProcedures from "../pageobjects/templateProcedures.js";
import LoginPage from "../pageobjects/login.js";
import Helpers from "../pageobjects/helpers.js";

describe("Edit Template Functionality", () => {
  before(async () => {
    await LoginPage.openLogin();
    await LoginPage.login("CAMILA.GALLEGOS9317@STU.MTEC.EDU", "SoftwareQA!");
  });
  it("Positive Test: Input required Information", async () => {
    await Template.templateDashboardBtn.click();
    await TemplateProcedures.navigateAndOpen();
    await Template.name.setValue("Edited version");
    await Template.templateDescription.setValue("description");
    await Template.saveTemplate.click();
    await Template.backToTemplates.click();
    //assert that the name matches what you wrote down
    await expect($('span=Edited version')).toBeDisplayed();
  });
    it("Positive Test: click on cancel button functionality", async () => {
      await TemplateProcedures.navigateAndOpen()
      const templateName = "AUTOTEST Task " + Date.now();
      await Template.templateFieldName.setValue(templateName);
      await Template.cancel.click();
      //assert that the name doesn't match
      await expect($(`span=${templateName}`)).not.toBeDisplayed();
    });
    // it("Positive Test: Erase both required fields", async () => {
    //   await TemplateProcedures.navigateAndOpen()
    //   await Template.templateFieldName.setValue("");
    //   await Template.templateDescription.setValue("");
    //   await Template.saveTemplate.click();
    //   //assert that the button is not enabled
    //   await expect(Template.saveTemplate).toBeDisabled();
    // });
    it("Positive Test: Add a Milestone", async () => {
        await TemplateProcedures.navigateAndOpen();
        await TemplateProcedures.createMilestone(TemplateProcedures.mileName);
        //assert milestone was create-look for name?
        await expect($(`span=${TemplateProcedures.mileName}`)).toBeDisplayed();
     });
    it("Positive Test: Remove Milestone", async () => {
      const beforeRows = await $$('.fui-DataGridBody [role="row"]');
      const beforeCount = beforeRows.length;
    //   await TemplateProcedures.navigateAndOpen();
      await Template.milestoneDots.click();
      await Template.milestoneRemove.click();
      await Template.milestoneConfirmDelete.click();
      await browser.pause(1500); // wait for dialog to fully close
      //assert that the milestone is not showing- one less in the list? or name removed?
      const afterRows = await $$('.fui-DataGridBody [role="row"]');
    const afterCount = afterRows.length;

        expect(afterCount).toBe(beforeCount - 1);
    });
    it("Positive Test: Edit case template description with more than 200 words", async () => {
      const over200chars = "a".repeat(201);
      await Template.templateDescription.setValue(over200chars);
      const actualValue = await Template.templateDescription.getValue();
      await expect(actualValue.length).toBeLessThanOrEqual(200);
    });
    it("Positive Test: Test default text with more than 200 words", async () => {
      const over200chars = "a".repeat(201);
      await Template.templateDefaultText.setValue(over200chars);

      const actualValue = await Template.templateDefaultText.getValue();
      await expect(actualValue.length).toBeLessThanOrEqual(200);
    });
    // it("Positive Test: Initial notes word limit SHOULD be 2000-REPORTED BUG", async () => {
    //   const over2000chars = "a".repeat(2001);
    //   await Template.notes.setValue(over2000chars);
    //   const actualValue = await Template.notes.getValue();
    //   await expect(actualValue.length).toBeLessThanOrEqual(2000);
    // });
  
    it("Positive Test: Add an Event ", async () => {
      const eventName = 'this event name';
      await TemplateProcedures.addEvent(eventName);
      //assert event was create-look for name?
        await expect($(`span=${eventName}`)).toBeDisplayed();
    });
    it("Positive Test: Remove an Event- NEEDS recheck ", async () => {
        const eventName2 = 'another';   
        await TemplateProcedures.addEvent(eventName2);     
        await TemplateProcedures.removeEvent();
        //assert event was deleted?-look for name?
        await expect($(`span=${eventName2}`)).not.toBeDisplayed();
    });
  //   it("Positive Test: Reload Template", async () => {
  //     await browser.url("https://app.thecasework.com/templates");
  //     //  const thingy = "This Case Name"; set-up the template name
  //     // await Template.name.click();
  //     await browser.refresh();
  //     //     await expect($(`=${thingy}`)).not.toExist();
  //   });
});
