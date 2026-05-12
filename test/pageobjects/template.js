import { $ } from "@wdio/globals";
import Index from "./index.js";

class Template extends Index {
  get dinamicName() {
    return "Template was made today";
  }

  get statusdropdownBtn() {
    return $('//button[contains(., "New")]');
  }

  get templateDashboardBtn() {
    return $('[data-testid="vert-nav-templates"]');
  }

  get editDots() {
    return $('[aria-label="More items"]');
  }

  get edit() {
    return $('[data-testid="custom-data-table-context-menu-item-Edit"]');
  }

  get saveTemplate() {
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

  get overviewText() {
    return $('[data-testid="edit-case-template-overview-input"]');
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

  get milestoneDots() {
    return $('[aria-label="More items"]');
  }

  get milestoneRemove() {
    return $('[data-testid="custom-data-table-context-menu-item-Remove"]');
  }

  get milestoneConfirmDelete() {
    return $('[data-testid="confirmation-dialog-confirm-button"]');
  }

  get addEvent() {
    return $('[data-testid="link-button-Add Event"]');
  }

  get eventName() {
    //change id format?
    return $('[name="eventName"]');
  }

  get eventSave() {
    //change id format?
    return $('[data-testid="event-template-dialog-save"]');
  }

  get eventRemoveDots() {
    return $('[aria-label="More items"]');
  }

  get eventRemove() {
    return $('[data-testid="custom-data-table-context-menu-item-Remove"]');
  }

  get checkboxes() {
    return $$(".fui-Checkbox__input");
  }

  get milestoneRows() {
    return $$('.fui-DataGridBody [role="row"]');
  }

}

export default new Template();
