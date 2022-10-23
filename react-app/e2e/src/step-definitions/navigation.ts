import { Given, Then } from "@cucumber/cucumber";

Given(
    /^I am on the "([^"]*)" page$/, {timeout: 2 * 5000},
    async function(pageId: string) {
        console.log(`I am on the ${pageId} page`);
        await global.myDriver.get("http://localhost:3000");
    }
)

