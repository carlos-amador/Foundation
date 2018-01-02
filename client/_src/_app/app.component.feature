Feature: To search typescript in google

@TypeScriptScenario
Scenario: Typescript Google Search
Given I am on google page
When I type typescript
Then I click on search button
Then I clear the search text

@CucumberScenario
Scenario: Cucumber Google Search
Given I am on google page
When I type cucumber
Then I click on search button
Then I clear the search text