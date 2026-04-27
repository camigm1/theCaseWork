import { $ } from "@wdio/globals";
import Page from "./page.js";

class AddTask extends Page {
  get saveTemaplate() {
    return $('[data-testid="edit-case-template-save-button"]');
  }

  get backToTemplates() {
    return $('[data-testid="link-button-Back to Case Templates"]');
  }

  get cancel() {
    return $('[data-testid="edit-case-template-cancel-button"]');
  }

  get name() {
    return $('[data-testid="edit-case-template-name-input"]');
  }

  get caseType() {
    return $('[data-testid="case-type-combobox"]');
  }

  get templateDescription() {
    return $('[data-testid="edit-case-template-description-input"]');
  }
  get templateFieldName() {
    return $(
      '[data-testid="edit-case-template-short-description-field-name-input"]',
    );
  }

  get templateDefaultText() {
    return $(
      '[data-testid="edit-case-template-short-description-field-value-input"]',
    );
  }
  get engagement() {
    return $('[data-testid="edit-case-template-engagement-template-dropdown"]');
  }
  get notes() {
    return $('[data-testid="edit-case-template-initial-note-input"]');
  }

  get milestones() {
    return $('[data-testid="link-button-Add Milestone"]');
  }

  get milestoneName() {
    return $('[data-testid="milestone-template-name-input"]');
  }

  get milestoneSubmit() {
    return $('[data-testid="milestone-template-submit-button"]');
  }

  get addEvent() {
    return $('[data-testid="link-button-Add Event"]');
  }

  get eventName() {
    //change id format?
    return $('[id="field-r349__control"]');
  }

  get eventSave() {
    //change id format?
    return $('[data-testid="event-template-dialog-save"]');
  }
}

export default new AddTask();
