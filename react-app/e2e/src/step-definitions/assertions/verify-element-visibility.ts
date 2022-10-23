import { Then } from '@cucumber/cucumber';
import { expect } from 'chai';
import { By } from 'selenium-webdriver';

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(elementKey: string, expectedElementText: string) {
        console.log(`the ${elementKey} should contain ${expectedElementText}`)
        const element = await global.myDriver.findElement(By.css("[data-id='contacts']"))
        const elementText = await element.getAttribute("innerText")
        expect(elementText).to.contain("Contacts")
    }
)