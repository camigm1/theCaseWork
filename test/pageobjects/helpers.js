import { $ } from "@wdio/globals";
import Page from "./index.js";
import Menu from "./task.js";
import Cart from "./case.js";

class Helpers extends Page {
  async assertsExistText(existing, text) {
    await expect(existing).toBeExisting();
    await expect(existing).toHaveText(expect.stringContaining(text));
  }

  async toClick(selector) {
    await selector.waitForClickable({ timeout: 5000 });
    await selector.click();
  }

  async textboxCheck(num, classname, selector) {
    const chars = "a".repeat(num);
    await classname.selector.setValue(chars);
  }
}

export default new Helpers();
