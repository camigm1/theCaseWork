
export default class Page {
    
    openLogin () {
        return browser.url(`https://app.thecasework.com/`)
    }

    //I Will add some changes

    openHomepage () {
        return browser.url(`https://app.thecasework.com/`)
    }

    openNewCase (path) {
        return browser.url(`https://app.thecasework.com/${path}`)
    }
}
