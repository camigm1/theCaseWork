export default class Index {
  openLogin() {
    return browser.url(`https://app.thecasework.com/`);
  }

  openHomepage() {
    return browser.url(`https://app.thecasework.com/`);
  }

  openNewCase(path) {
    return browser.url(`https://app.thecasework.com/${path}`);
  }
}
